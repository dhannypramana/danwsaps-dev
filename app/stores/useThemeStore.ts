export const useThemeStore = defineStore('theme', () => {
    const theme = shallowRef<Theme>(THEME.DARK);

    const toggle = () => {
        theme.value = theme.value === THEME.DARK
            ? THEME.LIGHT
            : THEME.DARK;
    };

    return {
        theme,
        toggle,
    };
});
