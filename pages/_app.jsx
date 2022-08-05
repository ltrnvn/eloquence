import { MDXProvider } from '@mdx-js/react'
import Head from 'next/head'
import '/styles/globals.css'
import '@fontsource/heebo/400.css'
import '@fontsource/heebo/700.css'
import '@fontsource/newsreader/400-italic.css'
import ExternalLink from '../components/externalLink'
import H1Title from '../components/h1Title'
import H2Title from '../components/h2Title'
import Paragraph from '../components/paragraph'

const _app = ({ Component, pageProps }) => {
    let paragraphCount = 0
    const components = {
        h1: H1Title,
        h2: H2Title,
        h3: (props) => <h3 {...props} className="mt-12 mb-6 text-gray-600" />,
        p: (props) => <Paragraph {...props} delay={paragraphCount++} />,
        a: ExternalLink,
        em: (props) => <em {...props} className="font-serif italic text-xl" />,
    }

    return (
        <MDXProvider components={components}>
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
                <title>Léon Tran-Van</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </MDXProvider>
    )
}

export default _app
