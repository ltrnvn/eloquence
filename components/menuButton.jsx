import { useKBar } from 'kbar'
import React from 'react'
import { isMobile } from 'react-device-detect'

const MenuButton = () => {
    const kbar = useKBar()
    console.log(kbar)

    const toggleMenu = () => {
        kbar.query.toggle()
    }

    const DesktopButton = () => {
        return (
            <div
                className="absolute top-[-20px] inset-x-0 mx-auto text-center cursor-pointer text-menu bold text-slate-600 transition-all duration-500 hover:text-gray-300 hover:translate-y-10 "
                onClick={toggleMenu}
            >
                MENU
            </div>
        )
    }
    const MobileButton = () => {
        return (
            <div
                className="flex items-center justify-center mb-12 w-[70px] h-[70px] cursor-pointer text-center border-[1px] rounded-full border-slate-800 transition-all duration-300 hover:border-gray-400 hover:text-gray-400 dark:border-white dark:text-white"
                onClick={toggleMenu}
            >
                Menu
            </div>
        )
    }

    return <>{!isMobile ? <MobileButton /> : <DesktopButton />}</>
}

export default MenuButton
