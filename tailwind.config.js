/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
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
