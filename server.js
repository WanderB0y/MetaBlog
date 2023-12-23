import express from "express";
import axios from "axios";

const port = 3000;
const app = express();

app.use(express.static('public'));


app.get('/', async (req, res) => {
    try {
        // const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=07acc4f2f3284655af7e6afc4b4b2435')
        res.render('index.ejs', { articles: response.data.articles })
    } catch (error) {
        res.render('index.ejs', { message: `Failed fetching the data: ${error}` })
        console.log(error)
    }
})

app.listen(port, () => {
    console.log(`Serer is running on localhost:${port}`)
})