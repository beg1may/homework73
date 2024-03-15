const express = require('express');
const app = express();
const vigenere = require('caesar-salad').Vigenere;
const port = 8000;

app.get ('/encode/:hello', (req, res) => {
    res.send(vigenere.Cipher('password').crypt(req.params.hello));
});

app.get ('/decode/:weddk', (req, res) => {
    res.send(vigenere.Decipher('password').crypt(req.params.weddk));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

