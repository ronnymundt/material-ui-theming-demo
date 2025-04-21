import { createReducer, on } from '@ngrx/store';
import { changeThemeAction } from '../actions/theme-switcher.actions';
import {defaultThemeSetup} from '../configs';
import { IThemeState } from '../interfaces';

export const themeSwitcherFeatureKey = 'themeSwitcher';

export const initialState: IThemeState = {
  themes: defaultThemeSetup
};

export const themeSwitcherReducer = createReducer(
  initialState,
  on(changeThemeAction, (state, { theme }) => ({
    ...state,
    themes: state.themes.map(t => ({
      ...t,
      isSelected: t.theme === theme.theme ? theme.isSelected : false
    }))
  }))
);
