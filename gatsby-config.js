/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 *
 */

const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Gustavo Alves - Fullstack developer',
    author: 'Gustavo Alves',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: path.resolve(__dirname, 'src'),
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 860,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    'gatsby-plugin-transition-link',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-page-progress',
      options: {
        includePaths: [{ regex: '^/blog' }],
        height: 3,
        prependToBody: false,
        color: `var(--color-purple)`,
        footerHeight: 300,
      },
    },
  ],
};
