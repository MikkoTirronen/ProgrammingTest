import React, { useState } from "react";
import { styled } from "styled-components";

const Container = styled.div`
  display: flexbox;
  background: darkgrey;
  width: 100vw;
  height: 100vh;
`;

const Title = styled.h3``;

const Description = styled.div``;

function PuppiesComponentPage() {
  const [searchQuery, setSearchQuery] = useState("");
 
  return (
    <Container>
      
    </Container>
  );
}

export default PuppiesComponentPage;

