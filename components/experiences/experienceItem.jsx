import React from 'react';
import BulletList from '@/components/base/bulletList';

const ExperienceItem = ({ experience }) => {
    const { title, date, company, contract, description } = experience;

    return (
        <div className="mb-12">
            <p className="font-medium text-xl">{`${title}, ${company}`}</p>
            <p className="mb-4 text-muted">{`${date}, ${contract}`}</p>
            <BulletList items={description} />
        </div>
    );
};

export default ExperienceItem;
