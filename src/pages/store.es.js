import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Masonry from 'react-masonry-component'
import Layout from '../components/layout'
import LocalizedLink from '../utils/LocalizedLink'
import { Box, Text, Flex } from 'rebass'
import { Button } from 'evergreen-ui'
import Slider from 'react-slick'
const ProductsPage = ({ data }) => (
    <Layout>
        <article className='sheet'>
            <div className='sheet__inner'>
                <Box>
                    <Box pb={2} color='#40436A'>
                        <Text
                            fontSize={3}
                            dangerouslySetInnerHTML={{
                                __html: data.productspage.data.title.html
                            }}
                        />
                    </Box>

                    <Box p={0} pb={2} color='#40436A'>
                        <Slider infinite={true} autoplay={true} dots={false} slidesToShow={1} arrows={false} autoplaySpeed={13000} speed={3000}>
                            <figure>
                                <Img fluid={data.productspage.data.image1.fluid} />
                            </figure>
                            <figure>
                                <Img fluid={data.productspage.data.image2.fluid} />
                            </figure>
                            <figure>
                                <Img fluid={data.productspage.data.image3.fluid} />
                            </figure>
                        </Slider>
                    </Box>

                    <Box pt={1} pb={3} color='#40436A'>
                        <Text
                            fontSize={2}
                            dangerouslySetInnerHTML={{
                                __html: data.productspage.data.sub_title.html,
                            }}
                        />
                    </Box>

                    <Box >
                        <Masonry className='showcase'>
                            {data.products.edges.map(({ node: product }) => (
                                <div key={product.uid} className='showcase__item'>
                                    <figure className='card'>
                                        <LocalizedLink to={`/products/${product.uid}`}>
                                            <Img fluid={product.data.image1.fluid} />
                                        </LocalizedLink>
                                        <figcaption className='card__caption'>
                                            <h6 className='card__title'>
                                                <LocalizedLink to={`/products/${product.uid}`}>{product.data.title.text}</LocalizedLink>
                                            </h6>
                                            <div
                                                className='card__description'
                                                dangerouslySetInnerHTML={{
                                                    __html: product.data.subtitle.text,
                                                }}
                                            ></div>
                                            <Flex flexDirection={'row'}>
                                                <Box flex={0.5}>
                                                    <Text
                                                        sx={{ paddingTop: 10, fontWeight: 'bold', fontSize: 2 }}
                                                        dangerouslySetInnerHTML={{
                                                            __html: '$' + product.data.price,
                                                        }}
                                                    ></Text>
                                                </Box>
                                                <Box flex={1}>
                                                    <Button
                                                        marginTop={5}
                                                        className='snipcart-add-item'
                                                        data-item-id={product.uid}
                                                        data-item-price={product.data.price}
                                                        data-item-url={'/en/store'}
                                                        data-item-description={product.data.subtitle.text}
                                                        data-item-image={product.data.image1.url}
                                                        data-item-name={product.data.title.text}
                                                        data-item-quantity='1'
                                                    >
                                                        {data.productspage.data.button_text.text}
                                                    </Button>
                                                </Box>
                                            </Flex>
                                        </figcaption>
                                    </figure>
                                </div>
                            ))}
                        </Masonry>
                    </Box>



                    <Box pb={1} color='#40436A'>
                        <Text
                            fontSize={2}
                            dangerouslySetInnerHTML={{
                                __html: data.productspage.data.about_lazum_store.html,
                            }}
                        />
                    </Box>



                </Box>
            </div>
        </article>
    </Layout>
)

export default ProductsPage

export const query = graphql`
    query ProductsQueryEs {
        productspage: prismicProductsHome(lang: { eq: "es-pr" }) {
            data {
                title {
                    html
                    text
                }
                sub_title {
                    html
                    text
                }
                button_text {
                    text
                }
                about_lazum_store {
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
        products: allPrismicProducts(filter: { lang: { eq: "es-pr" } }) {
            edges {
                node {
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
