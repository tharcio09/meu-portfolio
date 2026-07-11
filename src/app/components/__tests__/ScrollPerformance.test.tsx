import { fireEvent, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { HeroParallaxBackground } from '../ui/HeroParallaxBackground';
import { ReadingProgressBar } from '../ui/ReadingProgressBar';

let frameCallback: FrameRequestCallback | undefined;

beforeEach(() => {
  frameCallback = undefined;
  vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
    frameCallback = callback;
    return 1;
  });
  vi.spyOn(window, 'cancelAnimationFrame').mockImplementation(() => undefined);
  vi.mocked(window.matchMedia).mockReturnValue({ matches: false } as MediaQueryList);
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('performance de scroll', () => {
  it('agenda o parallax do Hero com requestAnimationFrame', () => {
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 200 });
    const { container } = render(<HeroParallaxBackground />);
    const gradient = container.querySelector<HTMLDivElement>('[aria-hidden="true"]');

    expect(window.requestAnimationFrame).toHaveBeenCalledTimes(1);
    frameCallback?.(0);

    expect(gradient).toHaveStyle({ transform: 'translateY(60px)' });
    expect(gradient).not.toHaveClass('animate-gradient-shift');
  });

  it('não ativa o parallax quando reduced motion está habilitado', () => {
    vi.mocked(window.matchMedia).mockReturnValue({ matches: true } as MediaQueryList);

    render(<HeroParallaxBackground />);

    expect(window.requestAnimationFrame).not.toHaveBeenCalled();
  });

  it('atualiza a barra de progresso sem estado React', () => {
    Object.defineProperty(document.documentElement, 'scrollHeight', {
      configurable: true,
      value: 2000,
    });
    Object.defineProperty(window, 'innerHeight', { configurable: true, value: 1000 });
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 500 });
    const { container } = render(<ReadingProgressBar />);
    const progress = container.querySelector<HTMLDivElement>('[style]');

    frameCallback?.(0);

    expect(progress).toHaveStyle({ transform: 'scaleX(0.5)' });
  });

  it('cancela frames pendentes no cleanup', () => {
    const { unmount } = render(<ReadingProgressBar />);
    fireEvent.scroll(window);

    unmount();

    expect(window.cancelAnimationFrame).toHaveBeenCalledWith(1);
  });
});
