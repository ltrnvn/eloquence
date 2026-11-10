import { playlists } from '@/utils/playlists';

// No Apple Music API (it needs a paid developer account): each public
// playlist page already exposes its name, track count and cover, so they're
// read from there at build time.

const ARTWORK_SIZE = 200;

const decode = (text) =>
    text
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>');

const getMeta = (html, property) => {
    const match = html.match(
        new RegExp(`<meta (?:property|name)="${property}" content="([^"]*)"`)
    );
    return match ? decode(match[1]) : undefined;
};

// The page data holds the square cover as a template:
// https://…/{w}x{h}AM.PDCXS14.{f}?…signature=…
// (the og:image is a 1200x630 social preview, not the cover).
const getArtwork = (html) => {
    const match = html.match(
        /"artwork":\{"dictionary":\{[^}]*?"url":"([^"]+)"/
    );
    if (!match) return null;

    return match[1]
        .replace(/\\u0026/g, '&')
        .replace('{w}', ARTWORK_SIZE)
        .replace('{h}', ARTWORK_SIZE)
        .replace('{f}', 'jpg');
};

const fetchPlaylist = async ({ url, description }) => {
    const response = await fetch(url, {
        headers: { 'User-Agent': 'agent-local' },
    });
    if (!response.ok) throw new Error(`${response.status} for ${url}`);

    const html = await response.text();
    const name = getMeta(html, 'apple:title');
    const tracks = Number(getMeta(html, 'music:song_count'));

    return {
        id: url,
        name,
        description: description ?? (tracks ? `${tracks} songs` : ''),
        url,
        image: getArtwork(html),
    };
};

export const getPlaylists = async () => {
    const results = await Promise.allSettled(playlists.map(fetchPlaylist));

    // A playlist that can't be read is skipped rather than failing the build.
    return results.flatMap((result) => {
        if (result.status === 'fulfilled' && result.value.name)
            return [result.value];
        console.warn('[playlists] skipped:', result.reason?.message ?? result);
        return [];
    });
};
