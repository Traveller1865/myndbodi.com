'use client';

import { createContext, useContext } from 'react';

export type World = 'mbi' | 'chronos' | 'legal';

const ThemeContext = createContext<World>('mbi');

export function ThemeProvider({
  world,
  children,
}: {
  world: World;
  children: React.ReactNode;
}) {
  return (
    <ThemeContext.Provider value={world}>{children}</ThemeContext.Provider>
  );
}

export function useWorld(): World {
  return useContext(ThemeContext);
}
