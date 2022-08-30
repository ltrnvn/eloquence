import React from 'react';
import RichListImage from '@/components/richList/richListImage';
import RichListDescription from '@/components/richList/richListDescription';
import RichListName from '@/components/richList/richListName';
import RichListPlatform from '@/components/richList/richListPlatform';

const RichListItemContent = ({
    item: { image, name, platform, description },
}) => (
    <>
        {image && <RichListImage image={image} />}
        <div className="flex flex-col">
            {name && <RichListName name={name} />}
            {description && <RichListDescription description={description} />}
        </div>
        {platform && <RichListPlatform platform={platform} />}
    </>
);

export default RichListItemContent;
