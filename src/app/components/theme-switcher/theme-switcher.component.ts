import {Component, DestroyRef, OnInit, Renderer2} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {MatRadioChange, MatRadioModule} from '@angular/material/radio';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { changeThemeAction } from '../../actions/theme-switcher.actions';
import { ITheme, IThemeState } from '../../interfaces';
import { selectTheme } from '../../selectors/theme-switcher.selectors';

@Component({
  selector: 'theme-switcher',
  templateUrl: './theme-switcher.component.html',
  imports: [
    MatRadioModule
  ],
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {
  themes: ITheme[] = [];

  constructor(
    private render: Renderer2,
    private themeStore: Store<IThemeState>,
    private readonly destroyRef: DestroyRef
  ) { } 

  ngOnInit() { 
    this.initSubs();
  }

  /**
   * Methode init. die Subscriptions.
   */
  private initSubs() {
    this.themeStore.select(selectTheme).pipe(
      takeUntilDestroyed(this.destroyRef),
      map(x => x.themes)
    ).subscribe((themes: ITheme[]) => {
      this.themes = themes;
      this.setThemeToBodyByThemes();
    });
  }

  /**
   * Methode setzt die Theme auf den Page Body.
   */
  private setThemeToBodyByThemes() {
    this.themes.map(x => this.render.removeClass(document.body, x.theme)); // remove all themes
    const t = this.themes.find(theme => theme.isSelected) ?? this.themes[0]; // get selected theme
    this.render.addClass(document.body, t.theme); // add selected theme
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
      theme: event.value
    }

    this.themeStore.dispatch(changeThemeAction({ theme: theme }));
  }
}
