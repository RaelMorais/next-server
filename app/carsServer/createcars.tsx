'use server';

import { db } from '../../src/index';
import { Cars, engineType } from '../../src/db/schema'

const ENGINE_TYPES = ['v6 hybrid', 'v8', 'v10', 'v12'] as const;
type EngineType = (typeof ENGINE_TYPES)[number];


export async function createCar(formData: FormData) {
  const engine = formData.get('engine')?.toString() || '';
  const model_car = formData.get('engine')?.toString() || '';
  const factory_engine = Number(formData.get('factory_engine'));
  const type = formData.get('type')?.toString() as EngineType ;


  if (!engine || !model_car || !factory_engine || !type) {
    throw new Error('All Fields is Required');
  }

  await db.insert(Cars).values({
     engine, 
     model_car, 
     factory_engine, 
     type
    });
}
