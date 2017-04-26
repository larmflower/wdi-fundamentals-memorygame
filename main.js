//  console.log("Up and running!");

// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

//   console.log("User flipped " + cardOne);
//   console.log("User flipped " + cardThree);
var cards = 
[{
	rank: "queen",
	suit: "hearts",
	cardImage: "queen-of-hearts.png"

},{
	rank: "queen",
	suit: "diamonds",
	cardImage: "queen-of-diamonds.png"
},{
	rank: "king",
	suit: "hearts",
	cardImage: "king-of-hearts.png"
},{
	rank: "king",
	suit: "diamonds",
	cardImage: "king-of-diamonds.png"
}];


var cardsInPlay= [];

var checkForMath = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
  } else {
      console.log("Sorry, try again.");
  }

}

var flipCard = function(cardId){

if(cardsInPlay.length === 2){
} else if(cardsInPlay === 0){
alert("You found a match!")
}

else {
 alert("Sorry, try again")
}
console.log("User flipped " + cards[cardId].rank);
}

cardsInPlay.push(cards[cardId].rank);

flipCard(0);
flipCard(2);

console.log(cardImage);
console.log(suit);

