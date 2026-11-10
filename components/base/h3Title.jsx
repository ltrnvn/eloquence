import React from 'react';
import useAnimationDelay from '@/hooks/useAnimationDelay';

const H3Title = ({ itemCount, children }) => {
    const animationDelay = useAnimationDelay(itemCount);

    return (
        <h3
            className="mt-12 mb-6 animate-enter opacity-0 text-muted"
            style={animationDelay}
        >
            {children}
        </h3>
    );
};

export default H3Title;
