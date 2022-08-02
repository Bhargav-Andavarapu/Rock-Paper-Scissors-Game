import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #223a5f;
  min-height: 100vh;
`

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 2px solid #ffffff;
  border-radius: 10px;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`

export const Heading = styled.h1`
  font-family: 'Bree Serif';
  font-size: 22px;
  font-weight: 400;
  color: #ffffff;
`

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  background-color: #ffffff;
  width: 150px;
  height: 100px;
`

export const Paragraph = styled.p`
  font-family: 'Bree Serif';
  font-size: 22px;
  color: #223a5f;
`

export const ScoreParagraph = styled.p`
  font-family: 'Roboto';
  font-size: 35px;
  font-weight: 700;
  color: #223a5f;
  margin-top: -20px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 80%;
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`

export const GameButton = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`

export const GameImage = styled.img`
  width: 100px;
  @media screen and (min-width: 768px) {
    width: 150px;
  }
`

export const RulesContainer = styled.div`
  align-self: flex-end;
  background-color: transparent;
`

export const RulesButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px;
  width: 75px;
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 14px;
  outline: none;
  cursor: pointer;
`

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export const YouContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const OpponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const UserParagraph = styled.div`
  font-family: 'Roboto';
  font-size: 20px;
  color: #ffffff;
`

export const ResultParagraph = styled.p`
  font-family: 'Roboto';
  font-size: 30px;
  color: #ffffff;
`
export const PlayAgainButton = styled.button`
  border: none;
  border-radius: 5px;
  width: 150px;
  background-color: #ffffff;
  outline: none;
  cursor: pointer;
  color: #223a5f;
  padding: 10px;
  font-family: 'Bree Serif';
  font-size: 14px;
`

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 10px;
  width: 80%;
`

export const CloseContainer = styled.div`
  align-self: flex-end;
`

export const CloseButton = styled.button`
  padding: 10px;
  border: none;
  font-size: 16px;
  outline: none;
  cursor: pointer;
`

export const RulesImage = styled.img`
  width: 90%;
  @media screen and (min-width: 768px) {
    width: 75%;
  }
`

export const YouAndOpponentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
