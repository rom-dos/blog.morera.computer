import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import {
  Spectrum,
  PostCount,
  PostTitle,
  PostTags,
  PostDate,
  PostArrow,
  GridContainer
} from '../styles/styles'
require('typeface-karla')
require('typeface-inconsolata')

export default ({ data }) => {
  return (
    <Layout>
      <PostCount>{data.allMarkdownRemark.totalCount} Posts</PostCount>
      <Spectrum />
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <GridContainer key={node.id}>
          <Link
            to={node.fields.slug}
            style={{ textDecoration: `none` }}
          >
            <PostTitle>
              <PostArrow>➭</PostArrow>
              {node.frontmatter.title}{' '}
            </PostTitle>
          </Link>
          <PostTags>
            {node.frontmatter.tags.length > 1 ? (
              node.frontmatter.tags.map((tag, i) => {
                if (i === node.frontmatter.tags.length - 1) {
                  return tag
                } else {
                  return tag.concat(', ')
                }
              })
            ) : node.frontmatter.tags}
          </PostTags>
          <PostDate>{node.frontmatter.date}</PostDate>
        </GridContainer>
      ))}
    </Layout>
  )
}


export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM DD YYYY")
            tags
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
