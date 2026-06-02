export type LearningItem = {
  name: string;
  description: string;
};

export const learningItems: LearningItem[] = [
  {
    name: 'Docker',
    description: 'Containerização de aplicações e ambientes de desenvolvimento reproduzíveis.',
  },
  {
    name: 'Testes de integração',
    description: 'Cobertura de testes com Vitest além do unitário — testando fluxos completos.',
  },
  {
    name: 'Zod',
    description: 'Validação de schemas TypeScript-first para APIs e formulários.',
  },
];
