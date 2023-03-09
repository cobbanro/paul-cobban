import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const PostPage = ({data}) => {
    return (
        <Layout pageTitle="Posts">
            {
                data.allContentfulPost.edges.map(edge => (
                    <article key={edge.node.id}>
                        <h2><Link to={`/posts/${edge.node.title}`}>{edge.node.title}</Link></h2>
                    </article>
                ))
            }
        </Layout>
    )
}

export const query = graphql`
  query MyQuery {
    allContentfulPost {
      edges {
        node {
          title
          id
        }
      }
    }
  }
`

export const Head = () => <Seo title="Posts"/>

export default PostPage