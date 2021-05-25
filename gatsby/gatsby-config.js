import dotenv from 'dotenv';
import projectConfig from './src/projectConfig';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    siteUrl: projectConfig.siteUrl,
  },

  flags: { DEV_SSR: true },
  plugins: [
    `gatsby-plugin-image`,
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `9311goma`,
        token: process.env.SANITY_TOKEN,
        dataset: `production`,
        watchMode: true,
        apiVersion: '2021-04-01',
        graphqlTag: 'default',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/assets/images/`,
        name: `images`,
      },
      __key: `images`,
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-remark-copy-linked-files`,
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    // {
    //   resolve: "gatsby-plugin-manifest",
    //   options: {
    //     icon: "src/images/icon.png",
    //   },
    // },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: projectConfig.trackingGoogleId,
      },
    },
  ],
};
