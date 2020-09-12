import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import LocalizedLink from '../utils/LocalizedLink'
import { Box, Flex, Heading, Button, Text } from 'rebass'

const IndexPage = ({ data }) => (
    <Layout>
        <Box>
            <LocalizedLink style={{ textDecoration: 'none' }} to={`/store`}>
                <Flex px={2} py={2} flexDirection={['column-reverse', 'row']}>
                    <Box
                        sx={{ flex: [1, 1 / 2], borderTopRightRadius: [0, 0], borderBottomRightRadius: [10, 0], borderTopLeftRadius: [0, 10], borderBottomLeftRadius: [10, 10] }}
                        backgroundColor='#06939B'
                    >
                        <Flex flexDirection='column'>
                            <Box color='#eee' p={15}>
                                <Heading
                                    fontSize={[2, 3]}
                                    p={1}
                                    as='h3'
                                    dangerouslySetInnerHTML={{
                                        __html: data.homepage.data.store_tagline.html,
                                    }}
                                />
                                <Button
                                    mx={1}
                                    my={2}
                                    mb={3}
                                    sx={{
                                        fontSize: 1,
                                        borderRadius: 15,
                                        color: '#40436A',
                                        backgroundColor: '#FCB515',
                                    }}
                                    dangerouslySetInnerHTML={{
                                        __html: data.homepage.data.store_button.html,
                                    }}
                                />
                            </Box>
                        </Flex>
                    </Box>
                    <Box sx={{ flex: [1, 1] }}>
                        <Img className='card__image' style={{ height: 220 }} objectFit='contain' fluid={data.homepage.data.store_image.fluid} />
                    </Box>
                </Flex>
            </LocalizedLink>
            <Box>
                <Box p={12} color='#40436A'>
                    <Text
                        fontSize={3}
                        dangerouslySetInnerHTML={{
                            __html: data.homepage.data.home_tagline.html,
                        }}
                    />
                </Box>
            </Box>
            <Box>
                <Box color='#06939B' p={12} py={0}>
                    <Heading dangerouslySetInnerHTML={{ __html: data.homepage.data.home_projects.html }} />
                </Box>
            </Box>
            {data.projects.edges.map(({ node: project }) => (
                <LocalizedLink key={project.uid} style={{ textDecoration: 'none' }} to={`/projects/${project.uid}`}>
                    <Flex px={2} py={2} flexDirection={['column-reverse', 'row']}>
                        <Box
                            sx={{ flex: [1, 1 / 2], borderTopRightRadius: [0, 0], borderBottomRightRadius: [10, 0], borderTopLeftRadius: [0, 10], borderBottomLeftRadius: [10, 10] }}
                            backgroundColor='#40436A'
                        >
                            <Flex flexDirection='column'>
                                <Box my={1} mb={3} color='#eee' p={15}>
                                    <Heading fontSize={[2, 3]}>{project.data.title.text}</Heading>
                                    <Text mt={[0, 20]} fontSize={[1, 2]}>
                                        {project.data.title.text}
                                    </Text>
                                </Box>
                            </Flex>
                        </Box>
                        <Box sx={{ flex: [1, 1] }}>
                            <Img className='card__image' style={{ height: 220 }} objectFit='contain' alt={project.data.title.text} fluid={project.data.image1.fluid} />
                        </Box>
                    </Flex>
                </LocalizedLink>
            ))}
        </Box>
    </Layout>
)

export default IndexPage

export const query = graphql`
    query IndexQueryEs {
        homepage: prismicHome(lang: { eq: "es-pr" }) {
            data {
                store_tagline {
                    html
                }
                store_button {
                    html
                }
                home_tagline {
                    html
                }
                home_projects {
                    html
                }
                copyright {
                    text
                }
                store_image {
                    fluid(maxWidth: 1000, maxHeight: 800) {
                        ...GatsbyPrismicImageFluid
                    }
                }
            }
        }
        projects: allPrismicProject(limit: 3, filter: { lang: { eq: "es-pr" } }) {
            edges {
                node {
                    uid
                    data {
                        title {
                            text
                        }
                        image1 {
                            fluid(maxWidth: 1000, maxHeight: 800) {
                                ...GatsbyPrismicImageFluid
                            }
                        }
                    }
                }
            }
        }
    }
`

// <Box sx={{ flex: [1, 1] }}>
// <Img className='card__image' style={{ height: 220 }} objectFit='contain' alt={data.home.storeButton} fluid={data.home.storeImage.fluid} />
// </Box>

// allDatoCmsWork(filter: { locale: { eq: "en" } }, sort: { fields: [position], order: ASC }) {
//     edges {
//         node {
//             id
//             title
//             slug
//             excerpt
//             coverImage {
//                 fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
//                     ...GatsbyDatoCmsSizes
//                 }
//             }
//         }
//     }
// }

// <Box>
// {data.allDatoCmsWork.edges.map(({ node: work }) => (
//     <LocalizedLink key={work.id} style={{ textDecoration: 'none' }} to={`/projects/${work.slug}`}>
//         <Flex px={2} py={2} flexDirection={['column-reverse', 'row']}>
//             <Box
//                 sx={{ flex: [1, 1 / 2], borderTopRightRadius: [0, 0], borderBottomRightRadius: [10, 0], borderTopLeftRadius: [0, 10], borderBottomLeftRadius: [10, 10] }}
//                 backgroundColor='#40436A'
//             >
//                 <Flex flexDirection='column'>
//                     <Box my={1} mb={3} color='#eee' p={15}>
//                         <Heading fontSize={[2, 3]}>{work.title}</Heading>
//                         <Text mt={[0, 20]} fontSize={[1, 2]}>
//                             {work.excerpt}
//                         </Text>
//                     </Box>
//                 </Flex>
//             </Box>
//             <Box sx={{ flex: [1, 1] }}>
//                 <Img className='card__image' style={{ height: 220 }} objectFit='contain' alt={work.title} fluid={work.coverImage.fluid} />
//             </Box>
//         </Flex>
//     </LocalizedLink>
// ))}
// </Box>
