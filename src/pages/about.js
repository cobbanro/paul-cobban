import * as React from 'react'
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = ({data}) => {
  const image = getImage(data.contentfulAbout.paulImage)
  const descriptionHtml = data.contentfulAbout.description.childMarkdownRemark.html
  const awardsHtml = data.contentfulAbout.awards.childMarkdownRemark.html
  return (
    <div>
       <Layout pageTitle= {data.contentfulAbout.slug}>
          <GatsbyImage image={image}/>
       </Layout>
       <div dangerouslySetInnerHTML={{ __html: descriptionHtml }}/>
       <br></br>
       <div dangerouslySetInnerHTML={{ __html: awardsHtml }}/>
    </div>
  )
}

export const query = graphql`
  query MyQuery($slug: String) {
    contentfulAbout(slug: {eq: $slug}) {
      paulImage {
        gatsbyImageData
      }
      slug
      awards {
        childMarkdownRemark {
          html
        }
      }
      description {
        description
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export const Head = ({data}) => <Seo title= {data.contentfulAbout.slug}/>
export default AboutPage