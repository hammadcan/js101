let readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function initializeDeck() {
  let suits = ['Spades', 'Diamonds', 'Hearts', 'Clubs'];
  let values = ['Ace', '2', '3', '4' ,'5' , '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
  let cards = [];

  for (let cardSuit = 0; cardSuit < suits.length; cardSuit++) {
    for (let cardValue = 0; cardValue < values.length; cardValue++) {
      cards.push([suits[cardSuit], values[cardValue]]);
    }
  }
  return cards;
}

function dealCards(deck, hand) {
  hand.push(deck.pop());
}

function currentHand(hand) {
  let flattenedDeck = hand.flat();
  return flattenedDeck.filter(card => flattenedDeck.indexOf(card) % 2).join(' and ');
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]];
  }
  return array;
}

function hit(deck, hand) {
  return dealCards(deck, hand);
}

function cardValue(cards) {
  let values = cards.map(card => card[1]);

  let sum = 0;
  values.forEach(value => {
    if (value === 'Ace') {
      sum += 11;
    } else if (['Jack', 'Queen', 'King'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  values.filter(value => value === 'Ace').forEach(_ => {
    if (sum > 21) sum -= 10;
  });

  return sum;
}

function busted(hand) {
  let currentHand = cardValue(hand);

  return currentHand > 21;
}

function whoWins(playerHand, dealerHand) {
  if (playerHand > dealerHand) {
    console.log('Player wins!');
  } else if (dealerHand > playerHand) {
    console.log('Dealer wins!');
  } else console.log('It\'s a tie!');
}

//MAIN GAME

while (true) {
  let deck = shuffle(initializeDeck());
  let dealerHand = [];
  let playerHand = [];

  prompt("Hello and welcome to Hammad's 21 Game!");
  dealCards(deck, playerHand);
  dealCards(deck, dealerHand);
  dealCards(deck, playerHand);
  dealCards(deck, dealerHand);
  prompt(`The dealer has a ${currentHand(dealerHand)[0]} and unknown.`);
  prompt(`You have a ${currentHand(playerHand)}`);

  //Player turn
  while (true) {
    console.log('Hit or stand? (h/s)');
    let hitOrStand = readline.question();

    if (hitOrStand === 's') {
      prompt('You stay this round.');
      break;
    } else if (hitOrStand === 'h') {
      hit(deck, playerHand);
      console.log('You hit this round.');
      prompt(`You now have ${currentHand(playerHand)}`);

      if (busted(playerHand)) {
        console.log('You have busted! You lose!');
        break;
      }

    } else prompt('That is not a game move.');
  }

  console.log(`The dealer shows his hand: ${currentHand(dealerHand)}`);

  //Computer turn
  do {
    hit(deck, dealerHand);
    console.log(`The dealer draws and now has ${currentHand(dealerHand)}`);
  } while (cardValue(dealerHand) <= 17);

  whoWins(cardValue(playerHand), cardValue(dealerHand));

  let playAgain = readline.question('Would you like to play again? (y/n)').toLowerCase();
  if (playAgain.includes('y')) {
    console.clear();
  } else if (playAgain.includes('n')) {
    prompt('Thanks for playing 21!');
    break;
  } else prompt('That is now a valid answer.');
}