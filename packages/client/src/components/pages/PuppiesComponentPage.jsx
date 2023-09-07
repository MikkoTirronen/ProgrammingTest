import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import NavigationComponent from "../NavigationComponent";

const Container = styled.div`
  display: inline-flexbox;
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
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  font-size: larger;
  font-weight: 600;
`;
const StyledButton = styled.button`
  width: 10vw;
  margin-left: 10px;
  height: 35px;
  font-size: larger;
  font-weight: 400;
`;
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
const Title = styled.h3`
  padding-bottom: 0px;
  margin-bottom: 0px;
`;

const Description = styled.div`
  padding-top: 10px;
`;

export default function PuppiesComponentPage() {
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = () => {
    fetch(
      `https://api.unsplash.com/search/photos?client_id=tAawYpyTgnZdE7p_fgV3x9MzdbhXMOsKKB2RHe35S1M&query=puppies-puppy${searchQuery}${`&page=${page}`}&per_page=20`
    )
      .then((res) => res.json())
      .then((res) => setData(res.results))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
    console.log(data);
  }, [searchQuery, page]);

  return (
    <Container>
      <NavigationComponent />
      <HeaderWrapper>
        <Header>Which puppy is your favorite?</Header>
      </HeaderWrapper>
      <ButtonWrapper>
        <p>Choose a color: </p>
        <StyledButton
          onClick={() => {
            setSearchQuery("");
            setPage(1);
          }}
        >
          {" "}
          All
        </StyledButton>
        <StyledButton
          onClick={() => {
            setSearchQuery("red");
            setPage(1);
          }}
        >
          {" "}
          Red
        </StyledButton>
        <StyledButton
          onClick={() => {
            setSearchQuery("black");
            setPage(1);
          }}
        >
          Brown
        </StyledButton>
        <StyledButton
          onClick={() => {
            setSearchQuery("yellow");
            setPage(1);
          }}
        >
          Yellow
        </StyledButton>
        <StyledButton
          onClick={() => {
            setSearchQuery("white");
            setPage(1);
          }}
        >
          White
        </StyledButton>
        <StyledButton onClick={() => setPage(page - 1)}>Prev</StyledButton>
        <StyledButton onClick={() => setPage(page + 1)}>Next</StyledButton>
      </ButtonWrapper>

      <GridContainer>
        {data &&
          data.map((item, index) => {
            return (
              <Card key={index}>
                <img
                  src={`${item.urls.raw}&fm=jpg&w=400&h=300&fit=max`}
                  alt={item.alt_description}
                  width="100%"
                ></img>
                <p>
                  Photo by{" "}
                  <a href={`${item.user.links.html}`}>{item.user.name}</a> on{" "}
                  <a href="https://unsplash.com/?utm_source=PuppiesApp&utm_medium=referral">
                    Unsplash
                  </a>
                </p>
                <Title> Description:</Title>
                <Description>{item.alt_description}</Description>
              </Card>
            );
          })}
      </GridContainer>
    </Container>
  );
}
