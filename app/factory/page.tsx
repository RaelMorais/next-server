'use client';

import { createFactory } from "../factoryServer/createFactory";
import { useFormStatus } from 'react-dom';

async function handleServerTeste() {
  console.log("Teste de server actions!S")
  
}
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      {pending ? 'Enviando...' : 'Add Factory'}
    </button>
  );
}

export default function CarForm() {
  return (
    <form action={createFactory} className="space-y-4 max-w-md p-4 border rounded">
      <input
        name="name_factory"
        placeholder="nome da fabricante"
        required
        className="w-full border p-2 rounded"
      />

      <SubmitButton/>
      <button onClick={handleServerTeste}>Oi</button>
    </form>

  );
}
