import React from "react"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Layout from '../../components/layout'
import Seo from '../../components/seo'


const Post = ({data}) => {
    const image = getImage(data.contentfulPost.image)
    const { html } = data.contentfulPost.childContentfulPostContentTextNode.childMarkdownRemark
    return (
        <div>
            <Layout pageTitle={data.contentfulPost.title}>       
                <GatsbyImage image={image}/>
           
            <div dangerouslySetInnerHTML={{ __html: html }}/>
            </Layout>
        </div>
    )   
}



export const query = graphql`
query MyQuery($title: String) {
    contentfulPost(title: {eq: $title}) {
      childContentfulPostContentTextNode {
        childMarkdownRemark {
          html
        }
      }
      image {
        gatsbyImageData(width: 1200, height: 1200)
      }
      title
    }
  }
`

export const Head = ({ data }) => <Seo title={data.contentfulPost.title}/>
export default Post