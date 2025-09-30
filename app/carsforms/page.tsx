'use client';

import { createCar } from '../carsServer/createcars'; 
import { Factory } from '../../src/actions/factories';

// interface CarFormProps {
//     factories: Factory[];
// }

export default function CarForm() {
    
    return (
        <form action={createCar} className="space-y-4 max-w-md p-4 border rounded">
            
            <input
                name="model_car"
                placeholder="Car Name"
                required
                className="w-full border p-2 rounded"
            />

            <input
                name="engine"
                placeholder="Engine"
                required
                className="w-full border p-2 rounded"
            />

         <input
                name="factory_engine"
                type='number'
                placeholder="Engine Factory ID"
                required
                className="w-full border p-2 rounded"
            />

            {/* <select 
                name="" 
                required 
                className="w-full border p-2 rounded"
            >
                <option value="">Show a Factory</option>
                {factories.map((factory) => (
                    <option 
                        // key={factory.id_engineFactory} 
                      
                        value={factory.id_engineFactory}
                    >
                        {factory.name_factory}
                    </option>
                ))}
            </select> */}
            
            <select name="type" required className="w-full border p-2 rounded">
                <option value="">Type o Engine</option>
                <option value="v6 hybrid">V6 Hybrid</option>
                <option value="v8">V8</option>
                <option value="v10">V10</option>
                <option value="v12">V12</option>
            </select>

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Add Car
            </button>
        </form>
    );
}