import dotenv from 'dotenv';
import projectConfig from './src/projectConfig';

dotenv.config({ path: '.env' });

export default {
    siteMetadata: {
        siteUrl: projectConfig.siteUrl,
    },

    flags: { DEV_SSR: true },
    plugins: [
        `gatsby-plugin-root-import`,
        `gatsby-plugin-loadable-components-ssr`,
        `gatsby-plugin-image`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-source-sanity`,
            options: {
                projectId: process.env.SANITY_PROJECT_ID,
                token: process.env.SANITY_TOKEN,
                dataset: `production`,
                watchMode: true,
                apiVersion: process.env.SANITY_API_VERSION,
                graphqlTag: `default`,
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
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-offline`,
        `gatsby-plugin-perf-budgets`,
        {
            resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
            options: {
                devMode: true,
            },
        },
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                    process.env.TRACKING_GOOGLE_ID, // Google Analytics / GA
                    // 'AW-CONVERSION_ID', // Google Ads / Adwords / AW
                    // 'DC-FLOODIGHT_ID', // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
                ],
                // This object gets passed directly to the gtag config command
                // This config will be shared across all trackingIds
                gtagConfig: {
                    optimize_id: 'OPT_CONTAINER_ID',
                    anonymize_ip: true,
                    cookie_expires: 0,
                },
                // This object is used for configuration specific to this plugin
                pluginConfig: {
                    // Puts tracking script in the head instead of the body
                    head: false,
                    // Setting this parameter is also optional
                    respectDNT: true,
                    // Avoids sending pageview hits from custom paths
                    exclude: ['/preview/**', '/do-not-track/me/too/'],
                },
            },
        },
    ],
};
