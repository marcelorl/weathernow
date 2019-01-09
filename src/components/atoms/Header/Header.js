import React from 'react'
import styled from 'styled-components'

import logo from './logo.svg'

const HeaderContainer = styled.div`
  align-items: center;
  background: #ffffff;
  box-sizing: border-box;
  display: flex;
  height: 3rem;
  justify-content: center;
  padding: 0.7rem 0;
  position: fixed;
  top: 0;
  width: 100%
  
  img {
    height: 100%;
  }
`

const Header = () =>
  <HeaderContainer>
    <img src={logo} className="weathernow-logo" alt="logo" />
  </HeaderContainer>

export default Header
