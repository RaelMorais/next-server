'use server'; 

import { db } from '@/src/index'; 
import { EngineFactory } from '@/src/db/schema'; 
import { InferSelectModel } from 'drizzle-orm';

// 1. Defina o tipo de dado que será retornado
export type Factory = InferSelectModel<typeof EngineFactory>;

// 2. Função assíncrona para buscar todas as fabricantes
export async function getFactories(): Promise<Factory[]> {
    const factories = await db.select().from(EngineFactory);
    return factories;
}