import { defineConfig } from "drizzle-kit"
import * as dotenv from "dotenv";
dotenv.config({
  path: '.env.local',
});

export default defineConfig({
  dialect: "postgresql",
  out: "./drizzle",
  schema: "./src/lib/db/schema.ts",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  }
})


// drizzle-kit generate
// drizzle-kit push
