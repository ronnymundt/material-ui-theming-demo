import { Component, inject, Injector, OnInit, Renderer2 } from '@angular/core';
import { watchState } from '@ngrx/signals';
import { ThemeStore } from './+state/theme';
import {
  MaterialElementsComponent,
  ThemeSwitcherComponent,
} from './components';
import { ITheme } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [ThemeSwitcherComponent, MaterialElementsComponent],
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  readonly #injector = inject(Injector);
  private readonly themeStore = inject(ThemeStore);
  private readonly renderer = inject(Renderer2);

  ngOnInit() {
    watchState(
      this.themeStore,
      () => this.setThemeToBodyByThemes(this.themeStore.selectThemes()),
      {
        injector: this.#injector,
      },
    );
  }

  /**
   * Methode setzt die Theme auf den Page Body.
   */
  private setThemeToBodyByThemes(themes: ITheme[]) {
    themes.map((x) => this.renderer.removeClass(document.body, x.theme)); // remove all themes
    const t = themes.find((theme) => theme.isSelected) ?? themes[0]; // get selected theme
    this.renderer.addClass(document.body, t.theme); // add selected theme
  }
}
