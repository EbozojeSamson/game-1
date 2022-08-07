'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Number!'

document.querySelector('.number').textContent = 13
document.querySelector('.score').textContent = 10

document.querySelector('.guess').value =23
*/


let number = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
  const guess = Number (document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When There is no imout 
  if(!guess){
    // document.querySelector('.message').textContent = 'No Number ⛔'
    displayMessage('No Number ⛔')

      //When player wins 
  } else if (guess===number){
    // document.querySelector('.message').textContent = '🎉Correct Number!';
    displayMessage('🎉Correct Number!')
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = "green";
    document.querySelector('.number').style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore
    }

    //when guess is wrong 
    } else if (guess!==number) {
      if(score > 1){
        document.querySelector('.message').textContent = guess>number ? 'Too High📈' : 'Too Low📉'
        score--
        document.querySelector('.score').textContent = score
       } else {
        document.querySelector('.message').textContent = 'You Lose bitch 👎🏿'
        document.querySelector('.score').textContent = 0
    }
  }
}
  //   //when guess is greataer than number
  //    else if (guess>number){
  //    if(score > 1){
  //     document.querySelector('.message').textContent = 'Too High📈'
  //     score--
  //     document.querySelector('.score').textContent = score
  //    } else {
  //     document.querySelector('.message').textContent = 'You Lose bitch 👎🏿'
  //     document.querySelector('.score').textContent = 0
  //    }

  //     //when guess is lesser than number
  // } else if (guess<number){
  //   if(score > 1){
  //     document.querySelector('.message').textContent = 'Too Low📉'
  //     score--
  //     document.querySelector('.score').textContent = score
  //    } else {
  //     document.querySelector('.message').textContent = 'You Lose bitch 👎🏿'
  //     document.querySelector('.score').textContent = 0
  //    }
  // }
)

document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random()*20)+1;
  score = 20
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent ='?';
  document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector('.guess').value = ''
  document.querySelector('.number').style.width = "15rem";
  const guess = Number (document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  document.querySelector('body').style.backgroundColor = "#222";
})


// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);
// });