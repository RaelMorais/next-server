// import { db } from '../../src/index';
// import { Cars } from '../../src/db/schema';
// import { getFactories, Factory } from '../../src/actions/factories'; // Importa a função

// export default async function CarsPage() {
//   const cars = await db.select().from(Cars);

//   return (
//     <main>
//       <h1>Cars List</h1>
//       <ul>
//         {cars.map((car) => (
//           <li key={car.car_id}>
//             {car.model_car} - {car.engine} - Factory #{car.factory_engine} - Type of Engine: {car.type}
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// }


// app/carsServer/page.jsx (ou page.tsx)

import CarForm from './CarForm'; 
import { getFactories, Factory } from '../../src/actions/factories';

export default async function CarPage() {
    

    const factories = await getFactories(); 

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Adicionar Novo Carro</h1>

            <CarForm factories={factories} />
        </div>
    );
}