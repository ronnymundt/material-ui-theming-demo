import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { defaultThemes } from '../../configs';
import { ITheme } from '../../interfaces';
import {IThemeState} from './theme.model';

const initialThemeState: IThemeState = {
  themes: defaultThemes,
};

export const ThemeStore = signalStore(
  { providedIn: 'root' },
  withState(() => initialThemeState),
  // actions
  withMethods((store) => ({
    setTheme: (theme: ITheme) =>
      patchState(store, {
        themes: store.themes().map((t) => ({
          ...t,
          isSelected: t.theme === theme.theme ? theme.isSelected : false,
        })),
      }),
  })),
  // selectors
  withComputed((store) => ({
    selectThemes: computed(() => store.themes()),
    selectSelectedTheme: computed(() =>
      store.themes().find((theme) => theme.isSelected),
    ),
  })),
);
