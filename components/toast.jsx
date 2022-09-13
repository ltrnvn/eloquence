import React, { useEffect, useState } from 'react';
import toast, { Toaster, ToastIcon, resolveValue } from 'react-hot-toast';

const Toast = () => {
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowToast(true);
            toast('This site is still under development.');
        }, 1000);
        return () => {
            clearTimeout(timeout);
            toast.remove();
        };
    }, [showToast]);

    if (!showToast) return null;

    return (
        <Toaster
            containerClassName="!inset-y-8"
            toastOptions={{
                duration: 5000,
                position: 'bottom-center',
                icon: '🚧',
            }}
        >
            {(t) => (
                <div
                    className="flex p-4 text-white bg-slate-700 rounded-lg shadow-lg animate-enter animate-exit dark:bg-slate-700 dark:text-white"
                    style={{
                        ...t.style,
                        animation: t.visible
                            ? 'enter 0.6s forwards'
                            : 'exit 0.6s forwards',
                    }}
                >
                    <ToastIcon toast={t} />
                    <p className="px-2">{resolveValue(t.message)}</p>
                </div>
            )}
        </Toaster>
    );
};

export default Toast;
