const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
}

const askForGuess = () => {
    return new Promise((resolve) => {
        rl.question('Please enter your guess (between 1 and 100): ', (answer) => {
            const guess = parseInt(answer, 10);
            resolve(guess);
        });
    });
}

const numberGuesser = async () => {
    const randomNumber = generateRandomNumber();

    while (true) {
        const userGuess = await askForGuess();

        if (userGuess < 1 || userGuess > 100 ) {
            console.log('Please enter a valid number between 1 and 100.');
            continue;
        }
        if (userGuess > randomNumber) {
            console.log('Too high! Try again.');
        } else if (userGuess < randomNumber) {
            console.log('Too low! Try again.');
        } else {
            console.log('Congratulations! You guessed the number.');
            break;
        }
    }

    rl.close();
}

numberGuesser();
