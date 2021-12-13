import styled from 'styled-components'

export const MusicSection = styled.section`
  width: 80%;
  display: grid;
  grid-gap: 20px 20px;
  position: absolute;
  top: 80vh;

  @media (min-width: 650px) {
    grid-template-columns: 50% 50%;
  }
`

export const MusicCard = styled.div`
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
export const MusicTagWrapper = styled.div`
  width: 90%;
  padding: 10px;
  margin-top: 20px;
  display: grid;
  gap: 5px;
  @media (min-width: 800px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const Button = styled.button`
  padding: 13px;
  margin: 10px;
  border-radius: 20px;
  border: solid 2px #b9314f;
  background-color: #b9314f;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 14px;
  &:hover {
    border: solid 3px #b9314f;
    background-color: #fff;
    color: #b9314f;
  }
  @media (max-width: 610px) {
    font-size: 11px;
    padding: 10px;
  }
`
export const Select = styled.select`
  padding: 11px;
  margin: 10px;
  border-radius: 20px;
  border: solid 3px #b9314f;
  background-color: #b9314f;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 14px;
  &:hover {
    border: solid 2px #b9314f;
    background-color: #fff;
    color: #b9314f;
  }
  @media (max-width: 610px) {
    font-size: 11px;
    padding: 8px;
  }
`
