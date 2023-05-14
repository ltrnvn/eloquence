import { MDXProvider } from '@mdx-js/react';
import Head from 'next/head';
import '/styles/globals.css';
import '@fontsource/heebo/400.css';
import '@fontsource/heebo/500.css';
import '@fontsource/heebo/700.css';
import '@fontsource/newsreader/400-italic.css';
import ExternalLink from '@/components/base/externalLink';
import H1Title from '@/components/base/h1Title';
import H2Title from '@/components/base/h2Title';
import H3Title from '@/components/base/h3Title';
import Paragraph from '@/components/base/paragraph';
import Toast from '@/components/toast';
import Key from '@/components/key';
import { DefaultSeo } from 'next-seo';
import { useEffect, useState } from 'react';

const _app = ({ Component, pageProps }) => {
    const [osKey, setOsKey] = useState('')
    let itemCount = 0;
    const MDXComponents = {
        h1: (props) => <H1Title {...props} itemCount={itemCount++} />,
        h2: (props) => <H2Title {...props} itemCount={itemCount++} />,
        h3: (props) => <H3Title {...props} itemCount={itemCount++} />,
        p: (props) => <Paragraph {...props} itemCount={itemCount++} />,
        a: ExternalLink,
        em: (props) => <em {...props} className="font-serif italic text-xl" />,
    };

    useEffect(() => {
        const isMac = window.navigator?.userAgentData?.platform.indexOf('Mac') == -1
        const key = isMac ? '⌘' : 'Ctrl'
        setOsKey(key)
    }, [])

    return (
        <MDXProvider components={MDXComponents}>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
                />
                <meta name="application-name" content="Léon Tran-Van" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="default"
                />
                <meta
                    name="apple-mobile-web-app-title"
                    content="Léon Tran-Van"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <DefaultSeo
                openGraph={{
                    type: 'website',
                    locale: 'en_EN',
                    url: 'https://www.tranvanleon.com/',
                    site_name: 'Léon Tran-Van',
                }}
            />
            <Component {...pageProps} />
            <Toast>
                Use <Key character={osKey}/> + <Key character="k"/> to open command bar.
            </Toast>
        </MDXProvider>
    );
};

export default _app;
