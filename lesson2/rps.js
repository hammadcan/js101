const readline = require('readline-sync');
const VALID_CHOICES = { r: "rock", p: "paper", sc: "scissors", sp: "spock", l: "lizard"};
let score = {player: 0, computer: 0};
const WINNING_SCORE = 3;

function prompt(message) {
  console.log(`=> ${message}`);
}

function playerWin() {
  score.player++;
}

function computerWin() {
  score.computer++;
}

while (score.player < WINNING_SCORE || score.computer < WINNING_SCORE) {
  while (true) {
    prompt(`Choose one: ${Object.values(VALID_CHOICES)}`);
    let choice = readline.question();

    if (!VALID_CHOICES.hasOwnProperty(choice)) {
      prompt("That's not a valid choice");
      continue;
    }

    let randomIndex = Math.floor(Math.random() * 5);
    let computerChoice = Object.keys(VALID_CHOICES)[randomIndex];
    choice = VALID_CHOICES[choice];
    computerChoice = VALID_CHOICES[computerChoice];

    prompt(`You chose ${choice}, computer chose ${computerChoice}`);

    if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'rock' && computerChoice === 'lizard') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'paper' && computerChoice === 'spock') ||
      (choice === 'scissors' && computerChoice === 'paper') ||
      (choice === 'scissors' && computerChoice === 'lizard') ||
      (choice === 'spock' && computerChoice === 'scissors') ||
      (choice === 'spock' && computerChoice === 'rock') ||
      (choice === 'lizard' && computerChoice === 'spock') ||
      (choice === 'lizard' && computerChoice === 'paper')) {
      prompt('You win!');
      playerWin();

    } else if ((choice === 'rock' && computerChoice === 'paper') ||
      (choice === 'rock' && computerChoice === 'spock') ||
      (choice === 'paper' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'lizard') ||
      (choice === 'scissors' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'spock') ||
      (choice === 'spock' && computerChoice === 'paper') ||
      (choice === 'spock' && computerChoice === 'lizard') ||
      (choice === 'lizard' && computerChoice === 'scissors') ||
      (choice === 'lizard' && computerChoice === 'rock')) {
      prompt('Computer wins!');
      computerWin();
    } else {
      prompt("It's a tie!");
    }

    console.log(score);
    if (score.player === 3 || score.computer === 3) {
      if (score.player === 3) {
        console.log('You win!');
      } else console.log('The computer won.');
      break;
    }
  }

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  score.computer = 0;
  score.player = 0;
  if (answer[0] !== 'y') {
    console.log("Thanks for playing!");
    break;
  }
}
