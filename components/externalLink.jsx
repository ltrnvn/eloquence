import React from 'react'
import { ArrowUpRight } from 'react-feather'

const ExternalLink = (props) => {
    return (
        <div className="inline-block">
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
        </div>
    )
}

export default ExternalLink
