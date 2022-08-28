import React from 'react';
import useAnimationDelay from '@/hooks/useAnimationDelay';

const H1Title = (props) => {
    const animationDelay = useAnimationDelay(props.itemCount);

    return (
        <h1
            className="font-bold text-h1 text-slate-800 animate-enter opacity-0 dark:text-white"
            style={animationDelay}
        >
            {props.children}
        </h1>
    );
};

export default H1Title;
