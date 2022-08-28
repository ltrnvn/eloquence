import React, { useEffect } from 'react';
import {
    KBarProvider,
    KBarPortal,
    KBarPositioner,
    KBarAnimator,
    KBarSearch,
    useMatches,
    KBarResults,
} from 'kbar';
import { useRouter } from 'next/router';
import MenuButton from './menuButton';
import { useLocalStorageValue } from '@react-hookz/web';
import { social } from '@/utils/social';
import Image from 'next/image';

const Menu = ({ children }) => {
    const [theme, setTheme, removeTheme] = useLocalStorageValue(
        'theme',
        undefined
    );
    const { push } = useRouter();

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
        icon: (
            <Image
                src={`/social/${id}.svg`}
                width={16}
                height={16}
                quality={100}
                alt=""
            />
        ),
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
                        <KBarSearch className="font-md w-full border-b border-slate-100 bg-transparent py-3 px-4 font-normal text-slate-900 outline-none dark:border-slate-800 dark:text-white" />
                        <RenderResults />
                    </KBarAnimator>
                </KBarPositioner>
            </KBarPortal>
            <MenuButton />
            {children}
        </KBarProvider>
    );
};

function RenderResults() {
    const { results } = useMatches();

    return (
        <KBarResults
            items={results}
            onRender={({ item, active }) => {
                return typeof item === 'string' ? (
                    <div className="text-sm px-4 py-2 text-slate-400">
                        {item}
                    </div>
                ) : (
                    <div
                        className={`flex items-center cursor-pointer px-4 py-2 ${
                            active
                                ? 'bg-slate-100 dark:bg-slate-700'
                                : 'bg-beige dark:bg-slate-900'
                        }`}
                    >
                        {item.icon && (
                            <div className="mr-3 flex">{item.icon}</div>
                        )}
                        {item.name}
                        {item.shortcut && (
                            <div className="flex h-6 w-6 ml-auto items-center justify-center rounded-md text-xs transition-colors border bg-slate-200 border-slate-300 dark:bg-slate-900 dark:border-slate-700">
                                {item.shortcut}
                            </div>
                        )}
                    </div>
                );
            }}
        />
    );
}

export default Menu;
