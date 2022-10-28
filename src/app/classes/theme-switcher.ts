import { ITheme } from "../interfaces/theme.interface";

export class ThemeSwitcher {
    public defaultThemeSetup: Array<ITheme> = [
        {
            name: "Dark",
            theme: "dark-theme",
            isSelected: true
        },
        {
            name: "Light",
            theme: "light-theme",
            isSelected: false
        },
        {
            name: "Custom",
            theme: "custom-theme",
            isSelected: false
        }
    ]
}
