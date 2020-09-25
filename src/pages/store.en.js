import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Masonry from 'react-masonry-component'
import Layout from '../components/layout'
import LocalizedLink from '../utils/LocalizedLink'
import { Box, Text } from 'rebass'
import { Button } from 'evergreen-ui'
import Slider from 'react-slick'
const ProductsPage = ({ data }) => (
    <Layout>
        <article className='sheet'>
            <div className='sheet__inner'>
                <Box>
                    <Box>
                        <Box p={12} color='#40436A'>
                            <Text
                                fontSize={3}
                                dangerouslySetInnerHTML={{
                                    __html: data.productspage.data.title.html,
                                }}
                            />
                        </Box>
                        <Box p={12} color='#40436A'>
                            <Text
                                fontSize={3}
                                dangerouslySetInnerHTML={{
                                    __html: data.productspage.data.sub_title.html,
                                }}
                            />
                        </Box>

                        <Box p={12} color='#40436A'>
                            <div className='sheet__slider'>
                                <Slider infinite={true} autoplay={true} dots={true} slidesToShow={1} arrows={true} speed={500}>
                                    <figure>
                                        <Img fluid={data.productspage.data.image1.fluid} />
                                        <figcaption>
                                            <h6 className='card__title'>{data.productspage.data.caption1.text}</h6>
                                        </figcaption>
                                    </figure>
                                    <figure>
                                        <Img fluid={data.productspage.data.image2.fluid} />
                                        <figcaption>
                                            <h6 className='card__title'>{data.productspage.data.caption2.text}</h6>
                                        </figcaption>
                                    </figure>
                                    <figure>
                                        <Img fluid={data.productspage.data.image3.fluid} />
                                        <figcaption>
                                            <h6 className='card__title'>{data.productspage.data.caption3.text}</h6>
                                        </figcaption>
                                    </figure>
                                </Slider>
                            </div>
                        </Box>

                        <Box p={12} color='#40436A'>
                            <Text
                                fontSize={3}
                                dangerouslySetInnerHTML={{
                                    __html: data.productspage.data.about_lazum_store.html,
                                }}
                            />
                        </Box>
                    </Box>
                    <Box>
                        <Masonry className='showcase'>
                            {data.products.edges.map(({ node: product }) => (
                                <div key={product.uid} className='showcase__item'>
                                    <figure className='card'>
                                        <LocalizedLink to={`/products/${product.uid}`} className='card__image'>
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
                                            <div
                                                style={{ paddingTop: 10 }}
                                                className='card__title'
                                                dangerouslySetInnerHTML={{
                                                    __html: '$' + product.data.price,
                                                }}
                                            ></div>
                                            <Button
                                                marginTop={5}
                                                className='snipcart-add-item'
                                                data-item-id={product.uid}
                                                data-item-price={product.data.price}
                                                data-item-url={product.uid}
                                                data-item-description={product.data.subtitle.text}
                                                data-item-image={product.data.image1.url}
                                                data-item-name={product.data.title.text}
                                                data-item-quantity='1'
                                            >
                                                {'Add to Cart'}
                                            </Button>
                                        </figcaption>
                                    </figure>
                                </div>
                            ))}
                        </Masonry>
                    </Box>
                </Box>
            </div>
        </article>
    </Layout>
)

export default ProductsPage

export const query = graphql`
    query ProductsQueryEn {
        productspage: prismicProductsHome(lang: { eq: "en-us" }) {
            data {
                title {
                    html
                    text
                }
                sub_title {
                    html
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
        products: allPrismicProducts(filter: { lang: { eq: "en-us" } }) {
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

// data-item-taxes={tva}
//disabled={_stock === 0 ? true : false}

// {data.products.edges.map(({ node: product }) => (
//     <LocalizedLink key={product.uid} style={{ textDecoration: 'none' }} to={`/products/${product.uid}`}>
//         <Flex px={2} py={2} flexDirection={['column-reverse', 'row']}>
//             <Box
//                 sx={{ flex: [1, 1 / 2], borderTopRightRadius: [0, 0], borderBottomRightRadius: [10, 0], borderTopLeftRadius: [0, 10], borderBottomLeftRadius: [10, 10] }}
//                 backgroundColor='#40436A'
//             >
//                 <Flex flexDirection='column'>
//                     <Box my={1} mb={3} color='#eee' p={15}>
//                         <Heading fontSize={[2, 3]}>{product.data.title.text}</Heading>
//                         <Text mt={[0, 20]} fontSize={[1, 2]}>
//                             {product.data.title.text}
//                         </Text>
//                     </Box>
//                 </Flex>
//             </Box>
//             <Box sx={{ flex: [1, 1] }}>
//                 <Img className='card__image' style={{ height: 220 }} objectFit='contain' alt={product.data.title.text} fluid={product.data.image1.fluid} />
//             </Box>
//         </Flex>
//     </LocalizedLink>
// ))}
