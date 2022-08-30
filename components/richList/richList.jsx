import React from 'react';
import RichListItem from '@/components/richList/richListItem';
import { BASE_DELAY } from '@/hooks/useAnimationDelay';

const RichList = ({ items }) => {
    return (
        <ul className="mt-12 group">
            {items &&
                items.map((item, i) => (
                    <li
                        key={i}
                        className="border-b-[1px] border-slate-700 last:border-0 opacity-0 animate-enter "
                        style={{ animationDelay: (i + 2) * BASE_DELAY + 'ms' }}
                    >
                        <RichListItem item={item} />
                    </li>
                ))}
        </ul>
    );
};

export default RichList;
