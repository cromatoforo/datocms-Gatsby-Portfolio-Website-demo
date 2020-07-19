import React from 'react'
import Slider from 'react-slick'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={data.datoCmsProduct.seoMetaTags} />
      <div className="sheet__inner">
        <h1 className="sheet__title">{data.datoCmsProduct.name}</h1>
        <br/>
        <div className="sheet__slider">
          <Slider infinite={true} dots={true} slidesToShow={1} arrows={true} speed={500}>
            {data.datoCmsProduct.gallery.map(({ fluid }) => (
              <img alt={data.datoCmsProduct.name} key={fluid.src} src={fluid.src} />
            ))}
          </Slider>
        </div>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsProduct.materialsNode.childMarkdownRemark.html,
          }}
        />
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsProduct.descriptionNode.childMarkdownRemark.html,
          }}
        />
        <div className="sheet__gallery">
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
      excerpt
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
