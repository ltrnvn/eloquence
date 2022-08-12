import React, { useEffect } from 'react'
import {
    KBarProvider,
    KBarPortal,
    KBarPositioner,
    KBarAnimator,
    KBarSearch,
    useMatches,
    KBarResults,
} from 'kbar'
import { useRouter } from 'next/router'
import MenuButton from './menuButton'
import { useLocalStorageValue } from '@react-hookz/web'

const Menu = (props) => {
    const [theme, setTheme, removeTheme] = useLocalStorageValue(
        'theme',
        undefined
    )
    const { push } = useRouter()

    useEffect(() => {
        if (
            theme === 'dark' ||
            (!theme &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

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
    ]

    return (
        <KBarProvider actions={actions}>
            <KBarPortal>
                <KBarPositioner className="z-30 bg-gray-50/80 backdrop-blur-sm dark:bg-slate-800/80">
                    <KBarAnimator className="mx-auto w-full max-w-xl overflow-hidden rounded-lg bg-white drop-shadow-2xl dark:bg-gray-900">
                        <KBarSearch className="font-md w-full border-b border-gray-100 bg-transparent py-3 px-4 font-normal text-gray-900 outline-none dark:border-gray-800 dark:text-white" />
                        <RenderResults />
                    </KBarAnimator>
                </KBarPositioner>
            </KBarPortal>
            <MenuButton />
            {props.children}
        </KBarProvider>
    )
}

function RenderResults() {
    const { results } = useMatches()

    return (
        <KBarResults
            items={results}
            onRender={({ item, active }) => {
                return typeof item === 'string' ? (
                    <div className="text-sm px-4 py-2 text-gray-400">
                        {item}
                    </div>
                ) : (
                    <div
                        className={`flex items-center justify-between cursor-pointer px-4 py-2 ${
                            active
                                ? 'bg-slate-100 dark:bg-slate-700'
                                : 'bg-white dark:bg-slate-900'
                        }`}
                    >
                        {item.name}
                        {item.shortcut && (
                            <div className="flex h-6 w-6 items-center justify-center rounded-md text-xs transition-colors border bg-slate-100 border-slate-300 dark:bg-slate-900 dark:border-slate-700">
                                {item.shortcut}
                            </div>
                        )}
                    </div>
                )
            }}
        />
    )
}

export default Menu
