export type ExperienciaAnterior = {
  period: string;
  role: string;
  org: string;
  summary: string;
};

export const trajectorySkills = [
  'Organização',
  'Atenção a processos',
  'Comunicação entre áreas',
  'Análise de problemas',
  'Registro de informações',
  'Responsabilidade com prazos',
  'Rotinas operacionais',
] as const;

export const experienciasAnteriores: ExperienciaAnterior[] = [
  {
    period: 'Mai/2023 – Out/2023',
    role: 'Auxiliar Administrativo',
    org: 'EPOS',
    summary:
      'Organização de demandas internas, documentação de processos e comunicação entre equipes — prática que reforçou minha atenção a registro, clareza e fluxo de trabalho.',
  },
  {
    period: 'Jan/2022 – Mai/2022',
    role: 'Auxiliar Mecânico',
    org: 'Komaq',
    summary:
      'Diagnóstico técnico de equipamentos e análise de causa raiz — experiência que contribui para investigar problemas com método antes de buscar soluções.',
  },
];
