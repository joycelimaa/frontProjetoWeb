import { Box, Button } from "@mui/material"
import { useState } from "react";


const AddNote = ({handleAddNote}) =>{

    const [noteText, setNoteText] = useState('')


    const characterLimit = 500

    const handleChange = (event) =>{
        if(characterLimit-event.target.value.length>=0){ //checks if the user is typing more than the limit defined
            setNoteText(event.target.value)
        }  
    }

    const handleSaveNote = () =>{
        if(noteText.trim().length>0){ //verifies if after removing the empty space from the begginer and end of a string there is still some text
            handleAddNote(noteText)
            setNoteText('') //after a note is added the font is reset
        }
        
    }

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
        >
            <textarea className="textareaNotes"
                rows="8" 
                cols="10" 
                placeholder="Nova nota..."
                onChange={handleChange}
                value={noteText}
            >
            </textarea>
            <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt="6px"
            >
                <small>{characterLimit - noteText.length} sobrando</small>
                <Button sx={{borderRadius:"40px", p:"3px"}}  variant="contained" onClick={handleSaveNote}>Save</Button>
            </Box>
        </Box>
    )
}


export default AddNote;






