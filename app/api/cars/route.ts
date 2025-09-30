// exportando função que faz a lógica no servidor 
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Hello from server function!' });
}
