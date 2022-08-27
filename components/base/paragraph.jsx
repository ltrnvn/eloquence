import React from 'react';
import useAnimationDelay from '@/hooks/useAnimationDelay';

const Paragraph = (props) => {
    const animationDelay = useAnimationDelay(props.itemCount);

    return (
        <p className="mb-6 animate-enter opacity-0" style={animationDelay}>
            {props.children}
        </p>
    );
};

export default Paragraph;
