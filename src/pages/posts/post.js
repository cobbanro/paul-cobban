import React from "react"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import { graphql } from "gatsby"
import Layout from '../../components/layout'
import Seo from '../../components/seo'


const Post = ({data, children}) => {
    const image = getImage(data.contentfulPost.image)
    const { html } = data.markdownRemark
    return (
        <div>
        <Layout pageTitle={data.contentfulPost.slug}>
        {children}
        <GatsbyImage image={image}/>
        
        </Layout>
        <div dangerouslySetInnerHTML={{ __html: html }}/>
        </div>
    )   
}



export const pageQuery = graphql`
    query ($slug: String!) {
        contentfulPost(slug: {eq: $slug}) {
        image {
            gatsbyImageData(width: 1200, height: 1200)
        }
            content {
                content
        }
            slug
            date
        }
            markdownRemark {
                html
        }
    }
`

export const Head = ({ data }) => <Seo title={data.contentfulPost.slug}/>
export default Post