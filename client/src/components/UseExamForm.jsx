import { useState } from "react"

const UseExamForm = (initialState = {}) =>{
    
    const [exam, setExam] = useState(initialState)

    const onValueChange = ({target}) =>{ 
        setExam({
            ...exam,
            [target.name]: target.value
        })
    }

    const resetExam = () =>{
        setExam(initialState)
    }

    const resetingExam = (newValues) =>{
        setInputValues(newValues) 
    }

    return{
        exam,
        onValueChange,
        resetExam,
        resetingExam
    }


}

export default UseExamForm;
