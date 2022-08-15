import React, { useState, useEffect } from 'react'
import { getPlaylists } from '/utils/spotify'
import Image from 'next/image'

const Playlists = () => {
    const [playlists, setPlaylists] = useState([])

    useEffect(() => {
        getPlaylists().then((playlists) => {
            setPlaylists(playlists)
        })
    }, [])
    return (
        <ul className="mt-12 group">
            {playlists.map((playlist, i) => {
                return (
                    <li
                        key={i}
                        className="border-b-[1px] border-gray-700 last:border-0 opacity-0 animate-enter "
                        style={{ animationDelay: i * 100 + 'ms' }}
                    >
                        <a
                            className="flex items-center py-2 transition-opacity group-hover:opacity-30 group-hover:hover:opacity-100"
                            href={playlist.url}
                            target="_blank"
                        >
                            <Image
                                src={playlist.image}
                                alt="playlist image"
                                width={50}
                                height={50}
                            />
                            <div className="flex flex-col ml-4">
                                <p className="leading-6">{playlist.name}</p>
                                <p className="text-gray-500 text-sm">
                                    {playlist.description}
                                </p>
                            </div>
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}

export default Playlists
