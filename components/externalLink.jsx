import React from 'react'
import { ArrowUpRight } from 'react-feather'

const ExternalLink = (props) => {
    return (
        <span className="inline-block">
            <a
                href={props.link}
                target="_blank"
                className="flex items-center overflow-hidden underline"
            >
                {props.text}
                <ArrowUpRight
                    width={props.size}
                    height={props.size}
                    className="ml-0.5 inline -translate-y-[2px]"
                />
            </a>
        </span>
    )
}

export default ExternalLink
