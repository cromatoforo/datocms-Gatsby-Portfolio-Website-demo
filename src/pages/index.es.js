import React from 'react'
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from "../components/layout"
import LocalizedLink from '../utils/LocalizedLink';

const IndexPage = ({ data }) => (
  <Layout>
    <Masonry className="showcase">
      {data.allDatoCmsWork.edges.map(({ node: work }) => (
        <div key={work.id} className="showcase__item">
          <figure className="card">
            <LocalizedLink to={`/works/${work.slug}`} className="card__image">
              <Img fluid={work.coverImage.fluid} />
            </LocalizedLink>
            <figcaption className="card__caption">
              <h6 className="card__title">
                <LocalizedLink to={`/works/${work.slug}`}>{work.title}</LocalizedLink>
              </h6>
              <div className="card__description">
                <p>{work.excerpt}</p>
              </div>
            </figcaption>
          </figure>
        </div>
      ))}
    </Masonry>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQueryEs {
    allDatoCmsWork(
      filter: { locale: { eq: "es" } }
      sort: { fields: [position], order: ASC }
    )  {
      edges {
        node {
          id
          title
          slug
          excerpt
          coverImage {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`
