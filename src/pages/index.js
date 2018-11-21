import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'

const mono = `"Inconsolata", "Lucida Console", Monaco, monospace`
const sansSerif = `'Karla', "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif`

const PostCount = styled.p`
  font-family: ${mono};
  font-size: 0.8rem;
`
const PostTitle = styled.h3`
  font-family: ${sansSerif};
  font-size: 1.1rem;
  color: black;
  margin-bottom: -0.2rem;
`

export default ({ data }) => {
  return (
    <Layout>
      <PostCount>{data.allMarkdownRemark.totalCount} Posts</PostCount>
      <hr />
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
            style={{ textDecoration: `none` }}
          >
            <PostTitle>
              {node.frontmatter.title}{' '}
              <span>- {node.frontmatter.date.toLowerCase()}</span>
            </PostTitle>
          </Link>
        </div>
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
            date(formatString: "MMM DD, YYYY")
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
