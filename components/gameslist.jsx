import React from 'react';
import RichList from '@/components/richList';
import { games } from '@/utils/games';

const Gameslist = () => {
    return <RichList items={games} />;
};

export default Gameslist;
