import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Tharcio Santos - Desenvolvedor Fullstack';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#09090b',
        color: '#fafafa',
        padding: '64px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            fontSize: 30,
            fontWeight: 800,
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 12,
              background: '#06b6d4',
              color: '#041014',
            }}
          >
            T
          </div>
          Tharcio.dev
        </div>
        <div
          style={{
            border: '1px solid rgba(34, 211, 238, 0.45)',
            borderRadius: 999,
            color: '#67e8f9',
            padding: '10px 18px',
            fontSize: 22,
            fontWeight: 700,
          }}
        >
          Disponível para oportunidade júnior
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div style={{ color: '#67e8f9', fontSize: 28, fontWeight: 700 }}>
          React · Next.js · Node.js · TypeScript
        </div>
        <div style={{ maxWidth: 900, fontSize: 78, lineHeight: 1.02, fontWeight: 900 }}>
          Tharcio Santos
        </div>
        <div style={{ maxWidth: 950, color: '#d4d4d8', fontSize: 34, lineHeight: 1.28 }}>
          Desenvolvedor fullstack com stack completa em produção.
        </div>
        <div style={{ maxWidth: 950, color: '#d4d4d8', fontSize: 30, lineHeight: 1.28 }}>
          Aplicações com interface, autenticação, banco de dados, APIs e deploy ativo.
        </div>
      </div>

      <div style={{ display: 'flex', gap: '16px', color: '#a1a1aa', fontSize: 24 }}>
        <span>Projetos com deploy ativo</span>
        <span>·</span>
        <span>Código público</span>
        <span>·</span>
        <span>Decisões técnicas visíveis</span>
      </div>
    </div>,
    size
  );
}
