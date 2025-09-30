import { db } from '../../src/index';
import { Cars } from '../../src/db/schema';


export default async function CarsPage() {
  const cars = await db.select().from(Cars);

  return (
    <main>
      <h1>Cars List</h1>
      <ul>
        {cars.map((car) => (
          <li key={car.car_id}>
            {car.model_car} - {car.engine} - Factory #{car.factory_engine} - Type of Engine: {car.type}
          </li>
        ))}
      </ul>
    </main>
  );
}

