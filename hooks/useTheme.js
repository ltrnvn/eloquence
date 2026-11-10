import { useEffect } from 'react';
import { useLocalStorageValue } from '@react-hookz/web';

export const useTheme = () => {
    const {
        value: theme,
        set: setTheme,
        remove: removeTheme,
    } = useLocalStorageValue('theme', { initializeWithValue: false });

    useEffect(() => {
        if (
            theme === 'dark' ||
            (!theme &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    return { setTheme, removeTheme };
};
