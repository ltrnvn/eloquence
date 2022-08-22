import { useState, useEffect } from 'react'

export const BASE_DELAY = 100

export default function useAnimationDelay(itemCount) {
    const [delay, setDelay] = useState(null)

    useEffect(() => {
        //If 5+ items are rendered, delay will not exceed 600ms
        setDelay((itemCount < 5 ? itemCount + 1 : 6) * BASE_DELAY)
    }, [])

    return {
        animationDelay: `${delay}ms`,
    }
}
