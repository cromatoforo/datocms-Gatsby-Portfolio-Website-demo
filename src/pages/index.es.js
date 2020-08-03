import React from 'react'
import { graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import LocalizedLink from '../utils/LocalizedLink'
import { Box, Flex, Heading, Button, Text, Card } from 'rebass'

const IndexPage = ({ data }) => (
    <Layout>
        <Box>
            <LocalizedLink style={{ textDecoration: 'none' }} to={`/store`}>
                <Flex p={2} flexDirection={['column-reverse', 'row']}>
                    <Box
                        sx={{ borderTopRightRadius: [0, 0], borderBottomRightRadius: [10, 0], borderTopLeftRadius: [0, 10], borderBottomLeftRadius: [10, 10], height: 220 }}
                        flex={30}
                        backgroundColor='#06939B'
                    >
                        <Flex flexDirection='column'>
                            <Box color='#eee' p={15}>
                                <Heading
                                    fontSize={[2, 3]}
                                    p={1}
                                    as='h3'
                                    dangerouslySetInnerHTML={{
                                        __html: data.home.storeTaglineNode.childMarkdownRemark.html,
                                    }}
                                />
                                <Button
                                    mx={1}
                                    my={2}
                                    sx={{
                                        fontSize: 1,
                                        borderRadius: 15,
                                        color: '#40436A',
                                        backgroundColor: '#FCB515',
                                    }}
                                >
                                    {data.home.storeButton}
                                </Button>
                            </Box>
                        </Flex>
                    </Box>
                    <Box flex={50}>
                        <Img className='card__image' style={{ height: 220 }} objectFit='contain' alt={data.home.storeButton} fluid={data.home.storeImage.fluid} />
                    </Box>
                </Flex>
            </LocalizedLink>
            <Box>
                <Box p={12} color='#40436A'>
                    <Text
                        fontSize={3}
                        dangerouslySetInnerHTML={{
                            __html: data.home.homeTaglineNode.childMarkdownRemark.html,
                        }}
                    />
                </Box>
            </Box>
            <Box>
                <Box color='#06939B' p={12} py={0}>
                    <Heading>{data.home.homeProjects}</Heading>
                </Box>
            </Box>
            <Box>
                {data.allDatoCmsWork.edges.map(({ node: work }) => (
                    <LocalizedLink key={work.id} style={{ textDecoration: 'none' }} to={`/projects/${work.slug}`}>
                        <Flex px={2} py={2} flexDirection={['column-reverse', 'row']}>
                            <Box
                                sx={{ borderTopRightRadius: [0, 0], borderBottomRightRadius: [10, 0], borderTopLeftRadius: [0, 10], borderBottomLeftRadius: [10, 10], height: 220 }}
                                flex={30}
                                backgroundColor='#40436A'
                            >
                                <Flex flexDirection='column'>
                                    <Box color='#eee' p={15}>
                                        <Heading fontSize={[2, 3]}>{work.title}</Heading>
                                        <Text mt={[0, 20]} fontSize={[1, 2]}>
                                            {work.excerpt}
                                        </Text>
                                    </Box>
                                </Flex>
                            </Box>
                            <Box flex={50}>
                                <Img className='card__image' style={{ height: 220 }} objectFit='contain' alt={work.title} fluid={work.coverImage.fluid} />
                            </Box>
                        </Flex>
                    </LocalizedLink>
                ))}
            </Box>
        </Box>
    </Layout>
)

export default IndexPage

export const query = graphql`
    query IndexQueryEs {
        home: datoCmsHome(locale: { eq: "es" }) {
            seoMetaTags {
                ...GatsbyDatoCmsSeoMetaTags
            }
            introTextNode {
                childMarkdownRemark {
                    html
                }
            }
            storeTaglineNode {
                childMarkdownRemark {
                    html
                }
            }
            homeTaglineNode {
                childMarkdownRemark {
                    html
                }
            }
            storeButton
            homeProjects
            copyright
            storeImage {
                fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
                    ...GatsbyDatoCmsSizes
                }
            }
        }
        allDatoCmsWork(filter: { locale: { eq: "es" } }, sort: { fields: [position], order: ASC }) {
            edges {
                node {
                    id
                    title
                    slug
                    excerpt
                    coverImage {
                        fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
                            ...GatsbyDatoCmsSizes
                        }
                    }
                }
            }
        }
    }
`
