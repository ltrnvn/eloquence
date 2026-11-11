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
import Header from '@/components/header';
import MenuContainer from '@/components/menu/menuContainer';
import { generateDefaultSeo } from 'next-seo/pages';
import { useEffect, useState } from 'react';

// Defined once: components recreated on each render would make React remount
// the whole page content (and replay its enter animation) on every update.
const Emphasis = (props) => <em {...props} className="font-serif italic text-xl" />;

const MDXComponents = {
    h1: H1Title,
    h2: H2Title,
    h3: H3Title,
    p: Paragraph,
    a: ExternalLink,
    em: Emphasis,
};

const App = ({ Component, pageProps, router }) => {
    const [osKey, setOsKey] = useState('')

    useEffect(() => {
        const isMac = window.navigator?.userAgentData?.platform.indexOf('Mac') == -1
        const key = isMac ? '⌘' : 'Ctrl'
        // Depends on the browser, so it can only be read after hydration.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setOsKey(key)
    }, [])

    // Leaving the landing page ends its entrance; pages opened from inside
    // the site get a short crossfade instead (see globals.css).
    useEffect(() => {
        const root = document.documentElement;
        const onStart = () => {
            delete root.dataset.intro;
        };
        const onComplete = () => {
            root.dataset.navigated = '';
        };
        router.events.on('routeChangeStart', onStart);
        router.events.on('routeChangeComplete', onComplete);
        return () => {
            router.events.off('routeChangeStart', onStart);
            router.events.off('routeChangeComplete', onComplete);
        };
    }, [router])

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
                <link rel="icon" href="/favicon.ico" sizes="48x48" />
                {/* Google search results need a square icon in a multiple of 48px */}
                <link rel="icon" href="/icon.png" type="image/png" sizes="192x192" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                {generateDefaultSeo({
                    openGraph: {
                        type: 'website',
                        locale: 'en_EN',
                        url: 'https://www.leontranvan.com/',
                        site_name: 'Léon Tran-Van',
                    },
                })}
            </Head>
            {/* Kept outside pages so the header persists across navigations */}
            <div className="site-shell">
                <MenuContainer />
                <Header />
                <Component {...pageProps} />
            </div>
            <Toast>
                Use <Key character={osKey}/> + <Key character="k"/> to open command bar
            </Toast>
        </MDXProvider>
    );
};

export default App;
