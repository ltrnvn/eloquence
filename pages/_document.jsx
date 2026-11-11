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

// Like haydenbleasel.com: the home page plays its entrance only when someone
// lands on it (new visit or reload). Coming from another page of the site or
// going back in history shows it right away, and any key or click skips it.
// Without JavaScript nothing is hidden, since the CSS depends on this flag.
const setIntro = `(function () {
    if (location.pathname !== '/') return;
    const [navigation] = performance.getEntriesByType('navigation');
    const internalNavigation = document.referrer &&
        new URL(document.referrer).origin === location.origin;
    if (navigation?.type === 'back_forward' ||
        (navigation?.type !== 'reload' && internalNavigation)) return;

    const root = document.documentElement;
    root.dataset.intro = '';
    const finishIntro = () => { delete root.dataset.intro; };
    addEventListener('keydown', finishIntro, { once: true });
    addEventListener('pointerdown', finishIntro, { once: true });
    addEventListener('pageshow', (event) => {
        if (event.persisted) finishIntro();
    });
})();`;

class Document extends NextDocument {
    render() {
        return (
            <Html lang="en" className="scroll-smooth">
                <Head>
                    <script
                        dangerouslySetInnerHTML={{ __html: setInitialTheme }}
                    />
                    <script dangerouslySetInnerHTML={{ __html: setIntro }} />
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
