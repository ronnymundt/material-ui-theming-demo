import { TTheme } from "../types/theme.type";

export interface ITheme {
    name: string,
    theme: TTheme,
    isSelected: boolean
}

export interface IThemeState {
    themes: Array<ITheme>
}