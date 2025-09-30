import { db } from '../../src/index';
import { EngineFactory } from '../../src/db/schema';

export default async function FacEngine() {
  const engines = await db.select().from(EngineFactory);

  return (
    <main>
      <h1>List</h1>
      <ul>
        {engines.map((engine) => (
          <li key={engine.id_engineFactory}>
            <ul>ID: {engine.id_engineFactory} </ul>
            <ul>NAME: {engine.name_factory} </ul>
            
           
          </li>
        ))}
      </ul>
    </main>
  );
}
