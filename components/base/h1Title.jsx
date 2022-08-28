import React from 'react';
import useAnimationDelay from '@/hooks/useAnimationDelay';

const H1Title = ({ itemCount, children }) => {
    const animationDelay = useAnimationDelay(itemCount);

    return (
        <h1
            className="font-bold text-h1 text-slate-800 animate-enter opacity-0 dark:text-white"
            style={animationDelay}
        >
            {children}
        </h1>
    );
};

export default H1Title;
