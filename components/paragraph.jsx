import React from 'react'
import ExternalLink from '/components/externalLink'

const Paragraph = (props) => {
    return (
        <div>
            <h2 className="text-gray-400 mb-6">{props.title}</h2>
            <p className="whitespace-pre-line">{props.text}</p>
        </div>
    )
}

export default Paragraph
