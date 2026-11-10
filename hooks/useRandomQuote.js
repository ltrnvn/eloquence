import { useEffect, useState } from 'react';
import quotes from '@/utils/quotes';

export const useRandomQuote = () => {
    const [randomQuote, setrandomQuote] = useState();

    useEffect(() => {
        const randomQuoteIndex = Math.floor(Math.random() * quotes.length);

        // Picked on the client only, so server and client HTML match.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setrandomQuote(quotes[randomQuoteIndex]);
    }, []);

    return randomQuote;
};
