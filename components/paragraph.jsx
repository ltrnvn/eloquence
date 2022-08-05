import React from 'react'

const Paragraph = (props) => {
    return (
        <p
            className="mb-6 animate-enter opacity-0"
            style={{
                // Setting a maximum delay of 750ms
                animationDelay: `${
                    (props.delay < 5 ? props.delay + 1 : 6) * 150
                }ms`,
            }}
        >
            {props.children}
        </p>
    )
}

export default Paragraph
