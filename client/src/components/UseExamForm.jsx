import { useState } from "react"

const UseExamForm = () =>{
    
    const initialValues = [{
        id:1,
        name: '',
        date: '', 
    }]

    const [exam, setExam] = useState(initialValues)

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
