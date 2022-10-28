import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IThemeState } from '../interfaces/theme.interface';
import { themeSwitcherFeatureKey } from '../reducers/theme-switcher.reducer';

export const selectThemeState = createFeatureSelector<IThemeState>(themeSwitcherFeatureKey);
export const selectTheme = createSelector(
    selectThemeState,
    (state: IThemeState) => { return state; }
);