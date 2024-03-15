const express = require('express');
const app = express();
const vigenere = require('caesar-salad').Vigenere;
const port = 8000;

app.get ('/encode/:hello', (req, res) => {
    res.send(vigenere.Cipher('password').crypt(req.params.hello));
});

app.get ('/decode/:uaflwgklr', (req, res) => {
    res.send(vigenere.Cipher('password').crypt(req.params.uaflwqklr));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

