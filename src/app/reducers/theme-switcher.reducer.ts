import { Action, createReducer, on } from '@ngrx/store';
import { changeThemeAction } from '../actions/theme-switcher.actions';
import { ThemeSwitcher } from '../classes/theme-switcher';
import { ITheme, IThemeState } from '../interfaces/theme.interface';

export const themeSwitcherFeatureKey = 'themeSwitcher';

export const initialState: IThemeState = {
  themes: new ThemeSwitcher().defaultThemeSetup
};

export const themeSwitcherReducer = createReducer(
  initialState,
  on(
    changeThemeAction,
    (state: IThemeState, { theme }) => {
      let cState = <IThemeState>JSON.parse(JSON.stringify(state));      
      for(let state of cState.themes) { // change selected theme
        if(state.theme === theme.theme) {
          state.isSelected = theme.isSelected;
        } else {
          state.isSelected = false;
        }
      }

      return { ...cState }
    }
  )
);
