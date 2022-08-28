import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

class Document extends NextDocument {
    render() {
        return (
            <Html lang="en" className="scroll-smooth">
                <Head>
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="true"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@1,300;1,400&display=swap&family=Poppins:wght@400;700&display=swap&family=Heebo:wght@400;700"
                        rel="stylesheet"
                    />
                </Head>
                <body className="text-md overflow-x-hidden bg-beige text-slate-800 antialiased dark:bg-slate-900 dark:text-white">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default Document;
