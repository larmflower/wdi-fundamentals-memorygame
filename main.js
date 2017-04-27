//  console.log("Up and running!");

// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

//   console.log("User flipped " + cardOne);
//   console.log("User flipped " + cardThree);

// Create array containing four objects and store in cards variable
var cards = 
[{
	rank: "queen",
	suit: "hearts",
	cardImage: "queen-of-hearts.png"

},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "king-of-diamonds.png"
}];

// Create an empty array and store it in cardsInPlay variable
var cardsInPlay= [];

var checkForMath = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
  } else {
      console.log("Sorry, try again.");
  }

};

// Create function that takes one argument cardId and store it in flipCard variable
// create a for loop within the function that loops through the cards when two are displayed
// Create else if statement in for loop to action when two showing cards match
// Create alert when cards match to pop up in browser saying "you've found match"
var flipCard = function(){ 
var cardId = this.getAttribute('data-id');

//  use the setAttribute method to update the src 
//  attribute to the image of the card that was 
//  just clicked, which is stored in the cardImage
//   property in that card's object in the cards
//   array.
this.setAttribute('src', cards[cardId].cardImage);

if(cardsInPlay.length % 2 === 0){
} else if(cardsInPlay % 0 === 0){
alert("You found a match!");
};
else {
 alert("Sorry, try again");
};
console.log("User flipped " + cards[cardId].rank);
};

cardsInPlay.push(cards[cardId].rank);

// !!- Finish function below
// Create function that takes no parameter or argument, store in createBoard variable
// Create for loop within function that runs through each card and creates new one
var createBoard = function(){
for (var i=0; i< cards.length; i++) {
var cardElement = document.createElement('img');
cardElement.setAttribute('src', 'back.png');
cardElement.setAttribute('data-id', '[i]');
document.getElementById('cardElement')[0].addEventListener('click', addEvent);
document.getElementById('gameboard')[0].appendChild(boxElement);
}
};

createBoard();

console.log(cardImage);
console.log(suit);



