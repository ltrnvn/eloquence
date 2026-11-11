import { useMemo } from 'react';

export const BASE_DELAY = 80;
export const MAX_ITEMS = 5;
export const MAX_DELAY = (MAX_ITEMS + 1) * BASE_DELAY;

export default function useAnimationDelay(itemCount) {
    return useMemo(() => {
        // Staggered by 80ms like haydenbleasel.com; capped at 480ms after 5 items
        const delay =
            (itemCount < MAX_ITEMS ? itemCount + 1 : MAX_ITEMS + 1) *
            BASE_DELAY;
        return {
            animationDelay: `${delay}ms`,
        };
    }, [itemCount]);
}
