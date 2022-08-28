import React from 'react';
import useAnimationDelay from '@/hooks/useAnimationDelay';

const H3Title = ({ itemCount, children }) => {
    const animationDelay = useAnimationDelay(itemCount);

    return (
        <h3
            className="mt-12 mb-6 animate-enter opacity-0 text-slate-400"
            style={animationDelay}
        >
            {children}
        </h3>
    );
};

export default H3Title;
