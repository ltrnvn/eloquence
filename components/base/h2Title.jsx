import React from 'react';
import useAnimationDelay from '@/hooks/useAnimationDelay';

const H2Title = ({ itemCount, children }) => {
    const animationDelay = useAnimationDelay(itemCount);

    return (
        <h2
            className="text-lg text-black animate-enter opacity-0 dark:text-white"
            style={animationDelay}
        >
            {children}
        </h2>
    );
};

export default H2Title;
