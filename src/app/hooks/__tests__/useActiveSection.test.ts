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

// Monta uma entrada mínima do observer — o cast duplo é necessário porque o
// IntersectionObserverEntry real exige mais propriedades do que o teste usa.
const buildEntry = (
  isIntersecting: boolean,
  target: HTMLElement | null
): IntersectionObserverEntry =>
  ({ isIntersecting, target }) as unknown as IntersectionObserverEntry;

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

  it('observa apenas as seções existentes com um único observer', () => {
    render(createElement(TestComponent));

    expect(observerRecords).toHaveLength(1);
    expect(observerRecords[0].options).toEqual({ rootMargin: '-40% 0px -55% 0px' });
    expect(observerRecords[0].observer.observe).toHaveBeenCalledWith(
      document.getElementById('projetos')
    );
    expect(observerRecords[0].observer.observe).toHaveBeenCalledWith(
      document.getElementById('processo')
    );
    expect(observerRecords[0].observer.observe).toHaveBeenCalledTimes(2);
    expect(screen.getByTestId('active-section')).toHaveTextContent('');
  });

  it('atualiza a seção ativa quando intersecta e preserva ao sair', () => {
    render(createElement(TestComponent));

    act(() => {
      observerRecords[0].callback(
        [
          buildEntry(false, document.getElementById('projetos')),
          buildEntry(true, document.getElementById('processo')),
        ],
        observerRecords[0].observer as unknown as IntersectionObserver
      );
    });

    expect(screen.getByTestId('active-section')).toHaveTextContent('processo');

    act(() => {
      observerRecords[0].callback(
        [buildEntry(false, document.getElementById('processo'))],
        observerRecords[0].observer as unknown as IntersectionObserver
      );
    });

    // Nenhuma seção intersectando a faixa central — preserva a anterior.
    expect(screen.getByTestId('active-section')).toHaveTextContent('processo');

    act(() => {
      observerRecords[0].callback(
        [buildEntry(true, document.getElementById('projetos'))],
        observerRecords[0].observer as unknown as IntersectionObserver
      );
    });

    expect(screen.getByTestId('active-section')).toHaveTextContent('projetos');
  });

  it('elege a primeira seção da lista quando várias intersectam', () => {
    render(createElement(TestComponent));

    act(() => {
      observerRecords[0].callback(
        [
          buildEntry(true, document.getElementById('processo')),
          buildEntry(true, document.getElementById('projetos')),
        ],
        observerRecords[0].observer as unknown as IntersectionObserver
      );
    });

    expect(screen.getByTestId('active-section')).toHaveTextContent('projetos');
  });

  it('desconecta o observer ao desmontar', () => {
    const { unmount } = render(createElement(TestComponent));

    unmount();

    expect(observerRecords[0].observer.disconnect).toHaveBeenCalledOnce();
  });
});
