const apiKey = "ee20ba93bb1647e7b3779eeb209b6eaa"
const url = "http://newsapi.org/v2/everything?q=";


window.addEventListener('load', () => fetchNews("India"))


// Function to format a date as "YYYY-MM-DD"
function formatDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-based
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Get the current date as a JavaScript Date object
const today = new Date();

// Calculate the date for 30 days ago from today
const thirtyDaysAgo = new Date(today);
thirtyDaysAgo.setDate(today.getDate() - 30);

// Format the dates as "YYYY-MM-DD"
const todayFormatted = formatDate(today);
const thirtyDaysAgoFormatted = formatDate(thirtyDaysAgo);
console.log(thirtyDaysAgoFormatted);

function reload(){
    window.location.reload()
}

async function fetchNews(query) {
    
    try {
        const response = await fetch(`${url}${query}&from=${thirtyDaysAgoFormatted}&sortBy=publishedAt&apiKey=${apiKey}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        bindData(data.articles);
    } catch (error) {
        console.error('API request error:', error);
    }
}


function bindData(articles) {
    const cardsContainer = document.getElementById("card-container");
    const newsCardTemplate = document.getElementById("templet-news-card");

    cardsContainer.innerHTML = "";

    articles.forEach((article) => {
        if (!article.urlToImage) return;
        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataCard(cardClone, article)
        cardsContainer.appendChild(cardClone);
    });
}

function fillDataCard(cardClone, article) {
    const newsImg = cardClone.querySelector('#news-images'); // Use the ID selector
    const newsTitle = cardClone.querySelector('#news-title'); // Assuming there's a class named 'news-title'
    const newsSource = cardClone.querySelector('#news-source'); // Assuming there's a class named 'news-source'
    const newsDesc = cardClone.querySelector('#news-details'); // Assuming there's a class named 'news-details'

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title; // Use 'title' instead of 'Title'
    newsDesc.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleString("en-us", {
        timeZone: "Asia/Jakarta"
    });

    newsSource.innerHTML = `${article.source.name} · ${date}`;

    cardClone.firstElementChild.addEventListener('click', () => {
        window.open(article.url, "_blank")
    } )
}

let curSelectedNav = null
function onNavItemClick(id){
    fetchNews(id)
    const nanItem = document.getElementById(id)
    curSelectedNav?.classList.remove('active')
    curSelectedNav = nanItem
    curSelectedNav.classList.add('active')
}

const searchButton = document.getElementById('search-button')
const searchInput = document.getElementById('search-input')

searchButton.addEventListener('click', () => {
    const query = searchInput.value
    if(!query) return;
    fetchNews(query)
    curSelectedNav.classList.remove('active')
    curSelectedNav = null
})

