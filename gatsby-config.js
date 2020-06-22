require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Lazum Site and Store`,
    languages: {
      langs: ['en', 'es'],
      defaultLangKey: 'en'
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {        
        langKeyDefault: 'en',
        langKeyForNull: 'en',
        prefixDefault: true,
        useLangKeyLayout: true,
      }
    }
  ],
}
