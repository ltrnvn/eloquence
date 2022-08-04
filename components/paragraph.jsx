import React from 'react'

const Paragraph = (props) => {
    return (
        <p className="animate-enter opacity-0 animation-delay-150">
            {props.children}
        </p>
    )
}

export default Paragraph
