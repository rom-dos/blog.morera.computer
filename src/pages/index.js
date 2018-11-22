import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import { colorPalette } from '../styles/color'

const mono = `"Inconsolata", "Lucida Console", Monaco, monospace`
const sansSerif = `'Karla', "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif`

const PostCount = styled.p`
  color: ${colorPalette.blue8};
  font-family: ${mono};
  font-size: 0.8rem;
`
const PostTitle = styled.h3`
  border-bottom: 1px solid white;
  color: ${colorPalette.blue};
  display: inline-block;
  font-family: ${sansSerif};
  font-size: 16px;
  font-weight: 400;

  &:hover {
    border-bottom: 1px solid ${colorPalette.blue8};
  }
`

const PostTags = styled.h3`
  color: ${colorPalette.blue7};
  display: inline-block;
  font-family: ${mono};
  font-size: 12px;
  font-style: italic;
  font-weight: 400;
  position: relative;
  top: 8px;
`

const PostDate = styled.h3`
  color: ${colorPalette.blue9};
  display: inline-block;
  font-family: ${sansSerif};
  font-size: 1rem;
  font-weight: 400;
  text-align: right;
`

const PostArrow = styled.span`
  font-size: 24px;
  line-height: 0.8;
  position: relative; 
  top: 2px;
  margin-right: 4px;

  &:hover {
    color: ${colorPalette.blue7};
  }
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 20% 20%;
  line-height: 1.2;
  margin-bottom: -1.4rem;
  position: relative;
`

const Spectrum = styled.div`
  background: linear-gradient(
    to right, 
    ${colorPalette.blue0}, 
    ${colorPalette.blue1},
    ${colorPalette.blue2},
    ${colorPalette.blue3},
    ${colorPalette.blue4},
    ${colorPalette.blue5},
    ${colorPalette.blue6},
    ${colorPalette.blue7},
    ${colorPalette.blue8},
    ${colorPalette.blue9});
  height: 8px;
`

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
          <PostDate>{node.frontmatter.date.toLowerCase()}</PostDate>
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
