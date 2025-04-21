import { Injectable, Renderer2 } from '@angular/core';
import { ITheme } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(
    private readonly renderer: Renderer2,
  ) { }

  private setThemeToBodyByThemes(themes: ITheme[]) {
    themes.map(x => this.renderer.removeClass(document.body, x.theme)); // remove all themes
    const t = themes.find(theme => theme.isSelected) ?? themes[0]; // get selected theme
    this.renderer.addClass(document.body, t.theme); // add selected theme
  }
}
