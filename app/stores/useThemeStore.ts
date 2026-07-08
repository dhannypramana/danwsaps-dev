export const useThemeStore = defineStore('theme', () => {
    const value = shallowRef<string>('DARK');
    return {
        value,
    };
});
