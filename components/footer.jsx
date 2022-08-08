import React, { useEffect, useState } from 'react'
import quotes from '../data/quotes'

const Footer = () => {
    const [randomQuote, setrandomQuote] = useState()

    useEffect(() => {
        setrandomQuote(quotes[Math.floor(Math.random() * quotes.length)])
    }, [])

    return (
        <footer className="py-3 text-sm text-gray-400 border-t border-gray-600 dark:border-gray-400">
            <p className="px-4 max-w-3xl mx-auto">{randomQuote}</p>
        </footer>
    )
}

export default Footer
