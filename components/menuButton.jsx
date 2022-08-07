import { useKBar } from 'kbar'
import React from 'react'
import { isMobile, isDesktop } from 'react-device-detect'

const MenuButton = () => {
    const kbar = useKBar()
    const menuText = 'MENU'

    const toggleMenu = () => {
        kbar.query.toggle()
    }

    const DesktopButton = () => {
        return (
            <div
                className="absolute top-[-20px] inset-x-0 mx-auto text-center cursor-pointer text-menu bold text-slate-600 animate-enter opacity-0 transition-all duration-500 hover:text-gray-300 hover:translate-y-10"
                onClick={toggleMenu}
            >
                {menuText}
            </div>
        )
    }
    const MobileButton = () => {
        return (
            <div
                className="flex items-center justify-center text-xs mx-auto mb-12 w-[80px] h-[80px] cursor-pointer text-center border-[1px] animate-enter opacity-0 rounded-full border-slate-800 transition-all duration-300 hover:border-gray-400 hover:text-gray-400 dark:border-white dark:text-white"
                onClick={toggleMenu}
            >
                {menuText}
            </div>
        )
    }

    return <>{isMobile && isMobile ? <MobileButton /> : <DesktopButton />}</>
}

export default MenuButton
