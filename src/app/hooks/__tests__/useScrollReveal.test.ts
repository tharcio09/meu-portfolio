import { createElement } from 'react';
import { act, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useScrollReveal } from '../useScrollReveal';

let observerCallback: IntersectionObserverCallback;
const observe = vi.fn();
const unobserve = vi.fn();
const disconnect = vi.fn();
const observerConstructor = vi.fn();

class IntersectionObserverTestMock {
  constructor(callback: IntersectionObserverCallback) {
    observerConstructor(callback);
    observerCallback = callback;
  }

  observe = observe;
  unobserve = unobserve;
  disconnect = disconnect;
}

function TestComponent() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return createElement('div', { ref, 'data-testid': 'target' }, visible ? 'visível' : 'oculto');
}

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(window.matchMedia).mockReturnValue({
    matches: false,
  } as MediaQueryList);
  vi.stubGlobal('IntersectionObserver', IntersectionObserverTestMock);
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('useScrollReveal', () => {
  it('torna o conteúdo visível imediatamente com reduced motion', () => {
    vi.mocked(window.matchMedia).mockReturnValue({ matches: true } as MediaQueryList);

    render(createElement(TestComponent));

    expect(screen.getByTestId('target')).toHaveTextContent('visível');
    expect(observerConstructor).not.toHaveBeenCalled();
  });

  it('revela via callback inicial do observer quando já está na viewport', () => {
    render(createElement(TestComponent));

    expect(screen.getByTestId('target')).toHaveTextContent('oculto');
    expect(observe).toHaveBeenCalledWith(screen.getByTestId('target'));

    act(() => {
      observerCallback([{ isIntersecting: true } as IntersectionObserverEntry], {} as never);
    });

    expect(screen.getByTestId('target')).toHaveTextContent('visível');
    expect(unobserve).toHaveBeenCalled();
  });

  it('observa e revela um elemento inicialmente fora da viewport', () => {
    render(createElement(TestComponent));

    expect(observe).toHaveBeenCalledWith(screen.getByTestId('target'));
    expect(screen.getByTestId('target')).toHaveTextContent('oculto');

    act(() => {
      observerCallback([{ isIntersecting: true } as IntersectionObserverEntry], {} as never);
    });

    expect(screen.getByTestId('target')).toHaveTextContent('visível');
    expect(unobserve).toHaveBeenCalled();
  });

  it('não registra listeners redundantes de scroll ou resize', () => {
    const addEventListener = vi.spyOn(window, 'addEventListener');

    render(createElement(TestComponent));

    expect(addEventListener).not.toHaveBeenCalledWith(
      'scroll',
      expect.any(Function),
      expect.anything()
    );
    expect(addEventListener).not.toHaveBeenCalledWith('resize', expect.any(Function));
  });
});
