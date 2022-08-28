import React from 'react';
import { ArrowUpRight } from 'react-feather';

const ExternalLink = ({ size, link, text }) => {
    const iconSize = size ? size : 16;
    return (
        <span className="inline-block">
            <a
                href={link}
                rel="noreferrer"
                target="_blank"
                className="group flex items-center overflow-hidden underline underline-offset-2 decoration-slate-600 transition-decoration duration-300 hover:decoration-slate-400 dark:hover:decoration-white"
            >
                {text}
                <ArrowUpRight
                    width={iconSize}
                    height={iconSize}
                    className="ml-0.5 inline -translate-y-[2px] text-slate-600 transition-colors duration-300 group-hover:text-slate-400 dark:text-slate-400 dark:group-hover:text-white"
                />
            </a>
        </span>
    );
};

export default ExternalLink;
