import React, { useEffect, useState } from 'react'
import toast, { Toaster, ToastIcon, resolveValue } from 'react-hot-toast'

toast('This site is still under development.')

const Toast = () => {
    const [showToast, setShowToast] = useState()
    useEffect(() => {
        if (showToast === undefined) {
            setShowToast(true)
        }
    }, [showToast])

    return (
        <>
            {showToast ? (
                <Toaster
                    containerClassName="!inset-y-8"
                    toastOptions={{
                        duration: 5000,
                        position: 'bottom-center',
                        icon: '🚧',
                    }}
                >
                    {(t) => (
                        <span className="flex p-4 bg-slate-200 rounded-lg shadow-lg opacity:0 text-slate-800 animate-enter dark:bg-slate-700 dark:text-white">
                            <ToastIcon toast={t} />
                            <p className="px-2">{resolveValue(t.message)}</p>
                        </span>
                    )}
                </Toaster>
            ) : null}
        </>
    )
}

export default Toast
