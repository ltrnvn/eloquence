import React from 'react';
import { useToast } from '@/hooks/useToast';
import { Toaster } from 'react-hot-toast';

const TOAST_OPTIONS = {
    duration: 5000,
    position: 'bottom-center',
};

const Toast = ({ children }) => {
    const showToast = useToast();

    const toastContainerStyles = (t) => ({
        animation: t.visible ? 'enter 0.6s forwards' : 'exit 0.6s forwards',
    });

    if (!showToast) return null;

    return (
        <Toaster containerClassName="!inset-y-8" toastOptions={TOAST_OPTIONS}>
            {(toast) => (
                <div
                    className="flex p-4 text-foreground bg-surface border border-rule rounded-xl shadow-2xl shadow-black/10 animate-enter animate-exit dark:shadow-black/60"
                    style={toastContainerStyles(toast)}
                >
                    <p className="px-2">{children}</p>
                </div>
            )}
        </Toaster>
    );
};

export default Toast;
