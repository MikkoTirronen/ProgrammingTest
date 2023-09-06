import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

const Container = styled.div`
  display: flexbox;
  background: darkgrey;
  width: 100vw;
  height: 100%;
`;
const HeaderWrapper = styled.div`
  display: flexbox;
  text-align: center;
`;
const Header = styled.h1`
  margin: 0px;
`;
const StyledButton = styled.button`
width: 10vw;`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr 3fr 3fr;
  grid-row-gap: 1vh;
  grid-column-gap: 1vw;
  margin: 25px;
`;
const Card = styled.div`
  text-align: center;
  display: block;
  background: skyblue;
  border-style: solid;
  border-color: black;
  padding: 10px;
`;
const Title = styled.h3``;

const Description = styled.div`
padding-top: 10px
`;

function PuppiesComponentPage() {
 // Add  nextPage buttons
  const [data, setData] = useState();
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = () => {
    fetch(
      `https://api.unsplash.com/search/photos?client_id=tAawYpyTgnZdE7p_fgV3x9MzdbhXMOsKKB2RHe35S1M&query=puppies-puppy${searchQuery}&per_page=20`
    )
      .then((res) => res.json())
      .then((res) => setData(res.results))
      .catch((err) => console.log(err))
  };

  useEffect(() => {
    fetchData();
    console.log(data);
  }, [searchQuery]);

  

  return (
    <Container>
      <HeaderWrapper>
        <Header>Which is your favorite puppy?</Header>
      </HeaderWrapper>
<div>Choose a color: </div>
      <StyledButton onClick={() => setSearchQuery("")}> All</StyledButton>
      <StyledButton onClick={() => setSearchQuery("-Red")}> Red</StyledButton>
      <StyledButton onClick={() => setSearchQuery("-Brown")}>
        Brown
      </StyledButton>
      <StyledButton onClick={() => setSearchQuery("-Yellow")}>
        Yellow
      </StyledButton>
      <StyledButton onClick={() => setSearchQuery("-White")}>
        White
      </StyledButton>

      <GridContainer>
       
        {data &&
          data.map((item) => {
            return (
              <Card>
                <img src={item.urls.thumb} alt={item.alt_description}></img>
                Photo by <a href={`${item.user.portfolio}`} >{item.user.name}</a> on <a href="https://unsplash.com/?utm_source=PuppiesApp&utm_medium=referral">Unsplash</a>
                
                <Title> Description:</Title>
                <Description>{item.alt_description}</Description>

              </Card>
            );
          })}
      </GridContainer>
    </Container>
  );
}

export default PuppiesComponentPage;

