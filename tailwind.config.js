/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                heading: 'var(--heading)',
                muted: 'var(--muted)',
                surface: 'var(--surface)',
                rule: 'var(--rule)',
                'nav-hover': 'var(--nav-hover)',
            },
            fontFamily: {
                sans: ['Heebo', ...defaultTheme.fontFamily.sans],
                serif: ['Newsreader', ...defaultTheme.fontFamily.serif],
            },
            fontSize: {
                xs: ['0.75rem', '1.75'],
                sm: ['0.875rem', '1.75'],
                md: ['1rem', '1.75'],
                lg: ['1.125rem', '1.75'],
                xl: ['1.25rem', '1.75'],
                h1: ['2.25rem', '1.5'],
                menu: ['5rem', '1'],
            },
            animation: {
                enter: 'enter 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
                exit: 'exit 0.6s forwards',
            },
            keyframes: {
                enter: {
                    '0%': {
                        opacity: 0,
                        transform: 'translateY(0.5rem)',
                    },
                    to: {
                        opacity: 1,
                        transform: 'none',
                    },
                },
                exit: {
                    '0%': {
                        opacity: 1,
                    },
                    to: {
                        opacity: 0,
                        transform: 'translateY(0.5rem)',
                    },
                },
            },
        },
    },
    plugins: [require('tailwindcss-animation-delay')],
};
