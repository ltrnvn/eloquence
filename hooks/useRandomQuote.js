import { useEffect, useState } from 'react';
import quotes from '@/utils/quotes';

export const useRandomQuote = () => {
    const [randomQuote, setrandomQuote] = useState();

    useEffect(() => {
        const randomQuoteIndex = Math.floor(Math.random() * quotes.length);

        setrandomQuote(quotes[randomQuoteIndex]);
    }, []);

    return randomQuote;
};
