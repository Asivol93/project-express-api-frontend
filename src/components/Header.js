import React from 'react'
import styled from 'styled-components'

import '../index.css'

const StyledHeader = styled.header`
    height: 500px;
  display: flex;
  color: white;
  margin-bottom: 20px;
  align-items: center;
  text-align: center
  justify-content: center;

  @media (min-width: 700px) and (max-width: 1150px) {
    height: 600px;
  }

  @media (min-width: 1151px) {
    height: 700px;
  }
`

export const Header = () => {
  return (
    <StyledHeader>
      <h1 className='header-title'>Top Music Data</h1>
    </StyledHeader>
  )
}
