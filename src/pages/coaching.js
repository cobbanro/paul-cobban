import * as React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/layout'
import Seo from '../components/seo'

const CoachingPage = ({data}) => {
    const html = data.contentfulCoaching.coachingDescription.childMarkdownRemark.html
    return (
      <div>
          <Layout pageTitle={data.contentfulCoaching.slug}>
            <div dangerouslySetInnerHTML={{ __html: html}}/>
          </Layout>
      </div>
    )
  }
  
  export const query = graphql`
  query myQuery($slug: String) {
    contentfulCoaching(slug: {eq: $slug}) {
      coachingDescription {
        childMarkdownRemark {
          html
        }
      }
      slug
    }
  }
  `


export const Head = ( {data} ) => <Seo title= {data.contentfulCoaching.slug}/>
export default CoachingPage