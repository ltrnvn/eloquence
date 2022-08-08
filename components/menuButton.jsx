import { useKBar } from 'kbar'

const MenuButton = () => {
    const menuText = 'MENU'
    const kbar = useKBar()

    const toggleMenu = () => {
        kbar.query.toggle()
    }

    const desktopClasses = `sm:absolute sm:top-[-1.5rem] sm:inset-x-0 sm:border-0 sm:text-menu tracking-wider sm:text-slate-600 sm:duration-500 sm:hover:text-gray-300 sm:hover:pt-16`
    const mobileClasses = `flex items-center justify-center text-xs mb-12 w-[80px] h-[80px] border-[1px] rounded-full border-slate-800 duration-300 hover:border-gray-400 hover:text-gray-400 dark:border-white dark:text-white`

    return (
        <div
            className={`${desktopClasses} ${mobileClasses} w-100 text-center transition-all mx-auto cursor-pointer animate-enter opacity-0`}
            onClick={toggleMenu}
        >
            {menuText}
        </div>
    )
}

export default MenuButton
