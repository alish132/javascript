// Generate a random number between 1 and 100
let randomNumber = parseInt(Math.random() * 100 + 1);

// Select HTML elements
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

// Create a new paragraph element to be used later
const p = document.createElement('p');

// Initialize variables to store previous guesses and the number of guesses
let previousGuess = [];
let numGuess = 1;

// Set the game state to be playable
let playGame = true;

// If the game is playable(true), add an event listener to the submit button
if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the form from submitting

        const guess = parseInt(userInput.value); // Get the user's guess(input) and convert it to a number
        validateGuess(guess); // Validate the user's guess
    });
}

// Function to validate the user's guess
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number"); // Alert if the guess is not a number
    } else if (guess <= 0) {
        alert("Please enter a number greater than 0"); // Alert if the guess is less than or equal to 0
    } else if (guess > 100) {
        alert("Please enter a number less than 100"); // Alert if the guess is greater than 100
    } else {
        previousGuess.push(guess); // Add the valid guess to the previous guesses array
        if (numGuess === 11) {  // Check that user have chance for guess or not
            cleanedUpGuess(guess); // Display the guess
            displayMessage(`Game over. Random number was ${randomNumber}`); // Display game over message
            endGame(); // End the game
        } else {
            cleanedUpGuess(guess); // Display the guess
            checkGuess(guess); // Check if the guess is correct
        }
    }
}

// Function to check if the guess is correct
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage("You guessed it right"); // Display success message if the guess is correct
        endGame(); // End the game
    } else if (guess < randomNumber) {
        displayMessage("Number is Too low"); // Display message if the guess is too low
    } else if (guess > randomNumber) {
        displayMessage("Number is Too high"); // Display message if the guess is too high
    }
}

// Function to display the guess and update the guess count and remaining guesses
function cleanedUpGuess(guess) {
    userInput.value = ''; // Clear the input field
    guessSlot.innerHTML += `${guess} `; // Append the current guess to the list of previous guesses
    numGuess++; // Increment the number of guesses
    remaining.innerHTML = `${10 - numGuess}`; // Update the remaining guesses display
}

// Function to display a message to the user
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`; // Display the message inside an <h2> tag
}

// Function to end the game
function endGame() {
    userInput.value = ''; // Clear the input field
    userInput.setAttribute('disabled', ''); // Disable the input field
    p.classList.add('button'); // Add a 'button' class to the paragraph element
    p.setAttribute('id', 'newGame'); // Set the ID of the paragraph element to 'newGame'
    p.innerHTML = 'Start new Game'; // Set the inner HTML of the paragraph element to 'Start new Game'
    startOver.appendChild(p); // Append the paragraph element to the 'startOver' element
    playGame = false; // Set the game state to not playable
    newGame(); // Set up a new game
}

// Function to set up a new game
function newGame() {
    const newGameButton = document.querySelector("#newGame"); // Select the 'newGame' button
    newGameButton.addEventListener('click', function(e) {
        randomNumber = parseInt(Math.random() * 100 + 1); // Generate a new random number
        previousGuess = []; // Reset the previous guesses array
        numGuess = 1; // Reset the number of guesses
        guessSlot.innerHTML = ''; // Clear the previous guesses display
        lowOrHi.innerHTML = ''; // Clear the message display
        remaining.innerHTML = `${10 - numGuess}`; // Reset the remaining guesses display
        userInput.removeAttribute('disabled'); // Enable the input field
        startOver.removeChild(p); // Remove the 'Start new Game' button
        playGame = true; // Set the game state to playable
    });
}
