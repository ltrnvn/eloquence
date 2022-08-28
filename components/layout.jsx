import React from 'react';
import Footer from './footer';
import Menu from '@/components/menu/menu';
import { NextSeo } from 'next-seo';

const Layout = ({ children, title, SEOTitle }) => {
    const DEFAULT_TITLE =
        'Léon Tran-Van — Frontend engineer with a designer soul curbed by color blindness';
    const DESCRIPTION =
        'Building curated projects and beautiful interfaces with the benefits of cutting-edge technology.';
    return (
        <>
            <NextSeo
                title={SEOTitle}
                titleTemplate="%s — Léon Tran-Van"
                defaultTitle={DEFAULT_TITLE}
                description={DESCRIPTION}
                openGraph={{
                    url: 'https://www.tranvanleon.com/',
                    title: DEFAULT_TITLE,
                    description: DESCRIPTION,
                    images: [
                        {
                            url: 'https://www.tranvanleon.com/cover.png',
                            width: 1600,
                            height: 1010,
                        },
                    ],
                    site_name: 'Léon Tran-Van',
                    type: 'profile',
                    profile: {
                        firstName: 'Léon',
                        lastName: 'Tran-Van',
                        username: 'ephalys',
                        gender: 'male',
                    },
                }}
            />
            <main className="max-w-3xl mx-auto px-4 py-12 sm:pt-40 sm:pb-28">
                <Menu>
                    {title && (
                        <h1 className="font-bold text-h1 text-black dark:text-white">
                            {title}
                        </h1>
                    )}
                    {children}
                </Menu>
            </main>
            <Footer />
        </>
    );
};

export default Layout;
