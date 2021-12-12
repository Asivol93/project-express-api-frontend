import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MusicSection, MusicCard, MusicTagWrapper } from './StyledComponents'

export const GenreList = () => {
  const [chosenGenre, setChosenGenre] = useState([])

  const { genre } = useParams()

  useEffect(() => {
    fetch(`https://top-music-data.herokuapp.com/music/genre/${genre}`)
      .then((res) => res.json())
      .then((data) => setChosenGenre(data))
  }, [genre])

  //   const fetchGenre = () => {
  //     fetch(`https://top-music-data.herokuapp.com/genre/:${genre}`)
  //       .then((res) => res.json())
  //       .then((data) => setChosenGenre(data))
  //   }

  return (
    <MusicSection>
      {chosenGenre?.response?.results.map((music) => (
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
