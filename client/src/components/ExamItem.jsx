import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";


const ExamItem = ({exam}) => {
    const {id, name, date} = exam
    const navigate = useNavigate()
    return(
    <tr> 
               
        <th>{name}</th>
        <th>{date}</th>
        
        <Box
        display="flex"
        >
            <IconButton ><DeleteIcon/></IconButton>
            <IconButton onClick={() => navigate(`/edit-exam/${id}`)}><EditIcon/></IconButton>
        </Box>
    </tr>   
    )
}

export default ExamItem;