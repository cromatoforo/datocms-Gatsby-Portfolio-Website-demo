const path = require(`path`)
//const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    return new Promise((resolve, reject) => {
        graphql(`
            {
                projects: allPrismicProject {
                    edges {
                        node {
                            id
                            uid
                            lang
                        }
                    }
                }
                products: allPrismicProducts {
                    edges {
                        node {
                            id
                            uid
                            lang
                        }
                    }
                }
            }
        `).then((result) => {
            //

            const projectsList = result.data.projects.edges
            const productsList = result.data.products.edges

            projectsList.map(({ node: project }) => {
                createPage({
                    path: `en/projects/${project.uid}`,
                    component: path.resolve(`./src/templates/project.js`),
                    context: {
                        slug: project.uid,
                        lang: 'en-us',
                    },
                })
            })
            //
            projectsList.map(({ node: project }) => {
                createPage({
                    path: `es/projects/${project.uid}`,
                    component: path.resolve(`./src/templates/project.js`),
                    context: {
                        slug: project.uid,
                        lang: 'es-pr',
                    },
                })
            })

            productsList.map(({ node: product }) => {
                createPage({
                    path: `en/products/${product.uid}`,
                    component: path.resolve(`./src/templates/product.js`),
                    context: {
                        slug: product.uid,
                        lang: 'en-us',
                    },
                })
            })
            //
            productsList.map(({ node: product }) => {
                createPage({
                    path: `es/products/${product.uid}`,
                    component: path.resolve(`./src/templates/product.js`),
                    context: {
                        slug: product.uid,
                        lang: 'es-pr',
                    },
                })
            })

            //
            //
            // result.data.works.edges.map(({ node: work }) => {
            //     createPage({
            //         path: `en/projects/${work.slug}`,
            //         component: path.resolve(`./src/templates/work.js`),
            //         context: {
            //             slug: work.slug,
            //             locale: 'en',
            //         },
            //     })
            // })
            // //
            // result.data.works.edges.map(({ node: work }) => {
            //     createPage({
            //         path: `es/projects/${work.slug}`,
            //         component: path.resolve(`./src/templates/work.js`),
            //         context: {
            //             slug: work.slug,
            //             locale: 'es',
            //         },
            //     })
            // })
            //
            resolve()
        })
    })
}

// products: allPrismicProduct(sort: { fields: [data___date], order: DESC }) {
//   edges {
//       node {
//           id
//           uid
//           lang
//       }
//   }
// }
