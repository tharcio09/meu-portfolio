import { beforeEach, describe, expect, it, vi } from 'vitest';

beforeEach(() => {
  vi.stubGlobal(
    'IntersectionObserver',
    class {
      observe = vi.fn();
      unobserve = vi.fn();
      disconnect = vi.fn();
    }
  );
});

describe('useScrollReveal', () => {
  it('deve existir como função', async () => {
    const { useScrollReveal } = await import('../useScrollReveal');

    expect(typeof useScrollReveal).toBe('function');
  });
});
