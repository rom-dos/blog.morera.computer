import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0 auto;
  max-width: 650px;
`

const Heading = styled.h1`
  color: blue;
  font-family: Helvetica;
  font-weight: 400;
  margin: 5rem auto 6rem auto;
  text-align: center;
`

export default ({ data }) => {
  return (
    <Container>
      <Heading>{data.site.siteMetadata.title}</Heading>
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
    </Container>
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
