import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  text-align: center;
  padding: 1rem;
`;

export const Footer = () => (
  <div>
    <StyledFooter>
      Designed and built by referring online references. @{' '}
      {new Date().getFullYear()}
    </StyledFooter>
  </div>
);
