import React from 'react'
import styled from 'styled-components'

import Header from '../../atoms/Header'
import Card from '../../molecules/Card'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  padding: 2rem 1rem;
`

const renderCities = cities =>
  Object.keys(cities).map(key => <Card city={cities[key]} key={key} />)

const App = ({ weather }) =>
  <div>
    <Header />
    <Content>
      {renderCities(weather.cities)}
    </Content>
  </div>

export default App
