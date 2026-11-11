import React from 'react';
import Footer from './footer';
import Head from 'next/head';
import { generateNextSeo } from 'next-seo/pages';

const DEFAULT_TITLE =
    'Léon Tran-Van — Frontend engineer with a designer soul curbed by color blindness';
const DESCRIPTION =
    'Building curated projects and beautiful interfaces with the benefits of cutting-edge technology.';

const OPENGRAPH_CONFIG = {
    url: 'https://www.leontranvan.com/',
    title: DEFAULT_TITLE,
    description: DESCRIPTION,
    images: [
        {
            url: 'https://www.leontranvan.com/cover.png',
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
};

const Layout = ({ children, SEOTitle }) => {
    return (
        <>
            <Head>
                {generateNextSeo({
                    title: SEOTitle,
                    titleTemplate: '%s — Léon Tran-Van',
                    defaultTitle: DEFAULT_TITLE,
                    description: DESCRIPTION,
                    openGraph: OPENGRAPH_CONFIG,
                })}
            </Head>
            <main className="page-content">
                {children}
                <Footer />
            </main>
        </>
    );
};

export default Layout;
