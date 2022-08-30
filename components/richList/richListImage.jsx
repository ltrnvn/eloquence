import React from 'react';
import Image from 'next/image';

const RichListImage = ({ image }) => {
    return (
        <Image src={image} alt="playlist image" width={50} height={50}></Image>
    );
};

export default RichListImage;
