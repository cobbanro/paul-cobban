import * as React from 'react'
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Layout from '../components/layout'
import Seo from '../components/seo'

const ArticlePage = ({data}) => {

    return (
        <div>
            <Layout pageTitle= "Articles">
                {
                    data.allContentfulArticles.edges.map(edge => (
                        <article key={edge.id}>
                            <h4>{edge.node.article}</h4>
                            <div dangerouslySetInnerHTML={{ __html: edge.node.articleDescription.childMarkdownRemark.html}}/>
                        </article>
                    ))
                }
            </Layout>
        </div>
    )
}

export const query = graphql`
query MyQuery {
    allContentfulArticles {
      edges {
        node {
          articleDescription {
            childMarkdownRemark {
              html
            }
          }
          article
        }
      }
    }
  }
`

export const Head = () => <Seo title= "Articles"/>
export default ArticlePage