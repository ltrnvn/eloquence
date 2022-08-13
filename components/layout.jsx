import React from 'react'
import Footer from './footer'
import Menu from '/components/menu/menu'

const Layout = (props) => {
    return (
        <>
            <main className="max-w-3xl mx-auto px-4 py-12 sm:py-40">
                <Menu>
                    {props.title && (
                        <h1 className="font-bold text-h1 text-black dark:text-white">
                            {props.title}
                        </h1>
                    )}
                    {props.children}
                </Menu>
            </main>
            <Footer />
        </>
    )
}

export default Layout
