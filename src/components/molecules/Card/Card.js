import React from 'react'
import styled from 'styled-components'

import Info from '../../atoms/Info'

const CardContainer = styled.div`
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 1px 1px 5px #b4b4b4;
  font-size: 1.2rem;
  margin-top: 2rem;
  text-align: center;
  width: 100%;
  
  :not(:first-child) {
    .card__footer__info {
      display: none;
    }
  }
  
  @media (min-width: 768px) {
    height: 18rem;
    margin-top: 0;
    width: 15rem;
    
    :not(:nth-child(2)) {
      height: 15rem;
    
      .card__footer__info {
        display: none;
      }
    }
    
    :nth-child(2) {
      .card__footer__info {
        display: flex;
      }
    }
  }
`

const CardHeader = styled.div`
  border-bottom: 1px solid #ebebeb;
  color: #737C84;
  padding: 0.8rem 0;
`

const CardContent = styled.div.attrs({
  color: ({ value }) => value <= 5 ? '69a3ff' : value > 25 ? 'ed1946' : 'ff9632'
})`
  color: #${({ color }) => color};
  font-size: 5rem;
  padding: 2rem 0;
`

const CardFooter = styled.div`
  background: #f1f1f1;
  color: #b4b4b4;
  font-size: 0.6rem;
  padding: 0.8rem 0;
`

const CardFooterInfo = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 0.7rem;
`

const Card = ({ city }) =>
  <CardContainer>
    <CardHeader>{city.name}</CardHeader>
    <CardContent value={city.temp}>{Math.round(city.temp)}°</CardContent>
    <CardFooter>
      <CardFooterInfo className="card__footer__info">
        <Info title='humidity' value={city.humidity} unit='%' />
        <Info title='pressure' value={city.pressure} unit='hPa' />
      </CardFooterInfo>
      <div>Updated at {city.createdAt}</div>
    </CardFooter>
  </CardContainer>

export default Card
