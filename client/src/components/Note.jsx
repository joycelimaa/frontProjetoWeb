import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Typography } from '@mui/material';


const Note =({id, text, date, handleDeleteNote})=>{
    return (
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
        <span>{text}</span>
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb="2px"
            
        >
            <Typography >{date}</Typography>
            <DeleteIcon onClick={()=>handleDeleteNote(id)} className='delete-icon' size='1.3em' />
       </Box>
    </Box>
    )
}

export default Note;









