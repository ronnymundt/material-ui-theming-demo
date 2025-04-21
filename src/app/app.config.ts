import {ApplicationConfig, isDevMode, provideZoneChangeDetection} from '@angular/core';
import {provideEffects} from '@ngrx/effects';
import {provideStore} from '@ngrx/store';
import {provideStoreDevtools} from '@ngrx/store-devtools';
import {themeSwitcherReducer} from './reducers/theme-switcher.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideStore({
      userListState: themeSwitcherReducer,
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
