import express from "express";
import axios from "axios";

const port = 3000;
const app = express();

app.use(express.static('public'));


app.get('/', async (req, res) => {
    res.render('index.ejs')
})

app.get('/blog', (req, res) => {
    res.render('pages/blog.ejs')
})

app.get('/singlepost', (req, res) => {
    res.render('pages/singlePost.ejs')
})

app.get('/pages', (req, res) => {
    res.render('pages/pages.ejs')
})

app.get('/contacts', (req, res) => {
    res.render('pages/contacts.ejs')
})

app.listen(port, () => {
    console.log(`Server is running on localhost:${port}`)
})