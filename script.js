// Generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

// Keep track of the previous guess and its difference from the secret number
let prevGuess = null;
let prevDiff = null;

// Get references to the input, button, and response elements
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const response = document.getElementById("response");

// Add a click event listener to the button
guessButton.addEventListener("click", () => {
  // Get the current guess from the input element
  const currGuess = parseInt(guessInput.value);

  // Check if the guess is correct
  if (currGuess === secretNumber) {
    response.textContent = "Congratulations! You guessed the secret number!";
  } else {
    // Check if this is the first guess or a subsequent guess
    if (prevGuess === null) {
      // This is the first guess, so just provide a hint to guess higher or lower
      response.textContent = currGuess < secretNumber ? "Guess higher!" : "Guess lower!";
    } else {
      // This is a subsequent guess, so calculate the difference from the secret number
      const currDiff = Math.abs(secretNumber - currGuess);
      const prevDiff = Math.abs(secretNumber - prevGuess);

      if (currDiff < prevDiff) {
        // The current guess is closer to the secret number than the previous guess
        response.textContent = currGuess < secretNumber ? "Getting hotter! Guess higher!" : "Getting hotter! Guess lower!";
      } else {
        // The previous guess was closer to the secret number than the current guess
        response.textContent = currGuess < secretNumber ? "Getting colder! Guess higher!" : "Getting colder! Guess lower!";
      }
    }

    // Update the previous guess and its difference from the secret number
    prevGuess = currGuess;
    prevDiff = Math.abs(secretNumber - prevGuess);
  }

  // Clear the input element
  guessInput.value = "";
});
