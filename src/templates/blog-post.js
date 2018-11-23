import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Spectrum, GlobalStyle, mono, sansSerif } from '../styles/styles'
import { colorPalette } from '../styles/color'
import styled from 'styled-components'

const BlogPostTitle = styled.h1`
  color: ${colorPalette.blue};
  font-family: ${sansSerif};
`
const BlogPostContent = styled.div`
  font-family: ${mono};
  font-size: 14px;
  line-height: 1.5;
`

const BlogPostDate = styled.span`
  display: -block;
  font-family: ${mono};
  font-size: 15px;
  font-weight: 400;
  line-height: 1.4;
  text-align: right;
  position: relative;
  top: 20px;
`

const TitleGrid = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
  line-height: 1;
`

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
