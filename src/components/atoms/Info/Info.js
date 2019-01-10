import React from 'react'
import styled from 'styled-components'

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
  text-transform: uppercase;
`

const InfoContent = styled.div`
  color: #737C84;
  font-size: 1rem;
  
  span {
    font-size: 0.6rem;
  }
`

const Info = ({ title, value, unit }) =>
  <InfoContainer>
    <Title>{title}</Title>
    <InfoContent>
      {value}<span>{unit}</span>
    </InfoContent>
  </InfoContainer>

export default Info
