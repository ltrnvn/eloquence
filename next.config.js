const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
        providerImportSource: '@mdx-js/react',
    },
});

module.exports = withMDX({
    // Append the default value with md extensions
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    images: {
        formats: ['image/avif', 'image/webp'],
        domains: ['i.scdn.co'],
    },
    webpack: (config, { isServer }) => {
        if (isServer) {
            require('./utils/sitemap');
        }

        return config;
    },
});
