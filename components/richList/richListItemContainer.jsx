import React from 'react';

const RichListItemContainer = ({ url, children }) => {
    const containerCommonClasses = 'flex items-center py-2 gap-4';

    return (
        <>
            {/* If there's a URL, a link is rendered*/}
            {url ? (
                <a
                    className={`${containerCommonClasses} flex items-center py-2 gap-4 transition-opacity group-hover:opacity-30 group-hover:hover:opacity-100`}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                >
                    {children}
                </a>
            ) : (
                <div className={containerCommonClasses}>{children}</div>
            )}
        </>
    );
};

export default RichListItemContainer;
