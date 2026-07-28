export type ExperienciaAnterior = {
  period: string;
  role: string;
  org: string;
  summary: string;
};

export const trajectorySkills = [
  'Organização e prazos',
  'Análise de problemas',
  'Documentação de processos',
  'Comunicação entre áreas',
] as const;

export const experienciasAnteriores: ExperienciaAnterior[] = [
  {
    period: 'Nov/2024 – Atual',
    role: 'Técnico de Suporte e Manutenção de TI',
    org: 'Autônomo',
    summary:
      'Atendimento técnico para manutenção e configuração de computadores, incluindo diagnóstico de desempenho, hardware e rede básica, backup e migração de arquivos e orientação a clientes.',
  },
  {
    period: 'Mai/2023 – Out/2023',
    role: 'Auxiliar Administrativo',
    org: 'EPOS',
    summary:
      'Organização de demandas internas, documentação de processos e comunicação entre equipes. Essa prática reforçou minha atenção a registro, clareza e fluxo de trabalho.',
  },
  {
    period: 'Jan/2022 – Mai/2022',
    role: 'Auxiliar Mecânico',
    org: 'Komaq',
    summary:
      'Diagnóstico técnico de equipamentos e análise de causa raiz, experiência que contribui para investigar problemas com método antes de buscar soluções.',
  },
];
