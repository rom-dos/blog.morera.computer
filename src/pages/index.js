import React from 'react'
import { Link, graphql } from 'gatsby'
// import styled from 'styled-components'
import Layout from '../components/layout'

export default ({ data }) => {
  return (
    <Layout>
      <p>{data.allMarkdownRemark.totalCount} Posts</p>
      <hr />
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>
              {node.frontmatter.title}{' '}
              <span>- {node.frontmatter.date}</span>
            </h3>
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
            date(formatString: "DD MMMM, YYYY")
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
