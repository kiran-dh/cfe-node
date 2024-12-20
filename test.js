const readline = require('readline')
var loopnumber;
var check=1;

const rl= readline.createInterface({
input: process.stdin,
output: process.stdout
})

let GuessedNumber = Math.floor(Math.random() * 100) + 1;

const askForGuess = () => {
    return new Promise((resolve) => {
        rl.question('Please enter your guess (between 1 and 100): ', (answer) => {
            const guess = parseInt(answer, 10);
            resolve(guess);
        });
    });
}

const guess = async () =>{
    while(true){
 const number= await askForGuess();

if(number == GuessedNumber){
    console.log('YOU GUSSED CORRECT THE NUMBER , IT WAS ');
    break;
 }
 else if(number>GuessedNumber){
    console.log('TOO HIGH! TRY AGAIN.');
 }
 else if(number<GuessedNumber){
    console.log('TOO LOW! TRY AGAIN.');
 }
 else{
     console.log('PLEASE ENTER A NUMBER BETWEEN 1 AND 100');
     continue;
 }
}
rl.close();
}
guess;



