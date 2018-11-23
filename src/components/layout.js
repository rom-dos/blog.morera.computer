import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import { Container, Heading, Disk } from '../styles/styles'

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Container>
        <Link to={`/`} style={{ textDecoration: `none` }}>
          <Heading>{data.site.siteMetadata.title}</Heading>
        </Link>
        <Disk><span role='img' aria-label='Disk emoji'>💾</span></Disk>
        {children}
      </Container>
    )}
  />
)
