'use server';

import { db } from '../../src/index';
import { Teams } from '../../src/db/schema'


export async function createTeams(formData: FormData) {
  const name_team = formData.get('name_team')?.toString() || '';
  const base_team = formData.get('name_team')?.toString() || '';
  const team_principal = formData.get('name_team')?.toString() || '';
  
  if (!name_team || !base_team || !team_principal) {
    throw new Error('All Fields is Required');
  }

  await db.insert(Teams).values({
      name_team, 
      base_team, 
      team_principal
    });
}
