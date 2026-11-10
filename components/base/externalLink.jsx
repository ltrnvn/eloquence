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
                className="group flex items-center overflow-hidden underline underline-offset-2 decoration-muted transition-decoration duration-300 hover:decoration-heading"
            >
                {text}
                <ArrowUpRight
                    width={iconSize}
                    height={iconSize}
                    className="ml-0.5 inline -translate-y-[2px] text-muted transition-colors duration-300 group-hover:text-heading"
                />
            </a>
        </span>
    );
};

export default ExternalLink;
