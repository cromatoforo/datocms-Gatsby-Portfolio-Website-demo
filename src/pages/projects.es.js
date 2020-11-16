import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Masonry from 'react-masonry-component'
import Layout from '../components/layout'
import LocalizedLink from '../utils/LocalizedLink'
import { Flex, Box, Text } from 'rebass'

import Slider from 'react-slick'
const ProjectsPage = ({ data }) => (
    <Layout>
        <article className='sheet'>
            <div className='sheet__inner'>
                <Box>
                    <Box>
                        <Box p={12} color='#40436A'>
                            <Text
                                fontSize={3}
                                dangerouslySetInnerHTML={{
                                    __html: data.projectspage.data.title.text,
                                }}
                            />
                        </Box>
                        <Box p={12} color='#40436A'>
                            <Text
                                fontSize={3}
                                dangerouslySetInnerHTML={{
                                    __html: data.projectspage.data.subtitle.text,
                                }}
                            />
                        </Box>

                        <Box p={0} pb={4} color='#40436A'>
                            <Slider infinite={true} autoplay={true} dots={true} slidesToShow={1} arrows={true} speed={500}>
                                <figure>
                                    <Img fluid={data.projectspage.data.image1.fluid} />
                                    <figcaption>
                                        <h6 className='card__title'>{data.projectspage.data.caption1.text}</h6>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <Img fluid={data.projectspage.data.image2.fluid} />
                                    <figcaption>
                                        <h6 className='card__title'>{data.projectspage.data.caption2.text}</h6>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <Img fluid={data.projectspage.data.image3.fluid} />
                                    <figcaption>
                                        <h6 className='card__title'>{data.projectspage.data.caption3.text}</h6>
                                    </figcaption>
                                </figure>
                            </Slider>
                        </Box>

                        <Box p={12} color='#40436A'>
                            <Text
                                fontSize={3}
                                dangerouslySetInnerHTML={{
                                    __html: data.projectspage.data.description.html,
                                }}
                            />
                        </Box>
                    </Box>
                    <Box>
                        {data.projects.edges.map(({ node: project }) => (
                            <LocalizedLink key={project.uid} style={{ textDecoration: 'none' }} to={`/projects/${project.uid}`}>
                                <Flex className='card' mb={'6px'} flexDirection={['column-reverse', 'row']}>
                                    <Box sx={{ flex: [1, 1 / 2] }} backgroundColor='#C6C7E0'>
                                        <Flex flexDirection='column'>
                                            <Box my={1} mb={1} color='#000' p={2}>
                                                <Text fontWeight='700' fontSize={[2, 3]}>
                                                    {project.data.title.text}
                                                </Text>
                                                <Text mt={[0, 20]} fontSize={[2, 3]}>
                                                    {project.data.subtitle.text}
                                                </Text>
                                            </Box>
                                        </Flex>
                                    </Box>
                                    <Box sx={{ flex: [1, 1] }}>
                                        <Img style={{ height: 220 }} objectFit='contain' alt={project.data.title.text} fluid={project.data.image1.fluid} />
                                    </Box>
                                </Flex>
                            </LocalizedLink>
                        ))}
                    </Box>
                </Box>
            </div>
        </article>
    </Layout>
)

export default ProjectsPage

export const query = graphql`
    query ProjectsQueryEs {
        projectspage: prismicProjectsHome(lang: { eq: "es-pr" }) {
            data {
                title {
                    text
                }
                subtitle {
                    text
                }
                description {
                    html
                }
                image1 {
                    fluid(maxWidth: 1000, maxHeight: 800) {
                        ...GatsbyPrismicImageFluid
                    }
                }
                image2 {
                    fluid(maxWidth: 1000, maxHeight: 800) {
                        ...GatsbyPrismicImageFluid
                    }
                }
                image3 {
                    fluid(maxWidth: 1000, maxHeight: 800) {
                        ...GatsbyPrismicImageFluid
                    }
                }
                caption1 {
                    text
                }
                caption2 {
                    text
                }
                caption3 {
                    text
                }
            }
        }
        projects: allPrismicProject(filter: { lang: { eq: "es-pr" } }) {
            edges {
                node {
                    uid
                    data {
                        title {
                            text
                        }
                        subtitle {
                            text
                        }
                        image1 {
                            url
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
