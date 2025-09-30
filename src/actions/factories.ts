'use server'; 

import { db } from '@/src/index'; 
import { EngineFactory } from '@/src/db/schema'; 
import { InferSelectModel } from 'drizzle-orm';

export type Factory = InferSelectModel<typeof EngineFactory>;

export async function getFactories(): Promise<Factory[]> {
    const factories = await db.select().from(EngineFactory);
    return factories;
}