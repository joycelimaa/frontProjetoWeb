import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from "react";

export const PacientContext = createContext()

const PacientContextProvider = (props) =>{7

    const [pacients, setPacients] = useState([
        {
            id: uuidv4(),
            name: 'Nome do paciente',
            age: 22, 
            genre: 'Masculino',
            height: 1.77, 
            weight: 78, 
            email: 'paciente@gmail.com',
            adress: { 
                street: 'rua alguma coisa', 
                number: '122', 
                city: 'Campina Grande' 
            }, 
            contact_emergency: '83999018176', 
            contact_personal: '83999018179', 
            injured: true }
    ])

    //sending the updated data to local storage
    useEffect(() => {
        setPacients(JSON.parse(localStorage.getItem('pacients')))
    }, [])

    //sending the data to local storage
    useEffect(()=>{
        localStorage.setItem('pacients', JSON.stringify(pacients))
    })

    const addPacient = (name, email, street, number, city, age, genre, height, weight, contact_emergency, contact_personal, injured) => {
        setPacients([ ...pacients, {id: uuidv4(), name, email, street, number, city, age, genre, height, weight, contact_emergency, contact_personal, injured}])
    }

    const updatePacient = (id, updatedPacient) =>{
        setPacients(pacients.map((pacient) => pacient.id === id ? updatedPacient : pacient ))
    }

    const deletePacient = (id) =>{
        setPacients(pacients.filter(pacient => pacient.id !== id))
    }

    return(
        <PacientContext.Provider value={{pacients, addPacient, deletePacient, updatePacient}}>
            {props.children}
        </PacientContext.Provider>
    )
}

export default PacientContextProvider
