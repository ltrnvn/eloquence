import React from 'react'
import {
    KBarProvider,
    KBarPortal,
    KBarPositioner,
    KBarAnimator,
    KBarSearch,
    useMatches,
    KBarResults,
} from 'kbar'
import MenuButton from './menuButton'

const Menu = (props) => {
    const actions = [
        {
            id: 'home',
            name: 'Home',
            shortcut: ['h'],
            keywords: 'home',
            section: 'Pages',
            perform: () => (window.location.pathname = '/'),
        },
        {
            id: 'games',
            name: 'Games',
            shortcut: ['g'],
            keywords: 'games',
            section: 'Pages',
            perform: () => (window.location.pathname = 'games'),
        },
        {
            id: 'resume',
            name: 'Resume',
            shortcut: ['r'],
            keywords: 'resume',
            section: 'Pages',
            perform: () => (window.location.pathname = 'resume'),
        },
        {
            id: 'theme',
            name: 'Change theme...',
            shortcut: ['t'],
            keywords: 'theme',
            section: 'Utilities',
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
                            active ? 'bg-slate-700' : 'bg-slate-900'
                        }`}
                    >
                        {item.name}
                        {item.shortcut && (
                            <div className="flex h-6 w-6 items-center justify-center rounded-md text-xs transition-colors bg-slate-900 border border-slate-700">
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
