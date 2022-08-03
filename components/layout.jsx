import React from 'react'
import Footer from './footer'
import Menu from '/components/menu'

const Layout = (props) => {
    return (
        <Menu>
            <main className="max-w-3xl mx-auto py-28 px-4 sm:py-42">
                <h1 className="font-bold text-h1 text-black dark:text-white">
                    {props.title}
                </h1>
                {props.children}
            </main>
            <Footer />
        </Menu>
    )
}

export default Layout
