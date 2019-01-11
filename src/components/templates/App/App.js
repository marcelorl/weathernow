import React from 'react'
import styled from 'styled-components'

import Header from '../../atoms/Header'
import Card from '../../molecules/Card'

const Content = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 3rem 1rem 2rem 1rem;
  
  @media (min-width: 768px) {
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
    height: 100%;
  }
`

const renderWeatherCards = weather =>
  Object.keys(weather).map(key => <Card city={weather[key]} key={key} />)

const App = ({ weather }) =>
  <div>
    <Header />
    <Content>
      {renderWeatherCards(weather)}
    </Content>
  </div>

export default App
