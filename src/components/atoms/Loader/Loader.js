import React from 'react'
import styled from 'styled-components'

import img from './loader.svg'

const LoaderContainer = styled.div`
  align-self: center;
  padding: 1rem 0;
  width: 100%;
`

const Loader = ({ children, loading }) => {
  if (loading) {
    return (
      <LoaderContainer>
        <img src={img} alt="loader" />
      </LoaderContainer>
    )
  }

  return children
}

export default Loader
