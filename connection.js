// 1. Import menggunakan require
require("dotenv/config");
const { PrismaMariaDb } = require("@prisma/adapter-mariadb");
const { PrismaClient } = require("../generated/prisma/client");

// 2. Inisialisasi adapter dengan variabel lingkungan
const adapter = new PrismaMariaDb({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DATABASE,
  connectionLimit: 5,
});

// 3. Inisialisasi Prisma Client dengan adapter
const prisma = new PrismaClient({ adapter });

// 4. Export menggunakan module.exports
module.exports = { prisma };