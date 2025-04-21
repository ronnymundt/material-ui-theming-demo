import { Component, inject } from '@angular/core';
import { MatRadioChange, MatRadioModule } from '@angular/material/radio';
import { ThemeStore } from '../../+state/theme';
import { ITheme } from '../../interfaces';

@Component({
  selector: 'theme-switcher',
  templateUrl: './theme-switcher.component.html',
  imports: [MatRadioModule],
  styleUrls: ['./theme-switcher.component.scss'],
})
export class ThemeSwitcherComponent {
  private readonly themeStore = inject(ThemeStore);
  selectedThemes = this.themeStore.selectThemes;

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
