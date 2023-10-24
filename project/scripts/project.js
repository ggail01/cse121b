// Import the fetchQuotes function from the quotes module
import { fetchQuotes } from './quotes.js';

const quoteElement = document.getElementById('quote');
const newQuoteButton = document.getElementById('new-quote');

// Function to display a random quote
function displayRandomQuote() {
    fetchQuotes()
        .then((quotes) => { 
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const randomQuote = quotes[randomIndex].text;
            quoteElement.textContent = randomQuote;
        })
        .catch((error) => {
            console.error('Error fetching quotes:', error);
        });
}

newQuoteButton.addEventListener('click', displayRandomQuote);

// Display a random quote when the page loads
displayRandomQuote();