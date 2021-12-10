import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const MusicSection = styled.section`
  width: 80%;
  display: grid;
  grid-gap: 20px 20px;

  @media (min-width: 650px) {
    grid-template-columns: 50% 50%;
  }
`

const MusicCard = styled.div`
  border-radius: 15px;
  height: 300px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.6);
  h2 {
    font-size: 20px;
  }

  p {
    font-size: 18px;
    margin: 0;
  }
  span {
    font-size: 13px;
    background-color: #b9314f;
    border-radius: 10px;
    padding: 5px;
    color: #fff;
  }
`
const MusicTagWrapper = styled.div`
  width: 90%;
  padding: 10px;
  margin-top: 20px;
  display: grid;
  gap: 5px;
  @media (min-width: 800px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const MusicList = () => {
  const [topMusic, setTopMusic] = useState([])

  useEffect(() => {
    fetchTopMusic()
  }, [])

  const fetchTopMusic = () => {
    fetch('https://top-music-data.herokuapp.com/')
      .then((res) => res.json())
      .then((data) => setTopMusic(data))
  }

  return (
    <MusicSection>
      {topMusic.map((music) => (
        <MusicCard key={music.id}>
          <h2>{music.artistName}</h2>
          <p>{music.trackName}</p>
          <p>{music.genre}</p>
          <MusicTagWrapper>
            <span>Popularity: {music.popularity}</span>
            <span>Danceability: {music.danceability}</span>
            <span>Length: {music.length} sec</span>
            <span>Speechiness: {music.speechiness}</span>
          </MusicTagWrapper>
        </MusicCard>
      ))}
    </MusicSection>
  )
}
