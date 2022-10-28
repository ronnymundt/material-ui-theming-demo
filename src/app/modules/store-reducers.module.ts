import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { themeSwitcherReducer, themeSwitcherFeatureKey } from '../reducers/theme-switcher.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(themeSwitcherFeatureKey, themeSwitcherReducer)
  ]
})
export class StoreReducersModule { }
