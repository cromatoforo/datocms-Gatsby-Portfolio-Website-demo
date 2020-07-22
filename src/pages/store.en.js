import React from 'react'
import { graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import LocalizedLink from '../utils/LocalizedLink'

const ProductPage = ({ data }) => (
    <Layout>
        <Masonry className='showcase'>
            {data.allDatoCmsProduct.edges.map(({ node: product }) => (
                <div key={product.id} className='showcase__item'>
                    <figure className='card'>
                        <LocalizedLink to={`/products/${product.slug}`} className='card__image'>
                            <Img fluid={product.coverImage.fluid} />
                        </LocalizedLink>
                        <figcaption className='card__caption'>
                            <h6 className='card__title'>
                                <LocalizedLink to={`/products/${product.slug}`}>{product.name}</LocalizedLink>
                            </h6>
                            <div className='card__description'>
                                <p>{product.excerpt}</p>
                            </div>
                            <div className='card__price'>
                                <p>USD {product.price}</p>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            ))}
        </Masonry>
    </Layout>
)

export default ProductPage

export const query = graphql`
    query ProductQueryEn {
        allDatoCmsProduct(filter: { locale: { eq: "en" } }) {
            edges {
                node {
                    id
                    name
                    slug
                    price
                    excerpt
                    coverImage {
                        url
                        fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
                            ...GatsbyDatoCmsSizes
                        }
                    }
                }
            }
        }
    }
`

// data-item-taxes={tva}
//disabled={_stock === 0 ? true : false}
