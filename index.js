let userName = 'Rea';
userName ? console.log(`Hello, ${userName}`) : console.log('Hello there!');
let userQuestion= "Can you answer my question?";
console.log(`The user asked: ${userQuestion}`);
let randomNumber = Math.floor(Math.random()* 8);
let eightBall = '';
switch(randomNumber){
  case 0:
  eightBall= 'It is certain';
  break;
  case 1:
  eightBall= 'It is decidedly so';
  break;
  case 2:
  eightBall= 'Reply hazy try again';
  break;
  case 3:
  eightBall= 'Outlook not so good';
  break;
  case 4:
  eightBall= 'Cannot predict now';
  break;
  case 5:
  eightBall= 'Signs point to yes';
  break;
  case 6:
  eightBall= 'Do not count on it';
  break;
  case 7:
  eightBall= 'My sources say no';
  break;
}
console.log(eightBall);