const express = require('express');

const path = require('path');

let viewsPath = path.join(__dirname, 'views');
console.log(viewsPath);

const app = express();
app.use(express.static('public'));


app.get("/", (req, res) => {
    res.sendFile(`${viewsPath}/home.html`);
});

app.get("/about", (req, res) => {
    res.sendFile(`${viewsPath}/about.html`)
});

app.get("/works", (req, res) => {
    res.sendFile(`${viewsPath}/works.html`)
});

app.listen(3000, ()=> {
    console.log("Server listening in http://localhost:3000");
});