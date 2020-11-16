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
                <h1 className='sheet__title'>{data.products.data.title.text}</h1>
                <p className='sheet__lead'>{data.products.data.subtitle.text}</p>
                <div className='sheet__slider'>
                    <Slider infinite={true} autoplay={true} dots={true} slidesToShow={1} arrows={true} speed={500}>
                        <figure>
                            <Img fluid={data.products.data.image1.fluid} />
                            <figcaption>
                                <h6 className='card__title'>{data.products.data.caption1.text}</h6>
                            </figcaption>
                        </figure>
                        <figure>
                            <Img fluid={data.products.data.image2.fluid} />
                            <figcaption>
                                <h6 className='card__title'>{data.products.data.caption2.text}</h6>
                            </figcaption>
                        </figure>
                        <figure>
                            <Img fluid={data.products.data.image3.fluid} />
                            <figcaption>
                                <h6 className='card__title'>{data.products.data.caption3.text}</h6>
                            </figcaption>
                        </figure>
                        <figure>
                            <Img fluid={data.products.data.image4.fluid} />
                            <figcaption>
                                <h6 className='card__title'>{data.products.data.caption4.text}</h6>
                            </figcaption>
                        </figure>
                    </Slider>
                </div>
                <h1 className='sheet__price'>USD ${data.products.data.price}</h1>
                <div className='sheet__body'>
                    <Button
                        className='snipcart-add-item'
                        data-item-id={data.products.uid}
                        data-item-price={data.products.data.price}
                        data-item-url={'/en/products/' + data.products.uid}
                        data-item-description={data.products.data.subtitle.text}
                        data-item-image={data.products.data.image1.url}
                        data-item-name={data.products.data.title.text}
                        data-item-quantity='1'
                    >
                        {data.productspage.data.button_text.text}
                    </Button>
                </div>

                <div
                    className='sheet__body'
                    dangerouslySetInnerHTML={{
                        __html: data.products.data.description.html,
                    }}
                />
            </div>
        </article>
    </Layout>
)

export const query = graphql`
    query ProductsQuery($slug: String!, $lang: String!) {
        productspage: prismicProductsHome(lang: { eq: $lang }) {
            data {
                button_text {
                    text
                }
            }
        }
        products: prismicProducts(uid: { eq: $slug }, lang: { eq: $lang }) {
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
                caption1 {
                    text
                }
                caption2 {
                    text
                }
                caption3 {
                    text
                }
                caption4 {
                    text
                }
                description {
                    html
                }
            }
        }
    }
`

// export const query = graphql`
//     query ProductsQueryEn {
//         productspage: prismicProductsHome(lang: { eq: "en-us" }) {
//             data {
//                 title {
//                     html
//                     text
//                 }
//                 sub_title {
//                     html
//                     text
//                 }
//                 button_text {
//                     text
//                 }
//                 about_lazum_store {
//                     html
//                 }
//                 image1 {
//                     fluid(maxWidth: 1000, maxHeight: 800) {
//                         ...GatsbyPrismicImageFluid
//                     }
//                 }
//                 image2 {
//                     fluid(maxWidth: 1000, maxHeight: 800) {
//                         ...GatsbyPrismicImageFluid
//                     }
//                 }
//                 image3 {
//                     fluid(maxWidth: 1000, maxHeight: 800) {
//                         ...GatsbyPrismicImageFluid
//                     }
//                 }
//                 caption1 {
//                     text
//                 }
//                 caption2 {
//                     text
//                 }
//                 caption3 {
//                     text
//                 }
//             }
//         }
//         products: allPrismicProducts(filter: { lang: { eq: "en-us" } }) {
//             edges {
//                 node {
//                     uid
//                     data {
//                         price
//                         title {
//                             text
//                         }
//                         subtitle {
//                             text
//                         }
//                         image1 {
//                             url
//                             fluid(maxWidth: 1000, maxHeight: 800) {
//                                 ...GatsbyPrismicImageFluid
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// `
