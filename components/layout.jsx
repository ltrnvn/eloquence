import React from 'react'
import ExternalLink from './externalLink'
import Footer from './footer'

const Layout = () => {
    return (
        <>
            <main className="max-w-3xl mx-auto py-28 px-4 sm:py-42">
                <h1 className="font-bold text-h1">Léon Tran-Van</h1>
                <p className="text-lg">
                    I’m currently working as a front-end engineer at{' '}
                    <ExternalLink
                        link="https://hager.com"
                        text="Hager"
                        size="16"
                    />
                    , a leading supplier of solutions and services for
                    electrical installations.
                </p>
            </main>
            <Footer />
        </>
    )
}

export default Layout
