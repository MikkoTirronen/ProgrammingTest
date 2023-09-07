import React, { useState } from "react";
import styled from "styled-components";
import NavigationComponent from "../NavigationComponent";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: grey;
  width: 100%;
  height: 100vh;
`;
const Header = styled.h1`
  color: whitesmoke;
`;
const StyledButton = styled.button`
  font-size: larger;
  font-weight: 600;
  width: 15%;
`;
const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
const BodyContainer = styled.div`
  font-size: larger;
  display: inline-block;
  justify-content: center;
  background: lightblue;
  border: solid;
  padding: 10px;
  width: 50%;
  padding-bottom: 16px;
`;
const StyledParagraph = styled.p`
  text-align: center;
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  label {
    padding: 0px 10px;
  }
`;
const StyledInput = styled.input``;

export default function AnogramPageComponent() {
  //ADD FUNCTIONS FOR CHECKING SAME WORD AND MISSING INPUT
  const [wordOne, setWordOne] = useState("");
  const [wordTwo, setWordTwo] = useState("");
  const [message, setMessage] = useState();

  //checks if the length of two words are the same
  const isLengthSame = (wordOne, wordTwo) => {
    return wordOne.length === wordTwo.length;
  };

  //checks if the words are different
  const isEqual = (wordOne, wordTwo) => {
    return wordOne === wordTwo;
  };

  //checks if an input is blank
  const isEmpty = (wordOne, wordTwo) => {
    if (wordOne === "" && wordTwo === "") {
      return true;
    }
    if (wordOne === "" || wordTwo === "") {
      return true;
    }
    return false;
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
    //e.preventDefault();

    if (isEmpty(wordOne,wordTwo))
      return setMessage("Missing inputs, add both inputs and try again!");

    if (isEqual(wordOne, wordTwo)) {
      return setMessage("Words must be different to qualify as Anograms");
    }
    if (!isLengthSame(wordOne, wordTwo)) {
      return setMessage(
        `${wordOne} and ${wordTwo} are different lengths. They are not anograms.`
      );
    } else if (!isAnogram(wordOne, wordTwo)) {
      return setMessage(`${wordOne} and ${wordTwo} are NOT anograms.`);
    } else {
      return setMessage(`${wordOne} and ${wordTwo} are anograms.`);
    }
  };

  return (
    <Container>
      <NavigationComponent></NavigationComponent>
      <Header>Anogram Insanity</Header>
      <BodyContainer>
        <StyledParagraph>Please enter two words:</StyledParagraph>
        <InputContainer>
          <label htmlFor={"wordOne"}> {"First word:"}</label>
          <StyledInput
            type={"text"}
            id={"wordOne"}
            name={"WordOne"}
            onChange={(e) => setWordOne(e.target.value)}
          ></StyledInput>

          <label htmlFor={"wordTwo"}> {"Second word:"}</label>
          <StyledInput
            type={"text"}
            id={"wordTwo"}
            name={"WordTwo"}
            onChange={(e) => setWordTwo(e.target.value)}
          ></StyledInput>
        </InputContainer>

        <StyledParagraph id="Message">{message}</StyledParagraph>
        <ButtonWrapper>
          <StyledButton onClick={handleOnClick}>Submit</StyledButton>
        </ButtonWrapper>
      </BodyContainer>
    </Container>
  );
}
