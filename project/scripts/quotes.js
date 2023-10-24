// Export the fetchQuotes function to retrieve quotes from an API
export function fetchQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';

    return fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.json();
        });
}