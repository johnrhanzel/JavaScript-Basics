//IF ELSE + TERNARY + COMPARISON OPERATOR + LOGICAL OPERATOR + SWITCH

  

let winnerDinner = 'Chicken Dinner';

let loserDinner = 'Nothing Dinner';

  
  

//using if else

winnerDinner ? console.log('You got some nice dinner!') :

console.log('Nothing for you jackass.');

  

//assigning a new variable

winnerDinner = false;

winnerDinner ? console.log('You got some nice dinner!') :

console.log('Nothing for you jackass.');

  

//using comparison operator

winnerDinner === 'Awit' ? console.log('You got some nice dinner!') :

console.log('Nothing for you jackass.');

  
  

//using logical operator

let diceWin = 1;

let diceLoss = 0;

  

diceWin === 2 && diceLoss === 3 ? console.log('You won!') : console.log('Try again brodie');

  
  

//using switch

let japanBeauty = 'Cherry Blossoms';

  

switch(japanBeauty){

  case 'Cherry Blossoms':

    console.log('Beautiful flowers');

    break;

  case 'Pagoda':

    console.log('Heritage beauty');

    break;

  case 'Winter':

    console.log('Skii');

    break;

  default:

    console.log('Invalid');

    break;

}