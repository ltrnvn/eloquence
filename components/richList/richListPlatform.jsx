import React from 'react';
import dynamic from 'next/dynamic';

const getPlatformComponent = (name) =>
    dynamic(() => import(`@/components/svg/${name}`), {
        ssr: false,
    });

const RichListPlatform = ({ platform }) => {
    const PlatformComponent = getPlatformComponent(platform);

    return (
        <div className="ml-auto">
            <PlatformComponent
                className="fill-slate-800 dark:fill-white"
                width={18}
                height={18}
            />
        </div>
    );
};

export default RichListPlatform;
