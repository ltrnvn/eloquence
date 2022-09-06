import React, { forwardRef } from 'react';
import Image from 'next/image';

const MenuIcon = forwardRef(function renderIcon(props, ref) {
    const { source, description } = props;

    return (
        <Image
            {...props}
            src={source}
            lazyRoot={ref}
            width={16}
            height={16}
            quality={100}
            alt={description}
        />
    );
});

export default MenuIcon;
