import React from 'react';
import {
    KBarProvider,
    KBarPortal,
    KBarPositioner,
    KBarAnimator,
    KBarSearch,
} from 'kbar';
import { useRouter } from 'next/router';
import MenuButton from '@/components/menu/menuButton';
import MenuItems from '@/components/menu/menuItems';
import { social } from '@/utils/social';
import { useTheme } from '@/hooks/useTheme';

const Menu = ({ children }) => {
    const { setTheme, removeTheme } = useTheme();
    const { push } = useRouter();

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
            id: 'resume',
            name: 'Resume',
            shortcut: ['r'],
            keywords: 'resume',
            section: 'Pages',
            perform: async () => push('/resume'),
        },
        {
            id: 'playground',
            name: 'Playground',
            shortcut: ['p'],
            keywords: 'playground',
            section: 'Pages',
            perform: async () => push('/playground'),
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
            id: 'playlists',
            name: 'Playlists',
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
                window.open('https://github.com/ltrnvn/eloquence', '_blank'),
        },
    ];

    return (
        <KBarProvider actions={[...actions, ...socialActions]}>
            <KBarPortal>
                <KBarPositioner className="z-30 bg-slate-50/80 backdrop-blur-sm dark:bg-slate-800/80">
                    <KBarAnimator className="mx-auto w-full max-w-xl overflow-hidden rounded-lg bg-beige drop-shadow-2xl dark:bg-slate-900">
                        <KBarSearch className="font-md w-full border-b border-slate-100 bg-transparent py-3 px-4 font-normal outline-none placeholder:text-slate-400 text-slate-900 dark:border-slate-800 dark:text-white" />
                        <MenuItems />
                    </KBarAnimator>
                </KBarPositioner>
            </KBarPortal>
            <MenuButton />
            {children}
        </KBarProvider>
    );
};

export default Menu;
