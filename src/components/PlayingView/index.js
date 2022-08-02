import {Component} from 'react'

import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import {
  AppContainer,
  NavContainer,
  Heading,
  ScoreContainer,
  Paragraph,
  ScoreParagraph,
  ButtonsContainer,
  GameButton,
  GameImage,
  RulesContainer,
  RulesButton,
  GameContainer,
  YouContainer,
  OpponentContainer,
  UserParagraph,
  ResultParagraph,
  PlayAgainButton,
  PopupContainer,
  CloseContainer,
  CloseButton,
  RulesImage,
  YouAndOpponentContainer,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    testId: 'rockButton',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    testId: 'scissorsButton',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    testId: 'paperButton',
  },
]

class PlayingView extends Component {
  state = {
    isGameStarted: false,
    activeId: '',
    score: 0,
    youData: '',
    opponentData: '',
    resultMsg: '',
  }

  onClickImage = id => {
    this.setState({activeId: id}, this.getGameResults)
  }

  getRandomNumber = () => {
    const choiceListLength = choicesList.length
    return Math.floor(Math.random() * choiceListLength)
  }

  getGameResults = () => {
    const {activeId} = this.state
    const filteredYouData = choicesList.filter(
      eachChoice => eachChoice.id === activeId,
    )
    const updatedYouData = filteredYouData[0]
    const randomNumber = this.getRandomNumber()
    const updatedOpponentData = choicesList[randomNumber]
    const checkOpponentId = updatedOpponentData.id

    if (activeId === checkOpponentId) {
      this.setState({
        isGameStarted: true,
        youData: updatedYouData,
        opponentData: updatedOpponentData,
        resultMsg: 'IT IS DRAW',
      })
    } else if (activeId === 'ROCK' && checkOpponentId === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        isGameStarted: true,
        youData: updatedYouData,
        opponentData: updatedOpponentData,
        resultMsg: 'YOU WON',
      }))
    } else if (activeId === 'SCISSORS' && checkOpponentId === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        isGameStarted: true,
        youData: updatedYouData,
        opponentData: updatedOpponentData,
        resultMsg: 'YOU WON',
      }))
    } else if (activeId === 'PAPER' && checkOpponentId === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        isGameStarted: true,
        youData: updatedYouData,
        opponentData: updatedOpponentData,
        resultMsg: 'YOU WON',
      }))
    } else {
      this.setState(prevState => ({
        score: prevState.score - 1,
        isGameStarted: true,
        youData: updatedYouData,
        opponentData: updatedOpponentData,
        resultMsg: 'YOU LOSE',
      }))
    }
  }

  onClickPlayAgain = () => {
    this.setState({
      youData: '',
      opponentData: '',
      resultMsg: '',
      isGameStarted: false,
      activeId: '',
    })
  }

  render() {
    const {score, isGameStarted, youData, opponentData, resultMsg} = this.state
    const youImageUrl = youData.imageUrl
    const opponentImageUrl = opponentData.imageUrl

    return (
      <AppContainer>
        <NavContainer>
          <Heading>
            ROCK
            <br />
            PAPER
            <br />
            SCISSORS
          </Heading>
          <ScoreContainer>
            <Paragraph>Score</Paragraph>
            <ScoreParagraph>{score}</ScoreParagraph>
          </ScoreContainer>
        </NavContainer>
        {isGameStarted ? (
          <GameContainer>
            <YouAndOpponentContainer>
              <YouContainer>
                <UserParagraph>YOU</UserParagraph>
                <GameImage src={youImageUrl} alt="your choice" />
              </YouContainer>
              <OpponentContainer>
                <UserParagraph>OPPONENT</UserParagraph>
                <GameImage src={opponentImageUrl} alt="opponent choice" />
              </OpponentContainer>
            </YouAndOpponentContainer>
            <ResultParagraph>{resultMsg}</ResultParagraph>
            <PlayAgainButton type="button" onClick={this.onClickPlayAgain}>
              PLAY AGAIN
            </PlayAgainButton>
          </GameContainer>
        ) : (
          <ButtonsContainer>
            {choicesList.map(eachChoice => {
              const onClickGameButton = () => {
                this.onClickImage(eachChoice.id)
              }
              return (
                <GameButton
                  type="button"
                  key={eachChoice.id}
                  data-testid={eachChoice.testId}
                  value={eachChoice.id}
                  onClick={onClickGameButton}
                >
                  <GameImage src={eachChoice.imageUrl} alt={eachChoice.id} />
                </GameButton>
              )
            })}
          </ButtonsContainer>
        )}
        <Popup
          modal
          trigger={
            <RulesContainer>
              <RulesButton type="button">RULES</RulesButton>
            </RulesContainer>
          }
        >
          {close => (
            <PopupContainer>
              <CloseContainer>
                <CloseButton type="button" onClick={() => close()}>
                  <RiCloseLine />
                </CloseButton>
              </CloseContainer>
              <RulesImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </PopupContainer>
          )}
        </Popup>
      </AppContainer>
    )
  }
}

export default PlayingView
