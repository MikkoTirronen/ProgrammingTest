import React, { useState } from "react";
import styled from "styled-components";
import WordInput from "../WordInput";

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  background: grey;
  width: 50vw;
  height: 100vh;
`;
const Header = styled.h1`
  color: whitesmoke;
`;
const StyledButton = styled.button``;
const BodyContainer = styled.div`
  display: block;
  justify-content: center;
  background: lightblue;
  border: solid;
  padding: 10px;
`;
const Instructions = styled.p`
  text-align: center;
`;
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
