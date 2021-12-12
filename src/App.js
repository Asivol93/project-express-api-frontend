import React from 'react'
import { Routes, Route, generatePath, useNavigate } from 'react-router-dom'
import { Header } from 'components/Header'
import { MusicList } from 'components/MusicList'
import styled from 'styled-components'
import './index.css'
import { GenreList } from 'components/GenreList'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`

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

export const App = () => {
  const navigate = useNavigate()

  return (
    <MainContainer>
      <StyledHeader>
        <h1 className='header-title'>Top Music Data</h1>
      </StyledHeader>
      <video autoPlay loop muted>
        <source
          src={'https://i.imgur.com/tQMSUBo.mp4'}
          type='video/mp4'
          className='video'
        />
      </video>

      <select
        onChange={(event) =>
          navigate(
            generatePath('/music/genre/:genre', {
              genre: event.target.value,
            })
          )
        }
      >
        <option value='canadian pop'>Canadian Pop</option>
        <option value='reggaeton flow'>Reggaeton flow</option>
        <option value='dance pop'>Dance pop</option>
        <option value='pop'>Pop</option>
        <option value='dfw rap'>Dfw rap</option>
        <option value='country rap'>Country rap</option>
        <option value='electropop'>Electropop</option>
        <option value='reggaeton'>Reggaeton</option>
        <option value='panamanian pop'>Panamanian pop</option>
        <option value='latin'>Latin</option>
        <option value='escape room'>Escape room</option>
        <option value='pop house'>Pop house</option>
        <option value='australian pop'>Australian pop</option>
        <option value='edm'>Edm</option>
        <option value='atl hip hop'>Atl hip hop</option>
        <option value='big room'>Big room</option>
        <option value='boy band'>Boy band</option>
        <option value='brostep'>Brostep</option>
      </select>
      <button
        onClick={(event) =>
          navigate(
            generatePath('/music', {
              genre: event.target.value,
            })
          )
        }
      >
        All music
      </button>

      <Routes>
        <Route path='/music' element={<MusicList />} />
        <Route path='/music/genre/:genre' element={<GenreList />} />
      </Routes>
    </MainContainer>
  )
}
