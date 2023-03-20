import React from 'react';
import { MAX_DELAY } from '@/hooks/useAnimationDelay';
import BulletList from '@/components/base/bulletList';

const ExperienceItem = ({ experience }) => {
    const { title, date, company, contract, description } = experience;

    return (
        <div
            className="mb-12 opacity-0 animate-enter"
            style={{
                animationDelay: MAX_DELAY + 'ms',
            }}
        >
            <p className="font-medium text-xl">{`${title}, ${company}`}</p>
            <p className="mb-4 text-slate-400">{`${date}, ${contract}`}</p>
            <BulletList items={description} />
        </div>
    );
};

export default ExperienceItem;
