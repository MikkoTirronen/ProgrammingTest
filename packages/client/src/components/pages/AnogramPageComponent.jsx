import React from 'react'
import styled from 'styled-components'
import WordInput from '../WordInput'

  const Container = styled.div`
  display: flexbox;
  justify-content: center;
  flex-direction: column;
  background: grey;
  width:  50vw;
  height: 100vh;
  `
  const Header = styled.h1`
  color: whitesmoke;
  
  `
  const StyledButton = styled.button`
  
  `
  const BodyContainer =  styled.div`
  display: flex;
  justify-content: center;
  background: lightblue
  `
export default function AnogramPageComponent() {
   

  return (
    <Container>
<Header>Anogram Insanity</Header>
<BodyContainer>

<WordInput name ="wordOne"/>
<WordInput name ="wordTwo"/>

<StyledButton>Submit</StyledButton>
</BodyContainer>
    </Container>
  )
 }
