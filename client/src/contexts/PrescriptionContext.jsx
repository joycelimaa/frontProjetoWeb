import { createContext, useEffect } from "react";
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'

//the context is used to send the data to the prescriptionList file

export const PrescriptionContext = createContext();

const PrescriptionContextProvider = (props) =>{


    const [prescriptions, setPrescriptions] = useState([
        {
            id: uuidv4(), 
            name: 'nome do remédio', 
            quantity: '2 comprimidos',
            time: '1 semana',
            hour: '1 no almoço e 1 no jantar',
        },
        {
            id: uuidv4(), 
            name: 'nome do remédio 2', 
            quantity: '2 comprimidos',
            time: '2 semana',
            hour: '1 no almoço e 1 no jantar',
        }
    ])

    //sending the updated data to local storage
    useEffect(() => {
        setPrescriptions(JSON.parse(localStorage.getItem('prescriptions')))
    }, [])

    //sending the data to local storage
    useEffect(()=>{
        localStorage.setItem('prescriptions', JSON.stringify(prescriptions))
    })

    const addPrescription = (name, quantity, time, hour) =>{
        setPrescriptions([...prescriptions, {id:uuidv4(), name, quantity, time, hour}])
    }

    const deletePrescription = (id) =>{
        setPrescriptions(prescriptions.filter(prescription => prescription.id !== id))
    }

    const updatePrescription = (id, updatedPrescription) => {
        setPrescriptions(prescriptions.map((prescription) => prescription.id === id ? updatedPrescription : prescription))
    }

    return(
        <PrescriptionContext.Provider value={{prescriptions, addPrescription, deletePrescription, updatePrescription}}>
            {props.children}
        </PrescriptionContext.Provider>
    )
}

export default PrescriptionContextProvider;