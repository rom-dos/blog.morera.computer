import { colorPalette } from '../styles/color'
import styled, { createGlobalStyle } from 'styled-components'

export const mono = `"Inconsolata", "Lucida Console", Monaco, monospace`
export const sansSerif = `'Karla', "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif`

export const Spectrum = styled.div`
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

/* Global Styles */

export const GlobalStyle = createGlobalStyle`
  code,
  pre {
    background-color: ${colorPalette.blue1};
    border-radius: 8px;
    font-family: ${mono};
    line-height: 1.4;
    overflow: auto;
    padding: 0.28rem;
  }
  code {
    font-size: 13px;
  }
  pre {
    font-size: 12px;
  }
`

/* Layout */

export const Container = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 700px;
  padding: 0 0.8rem;
`

export const Heading = styled.h1`
  color: ${colorPalette.blue9};
  font-family: ${sansSerif};
  font-size: 24px;
  font-weight: 400;
  margin: 5rem auto 0rem auto;
  text-align: center;
  text-decoration: none;

  &:hover {
    color: ${colorPalette.blue7};
  }
`

export const Disk = styled.p`
  font-size: 24px;
  margin-bottom: 6rem;
  text-align: center;
  width: 100%;
`

/* Index */

export const PostCount = styled.p`
  color: ${colorPalette.blue8};
  font-family: ${mono};
  font-size: 16px;
`
export const PostTitle = styled.h3`
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

export const PostTags = styled.h3`
  color: ${colorPalette.blue7};
  display: inline-block;
  font-family: ${mono};
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  position: relative;
  top: -1px;

  @media (max-width: 375px) {
    display: none;
  }
`

export const PostDate = styled.h3`
  color: ${colorPalette.blue9};
  display: inline-block;
  font-family: ${sansSerif};
  font-size: 14px; 
  font-weight: 400;
  text-align: right;
`

export const PostArrow = styled.span`
  font-size: 24px;
  line-height: 0.8;
  position: relative; 
  top: 2px;
  margin-right: 4px;

  &:hover {
    color: ${colorPalette.blue7};
  }
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 20% 20%;
  line-height: 1.2;
  margin-bottom: -1.4rem;
  position: relative;

  @media (max-width: 375px) {
    grid-template-columns: 80% 20%;
  }
`

/* Blog Template */

export const BlogPostTitle = styled.h1`
  color: ${colorPalette.blue};
  font-family: ${sansSerif};
`
export const BlogPostContent = styled.div`
  font-family: ${mono};
  font-size: 14px;
  line-height: 1.5;
`

export const BlogPostDate = styled.span`
  display: -block;
  font-family: ${mono};
  font-size: 15px;
  font-weight: 400;
  line-height: 1.4;
  text-align: right;
  position: relative;
  top: 20px;
`

export const TitleGrid = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
  line-height: 1;
`
