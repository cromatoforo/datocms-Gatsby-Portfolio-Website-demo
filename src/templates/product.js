import React from 'react'
import Slider from 'react-slick'
// import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Button } from 'evergreen-ui'

export default ({ data }) => (
    <Layout>
        <article className='sheet'>
            <div className='sheet__inner'>
                <h1 className='sheet__title'>{data.prismicProducts.data.title.text}</h1>
                <p className='sheet__lead'>{data.prismicProducts.data.subtitle.text}</p>

                <div className='sheet__slider'>
                    <Slider infinite={true} dots={true} slidesToShow={1} arrows={true} speed={500}>
                        <img alt={'Gallery Image 1'} key={'img1'} src={data.prismicProducts.data.image1.fluid.src} />
                        <img alt={'Gallery Image 2'} key={'img2'} src={data.prismicProducts.data.image2.fluid.src} />
                        <img alt={'Gallery Image 3'} key={'img3'} src={data.prismicProducts.data.image3.fluid.src} />
                        <img alt={'Gallery Image 4'} key={'img4'} src={data.prismicProducts.data.image4.fluid.src} />
                    </Slider>
                </div>

                <h1 className='sheet__price'>ID {data.prismicProducts.uid}</h1>
                <h1 className='sheet__price'>USD {data.prismicProducts.data.price}</h1>
                <div className='sheet__body'>
                    <Button
                        className='snipcart-add-item'
                        data-item-id={data.prismicProducts.uid}
                        data-item-price={data.prismicProducts.data.price}
                        data-item-url={data.prismicProducts.uid}
                        data-item-description={data.prismicProducts.data.subtitle.text}
                        data-item-image={data.prismicProducts.data.image1.url}
                        data-item-name={data.prismicProducts.data.title.text}
                        data-item-quantity='1'
                    >
                        Add to Cart
                    </Button>
                </div>

                <div
                    className='sheet__body'
                    dangerouslySetInnerHTML={{
                        __html: data.prismicProducts.data.description.html,
                    }}
                />
            </div>
        </article>
    </Layout>
)

export const query = graphql`
    query ProductsQuery($slug: String!, $lang: String!) {
        prismicProducts(uid: { eq: $slug }, lang: { eq: $lang }) {
            uid
            data {
                price
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
                description {
                    html
                }
            }
        }
    }
`
