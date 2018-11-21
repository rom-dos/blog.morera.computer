import React from 'react'
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

export default () => (
  <Container>
    <Heading>blog.morera.computer</Heading>
    <hr />
  </Container>
)
