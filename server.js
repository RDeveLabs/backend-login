const express = require('express');
const cors = require('cors');
const multer = require('multer');
const { prisma } = require('./connection');
const { error } = require('node:console');
const { use } = require('react');
const app = express();

app.use(cors({
    origin: 'https://test.rdevelabs.com',
    methods: ['POST', 'GET'],
    allowedHeaders: ['Content-Type']
}))

const upload = multer();

app.get('/', (req, res) => {
    res.send("Haloo");
})

app.post('/data', upload.none(), async(req, res) => {
    const userName = req.body.username;
    const pass = req.body.password;
    try{
        const user = await prisma.user.create({
            data: {
                username: userName,
                password: pass
            }
        })
        
        res.send("berhasil menuliskan ke database" + user);
    }catch(e){
        res.send("ada error saat menulis ke database: " + e)
    }

    res.send("data diterima :" + userName + pass);
})

app.listen(3000, () => {
    console.log("Server aktif");
})
