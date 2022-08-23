import React from 'react'

const BulletList = (props) => {
    const { items } = props
    return (
        <>
            {items &&
                items.map((item, i) => {
                    return (
                        <ul
                            key={i}
                            className="list-disc pl-6 marker:text-gray-300 dark:marker:text-gray-600"
                        >
                            <li>{item}</li>
                        </ul>
                    )
                })}
        </>
    )
}

export default BulletList