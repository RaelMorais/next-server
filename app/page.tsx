'use client';

import { createCar } from '../app/carsServer/createcars'; // ajuste se o caminho for diferente

export default function CarForm() {
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

      <input
        name="factory_engine"
        type="number"
        placeholder="ID da Fábrica de Motor"
        required
        className="w-full border p-2 rounded"
      />

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
