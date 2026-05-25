const express = require('express');
const cors = require('cors');
const multer = require('multer');
const app = express();
test
app.use(cors({
    origin: 'https://test.rdevelabs.com',
    methods: ['POST', 'GET'],
    allowedHeaders: ['Content-Type']
}))

const upload = multer();

app.get('/', (req, res) => {
    res.send("Haloo");
})

app.post('/data', upload.none(), (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    res.send("data diterima :" + username + password);
})

app.listen(3000, () => {
    console.log("Server aktif");
})
