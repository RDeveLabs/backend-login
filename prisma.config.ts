// 1. Install & import dotenv dan dotenv-expand secara terpisah
import dotenv from "dotenv";
import { expand } from "dotenv-expand";
import { defineConfig, env } from "prisma/config";

// 2. Load file .env kemudian lakukan ekspansi variabel
const myEnv = dotenv.config();
expand(myEnv);

// 3. Konfigurasi Prisma berjalan seperti biasa
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"), // Sekarang DATABASE_URL sudah terisi dengan variabel yang rapi!
  },
});