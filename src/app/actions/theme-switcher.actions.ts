import { createAction, props } from '@ngrx/store';
import { ITheme } from '../interfaces/theme.interface';

export const changeThemeAction = createAction(
  '[ThemesSwitcher] Change Theme',
  props<{ theme: ITheme }>()
);