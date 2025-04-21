import {
  Component,
  computed,
  DestroyRef,
  effect,
  inject,
  Injector,
  OnInit,
  Renderer2,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatRadioChange, MatRadioModule } from '@angular/material/radio';
import { watchState } from '@ngrx/signals';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { ThemeStore } from '../../+state/theme';
import { ITheme, IThemeState } from '../../interfaces';
import { selectTheme } from '../../selectors/theme-switcher.selectors';

@Component({
  selector: 'theme-switcher',
  templateUrl: './theme-switcher.component.html',
  imports: [MatRadioModule],
  styleUrls: ['./theme-switcher.component.scss'],
})
export class ThemeSwitcherComponent implements OnInit {
  private readonly themeStore = inject(ThemeStore);
  readonly #injector = inject(Injector);
  private readonly renderer = inject(Renderer2);

  selectedThemes = this.themeStore.selectThemes;

  themes: ITheme[] = [];

  ngOnInit() {
    watchState(
      this.themeStore,
      () => {
        this.themes = this.themeStore.selectThemes();
        this.setThemeToBodyByThemes();
      },
      {
        injector: this.#injector,
      },
    );
  }

  /**
   * Methode setzt die Theme auf den Page Body.
   */
  private setThemeToBodyByThemes() {
    this.themes.map((x) => this.renderer.removeClass(document.body, x.theme)); // remove all themes
    const t = this.themes.find((theme) => theme.isSelected) ?? this.themes[0]; // get selected theme
    this.renderer.addClass(document.body, t.theme); // add selected theme
  }

  // EVENTS

  /**
   * Event triggert beim Wechsel der Radio Button
   * @param event
   */
  onRadioChangeTheme(event: MatRadioChange) {
    const theme: ITheme = {
      isSelected: true,
      name: event.source.name,
      theme: event.value,
    };
    this.themeStore.setTheme(theme);
  }
}
