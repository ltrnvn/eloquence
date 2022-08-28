import React from 'react';
import Image from 'next/image';
import { BASE_DELAY } from '@/hooks/useAnimationDelay';
import dynamic from 'next/dynamic';

const getPlatformComponent = (name) =>
    dynamic(() => import(`@/components/svg/${name}`), {
        ssr: false,
    });

const RenderItem = ({ item: { url, image, name, description, platform } }) => {
    return (
        <>
            {url ? (
                <a
                    className="flex items-center py-2 gap-4 transition-opacity group-hover:opacity-30 group-hover:hover:opacity-100"
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                >
                    {image && <RenderImage image={image} />}
                    <div className="flex flex-col">
                        {name && <RenderName name={name} />}
                        {description && (
                            <RenderDescription description={description} />
                        )}
                    </div>
                </a>
            ) : (
                <div className="flex items-center py-2 gap-4">
                    {image && <RenderImage image={image} />}
                    <div className="flex flex-col">
                        {name && <RenderName name={name} />}
                        {description && (
                            <RenderDescription description={description} />
                        )}
                    </div>
                    {platform && <RenderPlatform platform={platform} />}
                </div>
            )}
        </>
    );
};

const RenderPlatform = ({ platform }) => {
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

const RenderImage = ({ image }) => {
    return (
        <Image src={image} alt="playlist image" width={50} height={50}></Image>
    );
};

const RenderName = ({ name }) => {
    return <p className="leading-6">{name}</p>;
};

const RenderDescription = ({ description }) => {
    return <p className="text-slate-500 text-sm">{description}</p>;
};

const RenderItems = ({ items }) => {
    return items.map((item, i) => {
        return (
            <li
                key={i}
                className="border-b-[1px] border-slate-700 last:border-0 opacity-0 animate-enter "
                style={{ animationDelay: (i + 2) * BASE_DELAY + 'ms' }}
            >
                <RenderItem item={item} />
            </li>
        );
    });
};

const RichList = ({ items }) => {
    return (
        <ul className="mt-12 group">
            <RenderItems items={items} />
        </ul>
    );
};

export default RichList;
