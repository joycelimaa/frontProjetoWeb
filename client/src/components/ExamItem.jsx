import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton, Box } from "@mui/material";


const ExamItem = ({exam}) => {
    return(
    <tr> 
               
        <th>nome</th>
        <th>data</th>
        
        <Box
        display="flex"
        >
            <IconButton><DeleteIcon/></IconButton>
            <IconButton><EditIcon/></IconButton>
        </Box>
    </tr>   
    )
}

export default ExamItem;