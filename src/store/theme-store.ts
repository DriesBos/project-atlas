import { createStore } from 'zustand/vanilla';

export type ThemeState = 'light' | 'dark';

export type ThemeActions = {
  setTheme: (theme: ThemeState) => void;
};

export type ThemeStore = {
  theme: ThemeState;
} & ThemeActions;

export const defaultInitState: ThemeState = 'dark';

export const createThemeStore = (
  initialState: ThemeState = defaultInitState
) => {
  const store = createStore<ThemeStore>()((set) => ({
    theme: initialState,
    setTheme: (theme: ThemeState) => {
      set((state) => ({ ...state, theme }));
    },
  }));

  return store;
};
