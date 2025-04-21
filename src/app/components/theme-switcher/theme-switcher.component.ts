import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import {MatRadioChange, MatRadioModule} from '@angular/material/radio';
import { Store } from '@ngrx/store';
import { map, Subscription } from 'rxjs';
import { changeThemeAction } from '../../actions/theme-switcher.actions';
import { ITheme, IThemeState } from '../../interfaces/theme.interface';
import { selectTheme } from '../../selectors/theme-switcher.selectors';

@Component({
  selector: 'theme-switcher',
  templateUrl: './theme-switcher.component.html',
  imports: [
    MatRadioModule
  ],
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit, OnDestroy {
  // PRIVATES
  private _sub: Subscription = Subscription.EMPTY;

  // PUBLIC
  public themes: Array<ITheme> = new Array<ITheme>();

  constructor(
    private _render: Renderer2,
    private _themeStore: Store<IThemeState>
  ) { } 

  ngOnInit(): void { 
    this._initSubscriptions();
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  } 

  /**
   * Methode init. die Subscribtions.
   */
  private _initSubscriptions(): void {
    this._sub = this._themeStore.select(selectTheme).pipe(
      map(x => x.themes)
    ).subscribe((themes: Array<ITheme>) => {
      this.themes = themes;
      this._setThemeToBodyByThemes(themes);
    });
  }

  /**
   * Methode setzt die Theme auf den Page Body.
   * @param themes 
   */
  private _setThemeToBodyByThemes(themes: Array<ITheme>): void {
    for(let theme of themes) {
      if(theme.isSelected) {
        this._render.addClass(document.body, theme.theme);
      } else {
        this._render.removeClass(document.body, theme.theme);
      }
    }
  }

  // EVENTS  

  /**
   * Event triggert beim Wechsel der Radio Button
   * @param event 
   */
  public onRadioChangeTheme(event: MatRadioChange): void {   
    const theme: ITheme = {
      isSelected: true,
      name: event.source.name,
      theme: event.value
    }

    this._themeStore.dispatch(changeThemeAction({ theme: theme }));    
  }
}
