const readline = require('readline')
var number;
var loopnumber;

const rl= readline.createInterface({
input: process.stdin,
output: process.stdout
})

let GuessedNumber = Math.floor(Math.random() * 100) + 1;


d0
{
rl.question('What number will you guess -',async function(number){

if(number == GuessedNumber){
   console.log('YOU GUSSED CORRECT THE NUMBER , IT WAS = '+number);
   return;
}
else if(number>GuessedNumber){
   console.log('TOO HIGH! TRY AGAIN.');
}
else if(number<GuessedNumber){
   console.log('TOO LOW! TRY AGAIN.');
}
else{
    console.log('PLEASE ENTER A NUMBER BETWEEN 1 AND 100');
}
loopnumber=number;
rl.close();
})
}while(loopnumber==GuessedNumber);


