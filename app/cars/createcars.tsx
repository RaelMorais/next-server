'use server';

import { db } from '../../src/index';
import { } from '../../src/db/schema'

export async function createCar(formData: FormData) {
  const name = formData.get('name')?.toString() || '';
  const year = Number(formData.get('year'));
  const engine = formData.get('engine')?.toString() || '';
  const brand = formData.get('brand')?.toString() || '';

  if (!name || !year || !engine || !brand) {
    throw new Error('Todos os campos são obrigatórios');
  }

  await db.insert(CarsTable).values({ name, year, engine, brand });
}
