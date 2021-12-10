import React from 'react'
import { Header } from 'components/Header'
import { MusicList } from 'components/MusicList'
import styled from 'styled-components'
import './index.css'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const App = () => {
  return (
    <>
      <video autoPlay loop muted>
        <source
          src={'https://i.imgur.com/tQMSUBo.mp4'}
          type='video/mp4'
          className='video'
        />
      </video>
      <MainContainer>
        <Header />
        <MusicList />
      </MainContainer>
    </>
  )
}
