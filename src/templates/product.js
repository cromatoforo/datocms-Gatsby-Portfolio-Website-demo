import React from 'react'
import Slider from 'react-slick'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { FormattedMessage } from 'react-intl'
import { Button } from 'evergreen-ui'

export default ({ data }) => (
    <Layout>
        <article className='sheet'>
            <HelmetDatoCms seo={data.datoCmsProduct.seoMetaTags} />
            <div className='sheet__inner'>
                <h1 className='sheet__title'>{data.datoCmsProduct.name}</h1>
                <br />
                <div className='sheet__slider'>
                    <Slider infinite={true} dots={true} slidesToShow={1} arrows={true} speed={500}>
                        {data.datoCmsProduct.gallery.map(({ fluid }) => (
                            <img alt={data.datoCmsProduct.name} key={fluid.src} src={fluid.src} />
                        ))}
                    </Slider>
                </div>
                <h1 className='sheet__price'>USD {data.datoCmsProduct.price}</h1>
                <div className='sheet__body'>
                    <Button
                        className='snipcart-add-item'
                        data-item-id={data.datoCmsProduct.id}
                        data-item-price={data.datoCmsProduct.price}
                        data-item-url={data.datoCmsProduct.slug}
                        data-item-description={data.datoCmsProduct.excerpt}
                        data-item-image={data.datoCmsProduct.cardPhoto.url}
                        data-item-name={data.datoCmsProduct.name}
                        data-item-quantity='1'
                    >
                        <FormattedMessage id='addCart' />
                    </Button>
                </div>
                <div
                    className='sheet__body'
                    dangerouslySetInnerHTML={{
                        __html: data.datoCmsProduct.materialsNode.childMarkdownRemark.html,
                    }}
                />
                <div
                    className='sheet__body'
                    dangerouslySetInnerHTML={{
                        __html: data.datoCmsProduct.descriptionNode.childMarkdownRemark.html,
                    }}
                />
                <div className='sheet__gallery'>
                    <Img fluid={data.datoCmsProduct.cardPhoto.fluid} />
                </div>
            </div>
        </article>
    </Layout>
)

export const query = graphql`
    query ProductQuery($slug: String!, $locale: String!) {
        datoCmsProduct(slug: { eq: $slug }, locale: { eq: $locale }) {
            seoMetaTags {
                ...GatsbyDatoCmsSeoMetaTags
            }
            name
            id
            excerpt
            price
            slug
            gallery {
                fluid(maxWidth: 200, imgixParams: { fm: "jpg", auto: "compress" }) {
                    src
                }
            }
            materialsNode {
                childMarkdownRemark {
                    html
                }
            }
            descriptionNode {
                childMarkdownRemark {
                    html
                }
            }
            cardPhoto {
                url
                fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
                    ...GatsbyDatoCmsSizes
                }
            }
        }
    }
`
