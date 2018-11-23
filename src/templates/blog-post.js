import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import {
  Spectrum,
  GlobalStyle,
  BlogPostTitle,
  BlogPostContent,
  BlogPostDate,
  TitleGrid
} from '../styles/styles'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <GlobalStyle />
      <TitleGrid>
        <BlogPostTitle>
          {post.frontmatter.title}
        </BlogPostTitle>
        <BlogPostDate>
          {data.markdownRemark.frontmatter.date} <br />
          <em>{data.markdownRemark.timeToRead}' Read</em>
        </BlogPostDate>
      </TitleGrid>
      <Spectrum />
      <BlogPostContent dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      timeToRead
      html
      frontmatter {
        title
        date(formatString: "MMM DD YYYY")
      }
    }
  }
`
