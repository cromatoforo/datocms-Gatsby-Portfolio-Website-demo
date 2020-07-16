const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        works: allDatoCmsWork {
          edges {
            node {
              locale
              slug
            }
          }
        }
      }
    `).then(result => {
      //
      // result.data.works.edges.map(({ node: work }) => {
      //   createPage({
      //     path: `en/works/${work.slug}`,
      //     component: path.resolve(`./src/templates/work.js`),
      //     context: {
      //       slug: work.slug,
      //       locale:'en',
      //     },
      //   })
      // })
      // //
      // result.data.works.edges.map(({ node: work }) => {
      //   createPage({
      //     path: `es/works/${work.slug}`,
      //     component: path.resolve(`./src/templates/work.js`),
      //     context: {
      //       slug: work.slug,
      //       locale: 'es',
      //     },
      //   })
      // })
      //
      resolve()
    })
  })
}
