import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  color: ${(props) => props.theme.colors.primaryText};
`;

function App() {
  return (
    <div>
      <StyledTitle>Home Page!</StyledTitle>
    </div>
  );
}

export default App;
