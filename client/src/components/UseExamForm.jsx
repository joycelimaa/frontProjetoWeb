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

    return{
        exam,
        onValueChange,
        resetExam
    }


}

export default UseExamForm;
