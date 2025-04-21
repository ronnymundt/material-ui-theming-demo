import { TTheme } from "../types";

export interface ITheme {
    name: string,
    theme: TTheme,
    isSelected: boolean
}

export interface IThemeState {
    themes: ITheme[]
}
