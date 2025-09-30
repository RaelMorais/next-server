// Seu arquivo CarForm.tsx
'use client';

import { createCar } from '../carsServer/createcars'; 
import { Factory } from '../../src/actions/factories';

interface CarFormProps {
    factories: Factory[];
}

export default function CarForm({ factories }: CarFormProps) {
    
    return (
        <form action={createCar} className="space-y-4 max-w-md p-4 border rounded">
            
            <input
                name="model_car"
                placeholder="Modelo do carro"
                required
                className="w-full border p-2 rounded"
            />

            <input
                name="engine"
                placeholder="Motor (ex: 2.0 Turbo)"
                required
                className="w-full border p-2 rounded"
            />

     
            <select 
                name="factory_engine" 
                required 
                className="w-full border p-2 rounded"
            >
                <option value="">Selecione a Fábrica</option>
                {factories.map((factory) => (
                    <option 
                        key={factory.id_engineFactory} 
                      
                        value={factory.id_engineFactory}
                    >
                        {factory.name_factory}
                    </option>
                ))}
            </select>
            
            <select name="type" required className="w-full border p-2 rounded">
                <option value="">Selecione o tipo de motor</option>
                <option value="v6 hybrid">V6 Hybrid</option>
                <option value="v8">V8</option>
                <option value="v10">V10</option>
                <option value="v12">V12</option>
            </select>

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Adicionar Carro
            </button>
        </form>
    );
}