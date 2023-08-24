import { Box } from "@mui/material";
import ExamItem from "./ExamItem";


const AllExams = () => {

  

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
         
        <table>
            <thead>
                <th>Nome</th>
                <th>Data</th>
            </thead>
            <tbody>
                <ExamItem/>
            </tbody>
            
        </table> 
        
    </Box>
    )
}

export default AllExams;