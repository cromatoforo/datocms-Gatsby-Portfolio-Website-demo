require('dotenv').config()
const languages = require('./src/data/languages')

module.exports = {
    siteMetadata: {
        title: `Lazum Site and Store`,
        languages,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        `gatsby-transformer-remark`,
        {
            resolve: 'gatsby-plugin-i18n',
            options: {
                langKeyForNull: 'any',
                langKeyDefault: languages.defaultLangKey,
                useLangKeyLayout: false,
            },
        },
        {
            resolve: 'gatsby-source-prismic',
            options: {
                repositoryName: 'lazum-beta',
                accessToken: process.env.API_KEY,
                schemas: {
                    home: require('./src/schemas/home.json'),
                    project: require('./src/schemas/project.json'),
                    products: require('./src/schemas/products.json'),
                    products_home: require('./src/schemas/products_home.json'),
                },
                // Get the correct URLs in blog posts
                // linkResolver: () => prismicLinkResolver,
                // PrismJS highlighting for labels and slices
                // htmlSerializer: () => prismicHtmlSerializer,
            },
        },
        {
            resolve: `gatsby-source-datocms`,
            options: {
                apiToken: process.env.DATO_API_TOKEN,
            },
        },
        {
            resolve: `gatsby-plugin-snipcart-advanced`,
            options: {
                version: '3.0.15',
                publicApiKey: '#####', // use public api key here or in environment variable
                defaultLang: languages.defaultLangKey,
                currency: 'usd',
                openCartOnAdd: false,
            },
        },
    ],
}
