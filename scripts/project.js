document.addEventListener("DOMContentLoaded", function () {
    const quoteText = document.getElementById("quote-text");
    const newQuoteButton = document.getElementById("new-quote");

    // Function to fetch a random quote from a public API
    function fetchRandomQuote() {
        fetch("https://api.quotable.io/random")
            .then((response) => response.json())
            .then((data) => {
                quoteText.textContent = data.content;
            })
            .catch((error) => {
                console.error("Error fetching a quote: ", error);
                quoteText.textContent = "An error occurred. Please try again later.";
            });
    }

    // Event listener for the "New Quote" button
    newQuoteButton.addEventListener("click", fetchRandomQuote);

    // Initial quote fetch on page load
    fetchRandomQuote();
});
