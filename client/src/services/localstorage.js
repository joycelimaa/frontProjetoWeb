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


export const getExamById = (id) =>{
    const exams = getListOfExams()
    const exam = exams.find((exam)=> exam.id === id)
    return exam
}

export const editEmployee = (id, newExam) =>{
    let exams = getListOfExams()
    exams = exams.filter(exam => exam.id !== id)
    exams.push(newExam)
    localStorage["@exams"] = JSON.stringify(exams)
}
