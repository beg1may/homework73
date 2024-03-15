const express = require('express');
const app = express();
const port = 8000;

app.get ('/', (req, res) => {
    res.send('<h1>Hello!</h1>');
});

app.get ('/:name', (req, res) => {
    res.send(`<h1>Hello, ${req.params.name}</h1>`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
})