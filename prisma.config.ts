// 1. Install & import dotenv dan dotenv-expand secara terpisah
const dotenv = require('dotenv');
const { expand } = require('dotenv-expand');
const { defineConfig, env } = require('prisma/config');

// 2. Load file .env kemudian lakukan ekspansi variabel
const myEnv = dotenv.config();
expand(myEnv);

// 3. Konfigurasi Prisma berjalan seperti biasa
module.exports = defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"), // Sekarang DATABASE_URL sudah terisi dengan variabel yang rapi!
  },
});