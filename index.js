const input = require('readline-sync');


const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
      return userInput
    } else if(userInput === "") {
      console.log("Bruh.. Please type something...")
      process.exit()
    } else if(!isNaN(userInput)) {
      console.log("You need to type some text, not number.")
      process.exit()
    } else {
      console.log("Please type either rock, paper or scissors..");
      process.exit()
    }
  }
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
  
    switch(randomNumber){
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';  
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
    return 'The game is a tie!';
  }
   if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }

  }
}
  

  let userThrow = input.question("What do you want to throw? (rock, paper or scissors)");

  const playGame = () => {
    // console.log(userThrow);
     let userChoice = getUserChoice(userThrow);
     const computerChoice = getComputerChoice();
     console.log('You threw: ' + userChoice);
     console.log('The computer threw:' + computerChoice);
     console.log(determineWinner(userChoice, computerChoice));

  };
   
  playGame();
