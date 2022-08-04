import React from 'react'

const H2Title = (props) => {
    return (
        <>
            <h2 className="text-lg text-black animate-enter opacity-0 dark:text-white">
                {props.children}
            </h2>
        </>
    )
}

export default H2Title
