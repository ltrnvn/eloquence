import React from 'react';
import Image from 'next/image';

const MenuIcon = ({ source, description }) => {
    return (
        <Image
            src={source}
            width={16}
            height={16}
            quality={100}
            alt={description}
        />
    );
};

export default MenuIcon;
