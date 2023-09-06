import React, { useState } from "react";
import styled from "styled-components";


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
const InputContainer = styled.div``
const StyledInput = styled.input``

export default function AnogramPageComponent() {
  const [wordOne, setWordOne] = useState("");
  const [wordTwo, setWordTwo] = useState("");
  const [result, setResult] = useState();

  //checks if the length of two words are the same
  const isLengthSame = (wordOne, wordTwo) => {
    return wordOne.length === wordTwo.length ? true : false;
  };

  //checks if the words are anograms
  const isAnogram = (wordOne, wordTwo) => {
    //declares constant of an uppercase string of characters that are sorted alphabetically and joined together by commas
    const stringOne = wordOne.toUpperCase().split("").sort().join();
    console.log(stringOne);
    const stringTwo = wordTwo.toUpperCase().split("").sort().join();
    console.log(stringTwo);
    console.log(stringOne === stringTwo);
    //returns if the two strings are the same true or false.
    return stringOne === stringTwo;
  };

  const handleOnClick = (e) => {
    e.preventDefault();

    if (!isLengthSame(wordOne, wordTwo)) {
      return setResult(
        `${wordOne} and ${wordTwo} are different lengths. They are not anograms.`
      );
    } else if (!isAnogram(wordOne, wordTwo)) {
      return setResult(`${wordOne} and ${wordTwo} are NOT anograms.`);
    } else {
      return setResult(`${wordOne} and ${wordTwo} are anograms.`);
    }
  };

  return (
    <Container>
      <Header>Anogram Insanity</Header>
      <BodyContainer>
        <Instructions>Please enter two words:</Instructions>
        <InputContainer>
    <label htmlFor={"wordOne"}> {"wordOne"}</label>
   <StyledInput type={"text"} id={"wordOne"} name={"WordOne"} onChange={(e) => setWordOne(e.target.value)}></StyledInput>
    
    <label htmlFor={"wordTwo"}> {"wordTwo"}</label>
   <StyledInput type={"text"} id={"wordTwo"} name={"WordTwo"} onChange={(e) => setWordTwo(e.target.value)}></StyledInput>
    </InputContainer>
       

        <StyledButton onClick={handleOnClick}>Submit</StyledButton>
        <p>
          {result}
        </p>
      </BodyContainer>
    </Container>
  );
}
