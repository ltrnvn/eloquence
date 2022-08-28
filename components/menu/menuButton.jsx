import { useKBar } from 'kbar';

const MenuButton = () => {
    const kbar = useKBar();
    const MENU_TEXT = 'MENU';

    const toggleMenu = () => {
        kbar.query.toggle();
    };

    const desktopClasses = `sm:absolute sm:text-slate-300 sm:top-[-1.5rem] sm:inset-x-0 sm:border-0 sm:text-menu tracking-wider sm:duration-500 sm:hover:pt-16 dark:sm:text-slate-600 dark:sm:hover:text-gray-300`;
    const mobileClasses = `flex items-center justify-center text-slate-800 text-xs mb-12 w-[80px] h-[80px] border-[1px] rounded-full border-slate-800 duration-300 hover:border-slate-500 dark:border-white dark:text-white`;

    return (
        <div
            className={`${desktopClasses} ${mobileClasses} hover:text-slate-600 dark:hover:text-slate-500 w-100 text-center transition-all mx-auto cursor-pointer animate-enter opacity-0`}
            onClick={toggleMenu}
        >
            {MENU_TEXT}
        </div>
    );
};

export default MenuButton;
