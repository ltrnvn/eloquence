import React from 'react';
import { MAX_DELAY } from '../hooks/useAnimationDelay';
import BulletList from '/components/base/bulletList';
import experiences from '/data/resume';

const ExperienceItem = (props) => {
    const { title, date, company, contract, description } = props.experience;
    return (
        <div
            className="mb-12 opacity-0 animate-enter"
            style={{
                animationDelay: MAX_DELAY + 'ms',
            }}
        >
            <p className="font-medium text-xl">{`${title}, ${company}`}</p>
            <p className="mb-4 text-gray-400">{`${date}, ${contract}`}</p>
            <BulletList items={description} />
        </div>
    );
};

const ResumeExperiences = () => {
    return (
        <>
            {experiences &&
                experiences.map((experience, i) => (
                    <ExperienceItem experience={experience} key={i} />
                ))}
        </>
    );
};

export default ResumeExperiences;
