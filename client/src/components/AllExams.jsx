import { Box, Typography } from "@mui/material";
import ExamItem from "./ExamItem";
import { useEffect, useState } from "react";
import { getListOfExams } from "../services/localstorage";


const AllExams = () => {

    const[exams, setExams] = useState([])
  
    useEffect(()=>{
        setExams(getListOfExams())
    }, [])
    //------------------------------------------------

    return(
       
        <Box 
        bgcolor="grey"
        borderRadius="10px"
        p="10px"
        maxHeight="170px"
        maxWidth="600px"
        display="flex"
        flexDirection="column"
        justifyContent="space-between" 
        whiteSpace="normal" 
        overflow="auto"
        >
         
        {
            
            exams?.length >0 ?(
            <table>
                <thead>
                    <th>Nome</th>
                    <th>Data</th>
                </thead>
                <tbody>
                    {exams.map(exam => <ExamItem  exam={exam} key={exam.id} />)}
                    
                </tbody>
            </table> 
            ):(
                <Typography>Não há exames </Typography>
            )
        } 
   
    </Box>
    )
}

export default AllExams;