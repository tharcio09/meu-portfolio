import { createElement } from 'react';
import { act, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useActiveSection } from '../useActiveSection';

const SECTION_IDS = ['projetos', 'processo', 'ausente'] as const;

type ObserverRecord = {
  callback: IntersectionObserverCallback;
  options?: IntersectionObserverInit;
  observer: IntersectionObserverTestMock;
};

let observerRecords: ObserverRecord[] = [];

class IntersectionObserverTestMock {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();

  constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
    observerRecords.push({ callback, options, observer: this });
  }
}

function TestComponent() {
  const activeSection = useActiveSection(SECTION_IDS);

  return createElement('output', { 'data-testid': 'active-section' }, activeSection);
}

describe('useActiveSection', () => {
  beforeEach(() => {
    observerRecords = [];
    document.body.innerHTML = '<section id="projetos"></section><section id="processo"></section>';
    vi.stubGlobal('IntersectionObserver', IntersectionObserverTestMock);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    document.body.innerHTML = '';
  });

  it('observa apenas as seções existentes com a margem configurada', () => {
    render(createElement(TestComponent));

    expect(observerRecords).toHaveLength(2);
    expect(observerRecords[0].options).toEqual({ rootMargin: '-40% 0px -55% 0px' });
    expect(observerRecords[1].options).toEqual({ rootMargin: '-40% 0px -55% 0px' });
    expect(observerRecords[0].observer.observe).toHaveBeenCalledWith(
      document.getElementById('projetos')
    );
    expect(observerRecords[1].observer.observe).toHaveBeenCalledWith(
      document.getElementById('processo')
    );
    expect(screen.getByTestId('active-section')).toHaveTextContent('');
  });

  it('atualiza a seção ativa somente quando ela intersecta', () => {
    render(createElement(TestComponent));

    act(() => {
      observerRecords[1].callback(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        observerRecords[1].observer as unknown as IntersectionObserver
      );
    });

    expect(screen.getByTestId('active-section')).toHaveTextContent('processo');

    act(() => {
      observerRecords[0].callback(
        [{ isIntersecting: false } as IntersectionObserverEntry],
        observerRecords[0].observer as unknown as IntersectionObserver
      );
    });

    expect(screen.getByTestId('active-section')).toHaveTextContent('processo');
  });

  it('desconecta todos os observers ao desmontar', () => {
    const { unmount } = render(createElement(TestComponent));

    unmount();

    expect(observerRecords[0].observer.disconnect).toHaveBeenCalledOnce();
    expect(observerRecords[1].observer.disconnect).toHaveBeenCalledOnce();
  });
});
