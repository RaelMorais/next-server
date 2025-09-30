import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const CarsTable = pgTable("cars", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  year: integer().notNull(),
  engine: varchar({ length: 255 }).notNull(), 
  brand: varchar({ length: 255}).notNull(), 
});
