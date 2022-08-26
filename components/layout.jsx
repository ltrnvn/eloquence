import React from 'react';
import Footer from './footer';
import Menu from '/components/menu/menu';
import { NextSeo } from 'next-seo';

const Layout = (props) => {
    return (
        <>
            <NextSeo
                title={props.title}
                titleTemplate="%s — Léon Tran-Van"
                description="I'm a front-end developer with a designer soul curbed by color blindness."
            />
            <main className="max-w-3xl mx-auto px-4 py-12 sm:pt-40 sm:pb-28">
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
    );
};

export default Layout;
