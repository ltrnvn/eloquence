import React from 'react';
import RichListImage from '@/components/richList/richListImage';
import RichListDescription from '@/components/richList/richListDescription';
import RichListName from '@/components/richList/richListName';
import RichListIcon from '@/components/richList/richListIcon';

const RichListItemContent = ({ item }) => {
    const { image, name, icon, description } = item;

    return (
        <>
            {image && <RichListImage image={image} />}
            <div className="flex flex-col">
                {name && <RichListName name={name} />}
                {description && (
                    <RichListDescription description={description} />
                )}
            </div>
            {icon && <RichListIcon icon={icon} />}
        </>
    );
};

export default RichListItemContent;
