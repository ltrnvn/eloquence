import { useState, useMemo } from 'react'

export const BASE_DELAY = 100
export const MAX_ITEMS = 5
export const MAX_DELAY = MAX_ITEMS * BASE_DELAY

export default function useAnimationDelay(itemCount) {
    const [delay, setDelay] = useState(null)

    useMemo(() => {
        //If 5+ items are rendered, delay will not exceed 600ms
        setDelay(
            (itemCount < MAX_ITEMS ? itemCount + 1 : MAX_ITEMS + 1) * BASE_DELAY
        )
    }, [itemCount])

    return {
        animationDelay: `${delay}ms`,
    }
}
