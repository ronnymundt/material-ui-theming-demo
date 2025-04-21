import {ApplicationConfig, isDevMode, provideZoneChangeDetection} from '@angular/core';
import {provideStore} from '@ngrx/store';
import {provideStoreDevtools} from '@ngrx/store-devtools';
import {themeSwitcherFeatureKey, themeSwitcherReducer} from './reducers/theme-switcher.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideStore({
      [themeSwitcherFeatureKey]: themeSwitcherReducer,
    }),
    isDevMode()
      ? provideStoreDevtools({
        autoPause: true,
        trace: false,
        traceLimit: 75,
      })
      : [],
  ]
};
