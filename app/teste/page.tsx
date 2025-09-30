// 'use client'

async function handleFunctionTeste() {
    'use server'
    console.log("Teste")
}
export default function Teste(){
    return(
        <>
        <h1>Teste de Server Actions</h1>
        <button onClick={handleFunctionTeste}></button>
        </>
    )
}
