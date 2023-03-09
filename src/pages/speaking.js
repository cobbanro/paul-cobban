import * as React from 'react'
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Layout from '../components/layout'
import Seo from '../components/seo'

const SpeakingPage = ({data}) => {
    return(
        <div>
            <Layout pageTitle="Speaking">
                {
                    data.allContentfulSpeaking.edges.map(edge => (
                        <article key={edge.id}>
                            <div dangerouslySetInnerHTML={{ __html: edge.node.childContentfulSpeakingVideoTextNode.childMarkdownRemark.html}}/>
                            <br></br>
                        </article>
                    ))
                }
            </Layout>
        </div>
    )
}

export const query = graphql`
    query MyQuery {
        allContentfulSpeaking {
        edges {
            node {
            childContentfulSpeakingVideoTextNode {
                childMarkdownRemark {
                html
                }
                id
            }
            }
        }
        }
    }
`

export const Head = () => <Seo title="Speaking"/>
export default SpeakingPage