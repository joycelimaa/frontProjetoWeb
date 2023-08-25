import {nanoid} from 'nanoid';
//Saving the exam to localStorage
export const getListOfExams = () =>{
    if(!localStorage["@exams"]){
        localStorage["@exams"] = JSON.stringify([])
    }

    let exams = JSON.parse(localStorage["@exams"])
    return exams
}

export const addExams = (exam) =>{
    const exams = getListOfExams();
    exams.push({ id:nanoid(), ...exam})
    localStorage["@exams"] = JSON.stringify(exams)
}

