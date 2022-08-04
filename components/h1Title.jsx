import React from 'react'

const H1Title = (props) => {
    return (
        <>
            <h1 className="font-bold text-h1 text-black animate-enter opacity-0 dark:text-white">
                {props.children}
            </h1>
        </>
    )
}

export default H1Title
