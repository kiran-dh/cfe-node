const readline = require('readline')
var number;
var loopnumber;
var check=1;

const rl= readline.createInterface({
input: process.stdin,
output: process.stdout
})

let GuessedNumber = Math.floor(Math.random() * 100) + 1;

function asyncguess(){

rl.question('What number will you guess -', function(number){

if(number == GuessedNumber){
    console.log('YOU GUSSED CORRECT THE NUMBER , IT WAS = '+number);
    return 1;
 }
 else if(number>GuessedNumber){
    console.log('TOO HIGH! TRY AGAIN.');
    return 0;
 }
 else if(number<GuessedNumber){
    console.log('TOO LOW! TRY AGAIN.');
    return 0;
 }
 else{
     console.log('PLEASE ENTER A NUMBER BETWEEN 1 AND 100');
     return 0;
 }
})}
 
 if(check!==0){
    check= await guess;
 }
