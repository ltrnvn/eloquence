import React from 'react';
import experiences from '@/utils/resume';
import ExperienceItem from '@/components/experiences/experienceItem';

const Experiences = () => {
    return (
        <>
            {experiences &&
                experiences.map((experience, i) => (
                    <ExperienceItem experience={experience} key={i} />
                ))}
        </>
    );
};

export default Experiences;
