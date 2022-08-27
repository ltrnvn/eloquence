import React from 'react';
import useAnimationDelay from '@/hooks/useAnimationDelay';

const H3Title = (props) => {
    const animationDelay = useAnimationDelay(props.itemCount);

    return (
        <h3
            className="mt-12 mb-6 animate-enter opacity-0 text-gray-400"
            style={animationDelay}
        >
            {props.children}
        </h3>
    );
};

export default H3Title;
