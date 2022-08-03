import React from 'react'
import { ArrowUpRight } from 'react-feather'

const ExternalLink = (props) => {
    const iconSize = props.size ? props.size : 16
    return (
        <span className="inline-block">
            <a
                href={props.link}
                target="_blank"
                className="group flex items-center overflow-hidden underline decoration-gray-400 transition-decoration duration-300 hover:decoration-white"
            >
                {props.text}
                <ArrowUpRight
                    width={iconSize}
                    height={iconSize}
                    className="ml-0.5 inline -translate-y-[2px] text-gray-400 transition-colors duration-300 group-hover:text-white"
                />
            </a>
        </span>
    )
}

export default ExternalLink
