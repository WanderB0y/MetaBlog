const articleTitle = document.querySelector('#article--title');
const articleAuthor = document.querySelector('#article--author');
const articleDate = document.querySelector('#article--date');
const articleContent = document.querySelector('#article--content');
const articleImage = document.querySelector('#article--image');
const loadingAnimation = document.querySelector('#loading--animation');
const article = document.querySelector('main').firstChild.nextSibling.nextElementSibling;

const fetchData = async() => {
    try{    
        const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-11-08&sortBy=publishedAt&apiKey=07acc4f2f3284655af7e6afc4b4b2435');

        if (!response.ok) {
            throw new Error('Network response was not ok');
          }
        return response.json();
    } catch(error){
        console.error('Unable to fetch data:', error);
    }
}

function pickRandom(articles) {
    return articles[Math.floor(Math.random() * articles.length)];
}


const displayContent = (articles) => {
    loadingAnimation.style.display = 'none';
    article.style.display = 'flex';

    articleImage.setAttribute('src',articles.urlToImage)
    articleTitle.textContent = articles.title;
    articleAuthor.textContent = articles.source.name;
    articleDate.textContent = articles.publishedAt;
    articleContent.textContent = articles.content;
}

fetchData().then((result) => {
    displayContent(pickRandom(result.articles))
})

