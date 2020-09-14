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
    'gatsby-transformer-remark',
  ],
};
