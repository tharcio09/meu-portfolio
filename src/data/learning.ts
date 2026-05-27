export type LearningItem = {
  name: string;
  description: string;
  icon: string;
};

export const learningItems: LearningItem[] = [
  {
    name: 'Docker',
    description: 'Containerização de aplicações e ambientes de desenvolvimento reproduzíveis.',
    icon: '🐳',
  },
  {
    name: 'Testes de integração',
    description: 'Cobertura de testes com Vitest além do unitário — testando fluxos completos.',
    icon: '🧪',
  },
  {
    name: 'Zod',
    description: 'Validação de schemas TypeScript-first para APIs e formulários.',
    icon: '🛡️',
  },
];
