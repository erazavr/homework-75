const express = require('express');
const cors = require('cors');
const Vigenere = require('caesar-salad').Vigenere;
const app = express();
const port = 8000;

let encodeText;
let decodeText;
app.use(cors());
app.use(express.json());

app.post('/encode', (req, res) => {
    encodeText = Vigenere.Cipher(req.body.password).crypt(req.body.message);
    const newEncode = {encoded: encodeText};
    res.send(newEncode)
});
app.post('/decode', (req, res) => {
    decodeText = Vigenere.Decipher(req.body.password).crypt(req.body.message);
    const newDecode = {decoded: decodeText};
    res.send(newDecode)
});

app.listen(port, () => {
    console.log('We are here ' + port)
});