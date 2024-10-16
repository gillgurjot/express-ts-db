import { pgTable, varchar, text } from "drizzle-orm/pg-core";
import crypto from "crypto";

const users = pgTable("users", {
  id: varchar("id", { length: 36 })
    .primaryKey()
    .$defaultFn(() => crypto.randomBytes(36).toString("hex")),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password"),
});

export default users;
