import React from 'react';
import RichListItemContainer from '@/components/richList/richListItemContainer';
import RichListItemContent from '@/components/richList/richListItemContent';

const RichListItem = ({ item }) => {
    const { url } = item;

    return (
        <>
            <RichListItemContainer url={url}>
                <RichListItemContent item={item} />
            </RichListItemContainer>
        </>
    );
};

export default RichListItem;
