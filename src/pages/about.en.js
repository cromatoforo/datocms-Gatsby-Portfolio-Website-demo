import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { Box, Text } from 'rebass'
import Slider from 'react-slick'

const About = ({ data }) => (
    <Layout>
        <article className='sheet'>
            <div className='sheet__inner'>
                <Box>
                    <Box>
                        <Box p={12} color='#40436A'>
                            <Text
                                fontSize={3}
                                dangerouslySetInnerHTML={{
                                    __html: data.aboutpage.data.title.html,
                                }}
                            />
                        </Box>
                        <Box p={12} color='#40436A'>
                            <div className='sheet__slider'>
                                <Slider infinite={true} autoplay={true} dots={true} slidesToShow={1} arrows={true} speed={500}>
                                    <figure>
                                        <Img fluid={data.aboutpage.data.image1.fluid} />
                                        <figcaption>
                                            <h6 className='card__title'>{data.aboutpage.data.caption1.text}</h6>
                                        </figcaption>
                                    </figure>
                                    <figure>
                                        <Img fluid={data.aboutpage.data.image2.fluid} />
                                        <figcaption>
                                            <h6 className='card__title'>{data.aboutpage.data.caption2.text}</h6>
                                        </figcaption>
                                    </figure>
                                    <figure>
                                        <Img fluid={data.aboutpage.data.image3.fluid} />
                                        <figcaption>
                                            <h6 className='card__title'>{data.aboutpage.data.caption3.text}</h6>
                                        </figcaption>
                                    </figure>
                                </Slider>
                            </div>
                        </Box>
                        <Box p={12} color='#40436A'>
                            <Text
                                fontSize={3}
                                dangerouslySetInnerHTML={{
                                    __html: data.aboutpage.data.description.html,
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
            </div>
        </article>
    </Layout>
)

export default About

export const query = graphql`
    query AboutQueryEn {
        aboutpage: prismicAbout(lang: { eq: "en-us" }) {
            data {
                title {
                    html
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
    }
`
