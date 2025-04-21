import { Component } from '@angular/core';
import {MaterialElementsComponent} from './components/material-elements/material-elements.component';
import {ThemeSwitcherComponent} from './components/theme-switcher/theme-switcher.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    ThemeSwitcherComponent,
    MaterialElementsComponent
  ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
