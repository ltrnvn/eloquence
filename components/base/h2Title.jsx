import React from 'react';
import useAnimationDelay from '@/hooks/useAnimationDelay';

const H2Title = (props) => {
    const animationDelay = useAnimationDelay(props.itemCount);

    return (
        <h2
            className="text-lg text-black animate-enter opacity-0 dark:text-white"
            style={animationDelay}
        >
            {props.children}
        </h2>
    );
};

export default H2Title;
