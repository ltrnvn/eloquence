import React from 'react';
import { KBarResults, useMatches } from 'kbar';
import MenuCategory from '@/components/menu/menuCategory';
import MenuIcon from '@/components/menu/menuIcon';

const MenuItems = (props) => {
    const { results } = useMatches();

    return (
        <KBarResults
            items={results}
            onRender={({ item, active }) => {
                return typeof item === 'string' ? (
                    <div>
                        <MenuCategory>{item}</MenuCategory>
                    </div>
                ) : (
                    <div
                        {...props}
                        className={`flex items-center cursor-pointer px-4 py-2 ${
                            active ? 'bg-nav-hover' : 'bg-surface'
                        }`}
                    >
                        {item.iconSource && (
                            <div className="mr-3 flex">
                                <MenuIcon
                                    source={item.iconSource}
                                    description={item.iconDescription}
                                />
                            </div>
                        )}
                        {item.name}
                        {item.shortcut && (
                            <div className="flex h-6 w-6 ml-auto items-center justify-center rounded-md text-xs transition-colors border border-rule bg-background">
                                {item.shortcut}
                            </div>
                        )}
                    </div>
                );
            }}
        />
    );
};

export default MenuItems;
