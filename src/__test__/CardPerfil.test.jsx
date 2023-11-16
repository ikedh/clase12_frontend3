import CardPerfil,{titleCase} from "../components/CardPerfil";
import { render, screen } from "@testing-library/react";

describe("Funciones dentro del componente",()=>{
    describe("titleCase",()=>{
        test("Debe retornar un string",()=>{
            const resultado = titleCase("valor")
            expect(typeof resultado).toBe("string")
        })
        test("String Modificado",()=>{
            expect(titleCase("hola como va")).toBe("Hola Como Va")
        })
        test("Sin texto",()=>{
            expect(titleCase("")).toBe("")
        })
    })

    describe("Evaluando Componente",()=>{
        test("Verificando render text",()=>{
            render(<CardPerfil/>)
            const text = screen.getByText(/soy/i)
            expect(text).toBeInTheDocument()
        })

    })
})
