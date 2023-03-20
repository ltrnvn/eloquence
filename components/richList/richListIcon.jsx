import React from 'react';
import dynamic from 'next/dynamic';

const getIconComponent = (name) =>
    dynamic(() => import(`@/components/svg/${name}`), {
        ssr: false,
    });

const RichListIcon = ({ icon }) => {
    const IconComponent = getIconComponent(icon);

    return (
        <div className="ml-auto">
            <IconComponent
                className="fill-slate-800 dark:fill-white"
                width={18}
                height={18}
            />
        </div>
    );
};

export default RichListIcon;
