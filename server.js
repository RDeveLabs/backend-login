import express from "express";
import cors from "cors";
import multer from "multer";
import { prisma } from "./connection.js";
import { json } from "node:stream/consumers";
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

app.post('/daftar', upload.none(), async(req, res) => {
    const userName = req.body.username;
    const pass = req.body.password;
    try{
        const daftar = await prisma.user.create({
            data: {
                username: userName,
                password: pass
            }
        })

        res.send("berhasil menuliskan ke database");
    }catch(e){
        res.send("ada error saat menulis ke database: " + e)
    }
})

app.post('/login', upload.none(), async (req, res) => {
    const userName = req.body.username;
    const pass = req.body.password;
    try {
        const login = await prisma.user.findFirst({
            where: { username: userName, password: pass },
        });
        if(!login) res.send("Data tidak ada")
        res.send("Data berhasil ditemukan")
    } catch (e) {
        res.send("Ada kesalahan: " + e)
    }
})

app.listen(3000, () => {
    console.log("Server aktif");
})
