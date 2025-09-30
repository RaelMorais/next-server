import { integer, pgTable, varchar, date, text, pgEnum } from "drizzle-orm/pg-core";



export const engineType = pgEnum('type', ['v6 hybrid', 'v8', 'v10', 'v12']);

export const Teams = pgTable("Teams", {
team_id: integer().primaryKey().generatedAlwaysAsIdentity(),
name_team: varchar({ length: 255 }).notNull(), 
base_team: varchar({ length: 255}).notNull(), 
team_principal: varchar({ length: 255}).notNull(), 
});


export const EngineFactory = pgTable("EngineFactory", {
    id_engineFactory: integer().primaryKey().generatedAlwaysAsIdentity(),
    name_factory: varchar({ length: 255}).notNull(), 

})

export const Cars = pgTable("Cars", {
    car_id: integer().primaryKey().generatedAlwaysAsIdentity(),
    model_car: varchar({ length: 255}).notNull(), 
    engine: varchar({ length: 255}).notNull(), 
    factory_engine: integer("id_engineFactory")
    .notNull()
    .references(
        () => EngineFactory.id_engineFactory, { onDelete: "cascade"} 
    ), 
    type: engineType(), 

})

export const Pilots = pgTable("Pilots", {
  pilot_id: integer().primaryKey().generatedAlwaysAsIdentity(),
  full_name: varchar({ length: 255 }).notNull(),
  alias_name: varchar({ length: 255 }).notNull(), 
  country: varchar({ length: 255 }).notNull(), 
  teamId: integer("team_id")
  .notNull()
  .references(
    () => Teams.team_id, { onDelete: "cascade"} 
  ), 
  car_num: integer().notNull(), 
  birthday: integer().notNull(), 

});


export const Season = pgTable("Season", {
season_id: integer().primaryKey().generatedAlwaysAsIdentity(),
year: integer().notNull(), 
gran_prix_name: varchar({ length: 255 }), 
country: varchar({ length: 255 }), 
date_race: date(), 
}); 

export const Results = pgTable("Results", {
    resultId: integer().primaryKey().generatedAlwaysAsIdentity(),
    position: integer("position").notNull(), 
    points: integer("points").notNull(),   
    
   
    seasonId: integer("season_id")
        .notNull()
        .references(() => Season.season_id, { onDelete: "cascade" }), 
  
    pilotId: integer("pilot_id")
        .notNull()
        .references(() => Pilots.pilot_id, { onDelete: "cascade" }),
        
    
    teamId: integer("team_id")
        .notNull()
        .references(() => Teams.team_id, { onDelete: "cascade" }),

    
    isFastestLap: text("is_fastest_lap").default('f'), //t or f
});



