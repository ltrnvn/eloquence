import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

// Runs before the first paint so a dark theme doesn't flash white while
// React loads. Mirrors useTheme: the stored value is JSON ("dark" / "light"),
// and no value means "follow the system".
const setInitialTheme = `(function () {
    try {
        const stored = localStorage.getItem('theme');
        const theme = stored ? JSON.parse(stored) : null;
        const dark = theme === 'dark' ||
            (!theme && matchMedia('(prefers-color-scheme: dark)').matches);
        if (dark) document.documentElement.classList.add('dark');
    } catch (e) {}
})();`;

class Document extends NextDocument {
    render() {
        return (
            <Html lang="en" className="scroll-smooth">
                <Head>
                    <script
                        dangerouslySetInnerHTML={{ __html: setInitialTheme }}
                    />
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
                <body className="text-md overflow-x-hidden bg-background text-foreground antialiased">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default Document;
