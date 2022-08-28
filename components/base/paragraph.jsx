import React from 'react';
import useAnimationDelay from '@/hooks/useAnimationDelay';

const Paragraph = ({ itemCount, children }) => {
    const animationDelay = useAnimationDelay(itemCount);

    return (
        <p className="mb-6 animate-enter opacity-0" style={animationDelay}>
            {children}
        </p>
    );
};

export default Paragraph;
