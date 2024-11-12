// Import Functions & Modules
import { JokeSection } from "../components/JokeSection/JokeSection.js";
import { Joke } from "../components/Joke/Joke.js";
console.clear();

// Declare root Element
const root = document.body;

// Assemble DOM for joke section
const jokeSection = JokeSection();
root.append(jokeSection);

function renderJoke(joke) {
  // Clear the joke section
  jokeSection.innerHTML = "";

  // Create a new joke DOM element and append it to joke section
  const newJoke = Joke(joke);

  jokeSection.append(newJoke);
}

// JS is a single threaded language
async function fetchJoke() {
  const response = await fetch(
    "https://example-apis.vercel.app/api/bad-jokes/random"
  ); // web API
  const data = await response.json();

  // console.log(data.joke);
  renderJoke(data.joke);
}

fetchJoke();
