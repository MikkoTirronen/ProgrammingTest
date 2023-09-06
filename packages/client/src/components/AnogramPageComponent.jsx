import React from 'react'
import styled from 'styled-components'

  const Container = styled.div`
  display: flex;
  justify-content: center;
  background: grey;
  width: 100vw;
  height: 100vh;
  `
  const Header = styled.h1`
  color: whitesmoke;
  
  `
export default function AnogramPageComponent() {
   

  return (
    <Container>
<Header>Anogram Insanity</Header>
    </Container>
  )
 }
