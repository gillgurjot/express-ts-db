import { drizzle } from "drizzle-orm/node-postgres";

if (!process.env.DATABASE_URL) {
  throw new Error("DB url missing");
}

const db = drizzle(process.env.DATABASE_URL, { casing: "snake_case" });

export default db;
