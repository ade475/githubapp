import React from 'react';
import styled from 'styled-components';
import logo from '../../GitHub-Mark-Light-64px.png';

const HeaderWrapper = styled.div`
  background: #06beb6; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #48b1bf,
    #06beb6
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #48b1bf,
    #06beb6
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Logo = styled.img`
  height: 64px;
  margin-top: 35px;
  pointer-events: none;
`;

const Header = () => (
  <HeaderWrapper>
    <Logo src={logo} alt='logo' />
    <h1>My Github Portfolio</h1>
  </HeaderWrapper>
);

export default Header;
