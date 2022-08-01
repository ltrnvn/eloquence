import React from 'react'
import Footer from './footer'
import {
    KBarProvider,
    KBarPortal,
    KBarPositioner,
    KBarAnimator,
    KBarSearch,
    useMatches,
    KBarResults,
    NO_GROUP,
} from 'kbar'

const Layout = (props) => {
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
            id: 'theme',
            name: 'Change theme...',
            shortcut: ['t'],
            keywords: 'theme',
            section: 'Utilities',
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
            <main className="max-w-3xl mx-auto py-28 px-4 sm:py-42">
                <h1 className="font-bold text-h1">{props.title}</h1>
                {props.children}
            </main>
            <Footer />
        </KBarProvider>
    )
}

function RenderResults() {
    const { results } = useMatches()

    return (
        <KBarResults
            items={results}
            onRender={({ item, active }) =>
                typeof item === 'string' ? (
                    <div>{item}</div>
                ) : (
                    <div
                        className={`px-4 ${
                            active ? 'bg-slate-700' : 'bg-slate-900'
                        }`}
                    >
                        {item.name}
                    </div>
                )
            }
        />
    )
}
export default Layout
