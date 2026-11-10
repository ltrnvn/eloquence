import React from 'react';
import Pc from '@/components/svg/pc';
import Phone from '@/components/svg/phone';
import Playstation from '@/components/svg/playstation';

const ICONS = { pc: Pc, phone: Phone, playstation: Playstation };

const RichListIcon = ({ icon }) => {
    const IconComponent = ICONS[icon];
    if (!IconComponent) return null;

    return (
        <div className="ml-auto">
            <IconComponent
                className="fill-heading"
                width={18}
                height={18}
            />
        </div>
    );
};

export default RichListIcon;
