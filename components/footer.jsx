import React from 'react';
import { useRandomQuote } from '@/hooks/useRandomQuote';

const Footer = () => {
    const randomQuote = useRandomQuote();

    return (
        <footer className="py-4 mt-12 sm:mt-28 text-sm text-slate-400 border-t border-slate-200 dark:border-slate-600">
            <p className="max-w-2xl mx-auto">{randomQuote}</p>
        </footer>
    );
};

export default Footer;
