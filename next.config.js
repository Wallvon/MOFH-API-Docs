const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx',
    flexsearch: {
        codeblock: false
    },
    // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
})
module.exports = withNextra({
    output: 'export',
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
})
