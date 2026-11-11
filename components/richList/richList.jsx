import React from 'react';
import RichListItem from '@/components/richList/richListItem';

const RichList = ({ items }) => {
    return (
        <ul className="mt-12 group">
            {items?.map((item, i) => (
                <li
                    key={i}
                    className="border-b-[1px] border-rule last:border-0"
                >
                    <RichListItem item={item} />
                </li>
            ))}
        </ul>
    );
};

export default RichList;
