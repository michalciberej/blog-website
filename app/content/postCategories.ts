export const categories = ['Test1', 'Test2', 'Test3'] as const;

export type Category = (typeof categories)[number];
