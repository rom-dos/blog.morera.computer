import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import styled from 'styled-components'
import { colorPalette } from '../styles/color'

const Container = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 700px;
  padding: 0 0.8rem;
`

const Heading = styled.h1`
  color: ${colorPalette.blue9};
  font-family: 'Karla', "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  font-size: 24px;
  font-weight: 400;
  margin: 5rem auto 0rem auto;
  text-align: center;
  text-decoration: none;

  &:hover {
    color: ${colorPalette.blue7};
  }
`

const Disk = styled.p`
  font-size: 24px;
  margin-bottom: 6rem;
  text-align: center;
  width: 100%;
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
        <Disk>💾</Disk>
        {children}
      </Container>
    )}
  />
)
