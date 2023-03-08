import * as React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql } from "gatsby"

import Layout from '../components/layout'
import Seo from '../components/seo'

const BookPage = ({data}) => {
  const image = getImage(data.contentfulBook.bookImage)
  return (
    <div>
        <Layout pageTitle={data.contentfulBook.slug}>
            
            <GatsbyImage image={image}/>
        </Layout>
        <div>{data.contentfulBook.bookDescription.bookDescription}</div>
    </div>
  )
}

export const query = graphql`
query MyQuery($slug: String) {
    contentfulBook(slug: {eq: $slug}) {
      bookDescription {
        bookDescription
      }
      bookImage {
        gatsbyImageData
      }
      slug
    }
  }
`

export const Head = ( {data} ) => <Seo title= {data.contentfulBook.slug}/>
export default BookPage