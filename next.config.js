const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        providerImportSource: '@mdx-js/react',
    },
});

module.exports = withMDX({
    // Append the default value with md extensions
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    images: {
        formats: ['image/avif', 'image/webp'],
        qualities: [75, 100],
        remotePatterns: [
            { protocol: 'https', hostname: 'image-cdn-ak.spotifycdn.com' },
            { protocol: 'https', hostname: 'image-cdn-fa.spotifycdn.com' },
        ],
    },
});
