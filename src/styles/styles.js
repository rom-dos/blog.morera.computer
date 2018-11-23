import { colorPalette } from '../styles/color'
import styled, { createGlobalStyle } from 'styled-components'

export const mono = `"Inconsolata", "Lucida Console", Monaco, monospace`
export const sansSerif = `'Karla', "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif`

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
