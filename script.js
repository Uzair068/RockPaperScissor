const totalscores = {
    computerScore: 0,
    playerScore: 0
  }

  function getComputerChoice() {
    const rpsChoice = ['Rock', 'Paper', 'Scissor']
    const randomChoice = Math.floor(Math.random() * 3)
    return rpsChoice[randomChoice]
  }

  function getResult(playerChoice, computerChoice) {
    // return the result of score based on if you won, drew, or lost
    let score;
    // All situations where human draws, set `score` to 0
    if (playerChoice == computerChoice) {
      score = 0
  
    } else if (playerChoice == 'Rock' && computerChoice == 'Scissor') {
      score = 1
    } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
      score = 1
    } else if (playerChoice == 'Scissor' && computerChoice == 'Paper') {
      score = 1
      // Otherwise human loses (aka set score to -1)
    } else {
      score = -1
    }
    return score
  }
  
  // ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
  function showResult(score, playerChoice, computerChoice) {

    const resultDiv = document.getElementById('result')
    const handsDiv = document.getElementById('hands')
    const playerScoreDiv = document.getElementById('player-score')
    const computerScoreDiv = document.getElementById('Computer-score')
    if (score == -1) {
      resultDiv.innerText = 'You Lose'
    } else if (score == 0) {
      resultDiv.innerText = "It's a tie!"
    } else {
      resultDiv.innerText = 'You Won!'
    }
    handsDiv.innerText = `${playerChoice} vs ${computerChoice}`
    playerScoreDiv.innerText = `Your Score ${totalscores['playerScore']}`
    computerScoreDiv.innerText=`Computer Score ${totalscores['computerScore']}`
    
  }
  
  function onClickRPS(playerChoice) {
    const computerChoice = getComputerChoice()
    const score = getResult(playerChoice, computerChoice)
    totalscores['playerScore'] += score
    totalscores['computerScore'] -= score
    showResult(score, playerChoice, computerChoice)
  }
  
  function playGame() {

    const rpsButtons = document.querySelectorAll('.rpsButton')

    rpsButtons.forEach(rpsButton => {
      rpsButton.onclick = () => onClickRPS(rpsButton.value)
    })
  
    const endGameButton = document.getElementById('endGameButton')
    endGameButton.onclick = () => endGame(totalscores)
  }
  
  // ** endGame function 
  function endGame(totalscores) {
    totalscores['playerScore'] = 0
    totalscores['computerScore'] = 0
  
    const resultDiv = document.getElementById('result')
    const handsDiv = document.getElementById('hands')
    const playerScoreDiv = document.getElementById('player-score')
    const computerScoreDiv = document.getElementById('Computer-score')
  
    resultDiv.innerText=''
    handsDiv.innerText=''
    playerScoreDiv.innerText=''
    computerScoreDiv.innerText=''
  }
  
  playGame()