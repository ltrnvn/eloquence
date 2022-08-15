const getSpotifyToken = async () => {
    const authorization = Buffer.from(
        `${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID ?? ''}:${
            process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET ?? ''
        }`
    ).toString('base64')

    let getToken = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            Authorization: `Basic ${authorization}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'grant_type=client_credentials',
    })
    const { access_token } = await getToken.json()
    return access_token
}

export const getPlaylists = async () => {
    const access_token = await getSpotifyToken()
    const playlistsRequest = await fetch(
        'https://api.spotify.com/v1/users/ephalys/playlists?limit=20',
        {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        }
    )
    const { items } = await playlistsRequest.json()

    const playlists = items.map((playlist) => ({
        id: playlist.id,
        name: playlist.name,
        description: playlist.description.replace(/&quot;/g, '"'),
        tracks: playlist.tracks.total,
        url: playlist.external_urls.spotify,
        image: playlist.images[0].url,
    }))

    return playlists
}
