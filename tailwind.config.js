/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                text: [
                    'Heebo',
                    'system-ui',
                    '-apple-system',
                    'Segoe UI',
                    'Roboto',
                    'Helvetica Neue',
                    'Arial',
                    'Liberation Sans',
                    'sans-serif',
                    'Apple Color Emoji',
                    'Segoe UI Emoji',
                    'Segoe UI Symbol',
                    'Noto Color Emoji',
                ],
                serif: [
                    'Newsreader',
                    'ui-serif',
                    'Georgia',
                    'Cambria',
                    'Times New Roman',
                    'Times',
                    'serif',
                ],
                mono: [
                    'IBM Plex Mono',
                    'SFMono-Regular',
                    'Menlo',
                    'Monaco',
                    'Consolas',
                    'Liberation Mono',
                    'Courier New',
                    'monospace',
                ],
            },
            fontSize: {
                xs: ['0.75rem', '1.75'],
                sm: ['0.875rem', '1.75'],
                md: ['1rem', '1.75'],
                lg: ['1.125rem', '1.75'],
                xl: ['1.25rem', '1.75'],
                h1: ['2.25rem', '1.5'],
            },
        },
    },
    plugins: [],
}
