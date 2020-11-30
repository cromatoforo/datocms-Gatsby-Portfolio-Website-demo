import React from 'react'
import Slider from 'react-slick'
// import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => (
    <Layout>
        <article className='sheet'>
            <div className='sheet__inner'>
                <h1 className='sheet__title'>{data.prismicProject.data.title.text}</h1>
                <p className='sheet__lead'>{data.prismicProject.data.subtitle.text}</p>
                <div
                    className='sheet__body'
                    dangerouslySetInnerHTML={{ __html: data.prismicProject.data.description.html }}
                />
                <div className='sheet__slider'>
                    <Slider infinite={true} autoplay={true} dots={true} slidesToShow={1} arrows={true} autoplaySpeed={7000} speed={1000}>
                        <figure>
                            <Img fluid={data.prismicProject.data.image1.fluid} />
                            <figcaption>
                                <h6 className='card__title'>{data.prismicProject.data.caption1.text}</h6>
                            </figcaption>
                        </figure>
                        <figure>
                            <Img fluid={data.prismicProject.data.image2.fluid} />
                            <figcaption>
                                <h6 className='card__title'>{data.prismicProject.data.caption2.text}</h6>
                            </figcaption>
                        </figure>
                        <figure>
                            <Img fluid={data.prismicProject.data.image3.fluid} />
                            <figcaption>
                                <h6 className='card__title'>{data.prismicProject.data.caption3.text}</h6>
                            </figcaption>
                        </figure>
                        <figure>
                            <Img fluid={data.prismicProject.data.image4.fluid} />
                            <figcaption>
                                <h6 className='card__title'>{data.prismicProject.data.caption_4.text}</h6>
                            </figcaption>
                        </figure>
                        <figure>
                            <Img fluid={data.prismicProject.data.image5.fluid} />
                            <figcaption>
                                <h6 className='card__title'>{data.prismicProject.data.caption_5.text}</h6>
                            </figcaption>
                        </figure>
                        <figure>
                            <Img fluid={data.prismicProject.data.image6.fluid} />
                            <figcaption>
                                <h6 className='card__title'>{data.prismicProject.data.caption_6.text}</h6>
                            </figcaption>
                        </figure>
                    </Slider>
                </div>
            </div>
        </article>
    </Layout>
)

export const query = graphql`
    query ProjectQuery($slug: String!, $lang: String!) {
        prismicProject(uid: { eq: $slug }, lang: { eq: $lang }) {
            uid
            data {
                title {
                    text
                }
                subtitle {
                    text
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
                image4 {
                    fluid(maxWidth: 1000, maxHeight: 800) {
                        ...GatsbyPrismicImageFluid
                    }
                }
                image5 {
                    fluid(maxWidth: 1000, maxHeight: 800) {
                        ...GatsbyPrismicImageFluid
                    }
                }
                image6 {
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
                caption_4 {
                    text
                }
                caption_5 {
                    text
                }
                caption_6 {
                    text
                }
                description {
                    html
                }
            }
        }
    }
`
