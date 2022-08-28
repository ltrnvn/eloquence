import React from 'react';
import RichList from '@/components/richList';

const Playlists = ({ playlists }) => {
    return (
        <ul className="mt-12 group">
            <RichList items={playlists} />
        </ul>
    );
};

export default Playlists;
