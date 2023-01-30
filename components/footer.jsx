import React, { useEffect, useState } from 'react';
import quotes from '@/utils/quotes';

const Footer = () => {
    const [randomQuote, setrandomQuote] = useState();

    useEffect(() => {
        setrandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, []);

    return (
        <footer className="py-4 mt-12 sm:mt-28 text-sm text-slate-400 border-t border-slate-200 dark:border-slate-600">
            <p className="max-w-2xl mx-auto">{randomQuote}</p>
        </footer>
    );
};

export default Footer;
