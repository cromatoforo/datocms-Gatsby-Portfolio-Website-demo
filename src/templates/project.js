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
                    dangerouslySetInnerHTML={{
                        __html: data.prismicProject.data.description.html,
                    }}
                />

                <div className='sheet__slider'>
                    <Slider infinite={true} dots={true} slidesToShow={1} arrows={true} speed={500}>
                        <img alt={'Gallery Image 1'} key={'img1'} src={data.prismicProject.data.image1.fluid.src} />
                        <img alt={'Gallery Image 2'} key={'img2'} src={data.prismicProject.data.image2.fluid.src} />
                        <img alt={'Gallery Image 3'} key={'img3'} src={data.prismicProject.data.image3.fluid.src} />
                        <img alt={'Gallery Image 4'} key={'img4'} src={data.prismicProject.data.image4.fluid.src} />
                        <img alt={'Gallery Image 5'} key={'img5'} src={data.prismicProject.data.image5.fluid.src} />
                        <img alt={'Gallery Image 6'} key={'img6'} src={data.prismicProject.data.image6.fluid.src} />
                    </Slider>
                </div>
            </div>
        </article>
    </Layout>
)

export const query = graphql`
    query ProjectQuery($slug: String!, $lang: String!) {
        prismicProject(uid: { eq: $slug }, lang: { eq: $lang }) {
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
                description {
                    html
                }
            }
        }
    }
`

// {data.datoCmsWork.gallery.map(({ fluid }) => (
//     <img alt={data.datoCmsWork.title} key={fluid.src} src={fluid.src} />
// ))}

//  <HelmetDatoCms seo={data.datoCmsWork.seoMetaTags} />

// <div className='sheet__slider'>
// <Slider infinite={true} dots={true} slidesToShow={1} arrows={true} speed={500}>
//     {data.datoCmsWork.gallery.map(({ fluid }) => (
//         <img alt={data.datoCmsWork.title} key={fluid.src} src={fluid.src} />
//     ))}
// </Slider>
// </div>
