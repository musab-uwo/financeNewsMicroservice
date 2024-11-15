const apiKey = 'demo'; // Demo API key
const ticker = 'AAPL'; // Ticker symbol for Apple
const url = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${ticker}&apikey=${apiKey}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        const sentimentData = data;

        // Get the container where we will display the results
        const newsContainer = document.getElementById('news-container');
        
        if (sentimentData && sentimentData.feed) {
            // Loop through the sentiment data and display each news item
            sentimentData.feed.forEach(item => {
                const newsItem = document.createElement('div');
                newsItem.classList.add('news-item');
                
                newsItem.innerHTML = `
                    <h2>${item.title}</h2>
                    <p>${item.summary}</p>
                    <a href="${item.url}" target="_blank">Read more</a>
                `;
                
                newsContainer.appendChild(newsItem);
            });
        } else {
            newsContainer.innerHTML = '<p>No news data available</p>';
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        const newsContainer = document.getElementById('news-container');
        newsContainer.innerHTML = '<p>Error loading the news data. Please try again later.</p>';
    });
