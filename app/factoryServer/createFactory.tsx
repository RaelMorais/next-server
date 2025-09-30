'use server';

import { db } from '../../src/index';
import { EngineFactory } from '../../src/db/schema'


export async function createFactory(formData: FormData) {
  const name_factory = formData.get('name_factory')?.toString() || '';
  
  if (!name_factory) {
    throw new Error('All Fields is Required');
  }

  await db.insert(EngineFactory).values({
     name_factory, 
     
    });
}
