import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreReducersModule } from './modules/store-reducers.module';
import { MaterialElementsComponent } from './components/material-elements/material-elements.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeSwitcherComponent,
    MaterialElementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreReducersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
