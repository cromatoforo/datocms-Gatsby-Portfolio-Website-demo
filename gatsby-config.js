require('dotenv').config()
const languages = require('./src/data/languages');

module.exports = {
  siteMetadata: {
    title: `Lazum Site and Store`,
    languages
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: false
      }
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
