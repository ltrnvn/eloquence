import React, { useEffect, useRef } from 'react';
import {
    KBarProvider,
    KBarPortal,
    KBarPositioner,
    KBarAnimator,
    KBarSearch,
} from 'kbar';
import { useRouter } from 'next/router';
import MenuContent from '@/components/menu/menuContent';
import MenuButton from '@/components/menu/menuButton';
import { useLocalStorageValue } from '@react-hookz/web';
import { social } from '@/utils/social';

const Menu = ({ children }) => {
    const [theme, setTheme, removeTheme] = useLocalStorageValue(
        'theme',
        undefined
    );
    const { push } = useRouter();
    const lazyRootRef = useRef(null);

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

    const socialActions = social.map(({ id, name, url }) => ({
        id,
        name,
        keywords: id,
        iconSource: `/social/${id}.svg`,
        iconDescription: `${id} icon`,
        section: 'Social',
        perform: () => window.open(url, '_blank'),
    }));

    const actions = [
        {
            id: 'home',
            name: 'Home',
            shortcut: ['h'],
            keywords: 'home',
            section: 'Pages',
            perform: async () => push('/'),
        },
        {
            id: 'games',
            name: 'Games',
            shortcut: ['g'],
            keywords: 'games',
            section: 'Pages',
            perform: async () => push('/games'),
        },
        {
            id: 'resume',
            name: 'Resume',
            shortcut: ['r'],
            keywords: 'resume',
            section: 'Pages',
            perform: async () => push('/resume'),
        },
        {
            id: 'playlists',
            name: 'Playlists',
            shortcut: ['p'],
            keywords: 'playlists',
            section: 'Pages',
            perform: async () => push('/playlists'),
        },
        {
            id: 'theme',
            name: 'Change theme...',
            shortcut: ['t'],
            keywords: 'theme',
            section: 'Utilities',
        },
        {
            id: 'lightMode',
            name: 'Light',
            shortcut: ['l'],
            keywords: 'light',
            parent: 'theme',
            perform: () => setTheme('light'),
        },
        {
            id: 'darkMode',
            name: 'Dark',
            shortcut: ['d'],
            keywords: 'dark',
            parent: 'theme',
            perform: () => setTheme('dark'),
        },
        {
            id: 'systemTheme',
            name: 'System Default',
            shortcut: ['s'],
            keywords: 'light',
            parent: 'theme',
            perform: () => removeTheme(),
        },
        {
            id: 'code',
            name: 'View source code',
            keywords: 'code',
            section: 'Utilities',
            perform: () =>
                window.open(
                    'https://github.com/Ephalys/portfolio-next',
                    '_blank'
                ),
        },
    ];

    return (
        <KBarProvider actions={[...actions, ...socialActions]}>
            <KBarPortal>
                <KBarPositioner className="z-30 bg-slate-50/80 backdrop-blur-sm dark:bg-slate-800/80">
                    <KBarAnimator className="mx-auto w-full max-w-xl overflow-hidden rounded-lg bg-beige drop-shadow-2xl dark:bg-slate-900">
                        <div ref={lazyRootRef}>
                            <KBarSearch className="font-md w-full border-b border-slate-100 bg-transparent py-3 px-4 font-normal outline-none placeholder:text-slate-400 text-slate-900 dark:border-slate-800 dark:text-white" />
                            <MenuContent ref={lazyRootRef} />
                        </div>
                    </KBarAnimator>
                </KBarPositioner>
            </KBarPortal>
            <MenuButton />
            {children}
        </KBarProvider>
    );
};

export default Menu;
