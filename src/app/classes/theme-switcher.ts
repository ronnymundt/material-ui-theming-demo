import {ITheme} from '../interfaces/theme.interface';

export const defaultThemeSetup: ITheme[] = [
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
