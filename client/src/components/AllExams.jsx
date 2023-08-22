import { Box,  IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";


const AllExams = ({exam}) => {

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
            <tr> 
                <th>nome exame</th>
                <th>data exame</th>
                <Box
                display="flex"
                >
                    <IconButton><DeleteIcon/></IconButton>
                    <IconButton><EditIcon/></IconButton>
                </Box>
            </tr>
            </tbody>
            
        </table> 
        
       
            
            
       
    </Box>
    )
}

export default AllExams;