import { computed, effect, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed, withHooks,
  withMethods,
  withState
} from '@ngrx/signals';
import { defaultThemeSetup } from '../../configs';
import { ITheme } from '../../interfaces';

const initialThemeState = {
  themes: defaultThemeSetup,
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
  // hooks
  withHooks({
    onInit(store) {
      effect(() => {
        const selected = store.selectSelectedTheme();

        // console.log('Selected theme changed:', selected);

        /*store.themes().map(x => renderer2.removeClass(document.body, x.theme)); // remove all themes
        const t = store.themes().find(theme => theme.isSelected) ?? store.themes()[0]; // get selected theme
        renderer2.addClass(document.body, t.theme); // add selected theme*/
      });
    }})
);
