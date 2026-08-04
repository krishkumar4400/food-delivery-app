import { integer, pgTable, uuid, varchar } from "drizzle-orm/pg-core";

const userTable = pgTable("users", {
  id: uuid().primaryKey().notNull().defaultRandom(),
  name: varchar({ length: 100 }).notNull(),
  email: varchar({ length: 100 }).notNull().unique(),
  age: integer().notNull(),
});
