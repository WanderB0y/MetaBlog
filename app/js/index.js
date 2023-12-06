console.log("Hello")

const fetchData = async (url) => {
    const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-11-05&sortBy=publishedAt&apiKey=07acc4f2f3284655af7e6afc4b4b2435');
    return response.json();
}

const genereteArticles = async() => {

    return fetchData();
};

genereteArticles().then((result) => {
    console.log(result)
})



