import React, { useState, useEffect } from 'react'
import { MusicSection, MusicCard, MusicTagWrapper } from './StyledComponents'

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
