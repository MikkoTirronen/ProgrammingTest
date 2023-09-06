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
  const [wordOne, setWordOne] = useState("Once");
  const [wordTwo, setWordTwo] = useState("eNco");


  
  return (
    <Container>
      <Header>Anogram Insanity</Header>
      <BodyContainer>
        <Instructions>Please enter two words:</Instructions>
        <WordInput name="wordOne" />
        <WordInput name="wordTwo" />

        <StyledButton onClick={handleOnClick}>Submit</StyledButton>
      </BodyContainer>
    </Container>
  );
}
