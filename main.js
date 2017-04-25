//  console.log("Up and running!");

// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

//   console.log("User flipped " + cardOne);
//   console.log("User flipped " + cardThree);
var cards = ["queen", "queen", "king", "king"];
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
console.log("User flipped " + cards[cardId]);
}

cardsInPlay.push(cards[cardId]);

flipCard(0);
flipCard(2);
