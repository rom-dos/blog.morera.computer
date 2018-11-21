import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0 auto;
  max-width: 650px;
`

const Heading = styled.h1`
  color: #284253;
  font-family: 'Karla', "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  font-weight: 400;
  margin: 5rem auto 6rem auto;
  text-align: center;
  text-decoration: none;
`

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
        {children}
      </Container>
    )}
  />
)
