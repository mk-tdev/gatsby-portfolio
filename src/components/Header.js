import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
  gap: 1rem;
  a {
    color: #000;
    text-decoration: none;
    font-size: 1.2rem;
    &:hover {
      color: #000;
      text-decoration: underline;
    }
  }
`;

export const Header = () => (
  <StyledHeader>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/blog">Blog</Link>
  </StyledHeader>
);
