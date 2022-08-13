import React from 'react';
import styled from 'styled-components';

import { Footer } from './Footer';
import { Header } from './Header';

const StyledLayout = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const StyledMain = styled.main`
  ${'' /* margin: 0 auto; */}
  margin: 0;
`;

const Layout = ({ children }) => (
  <StyledLayout>
    <Header />
    <StyledMain>{children}</StyledMain>
    <Footer />
  </StyledLayout>
);

export default Layout;
