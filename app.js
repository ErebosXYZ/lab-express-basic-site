const express = require('express');

const path = require('path');

let viewsPath = path.join(__dirname, 'views');
console.log(viewsPath);

const app = express();

app.get("/", (req, res) => {
    res.sendFile(`${viewsPath}/home.html`);
});

app.listen(3000, ()=> {
    console.log("Server listening in http://localhost:3000");
});