import { 
Box, useTheme, Typography, IconButton, Button,
Dialog, FormControl, FormGroup, Input, InputLabel 
} from "@mui/material";
import React from "react";
import { tokens } from "../../theme";
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useState, useEffect } from 'react';
import {nanoid} from 'nanoid';
import NotesList from "../../components/NotesList";
import { ExamForm } from "../../components/ExamForm";
import PrescriptionList from "../../components/Prescription/PrescriptionList";
import PrescriptionContextProvider from "../../contexts/PrescriptionContext";


function Update(){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
   //Notes part--------------------------------------
    const [notes, setNotes] = useState([
        {
            id: nanoid(),
            text:"My note",
            date: "10/08/2022",
        },
        
    ]);

    const addNote=(text)=>{
       const date = new Date()
       const newNote= {
        id:nanoid(),
        text: text,
        date: date.toLocaleDateString()
       }
       const newNotes=[...notes, newNote]
       setNotes(newNotes)
    }

    const deleteNote = (id) =>{
        const newNotes = notes.filter((note)=>note.id != id)
        setNotes(newNotes)  
    }

    useEffect(()=>{ 
        const savedNotes = JSON.parse(localStorage.getItem('react-notes-data'))
        if(savedNotes){
            setNotes(savedNotes)
        } 
    },[])

    //Saving the notes to local Storage
    useEffect(()=>{ 
        localStorage.setItem(
            'react-notes-data', 
            JSON.stringify(notes)
        )
    },[notes])

    return(

        <Box  m="20px" >
            <h3>Registrar Dados do Paciente</h3>
            
            <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="140px"
            gap="20px"
            >
            
                {/*exams section*/}
                <Box
                mt="10px"
                gridColumn="span 6"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                >
                    <ExamForm/>
                </Box>

                {/*prescription section*/}
                <Box
                mt="10px"
                gridColumn="span 6"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                >
                    
                    
                        <PrescriptionContextProvider>
                            <PrescriptionList/>
                        </PrescriptionContextProvider>
                        
                    
                </Box>

                {/*Notes section*/}
                <Box
                mt="10px"
                gridColumn="span 12"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
                sx={{
                    overflow:"auto",
                }}
                >
                    <Box
                    mt="20px"
                    p="0 20px"
                    display="flex "
                    justifyContent="space-between"
                    alignItems="center"
                    >
                        <Typography
                        variant="h4"
                        fontWeight="600"
                        color={colors.grey[100]}
                        >
                        Anotações
                        </Typography>
                       
                    </Box>

                    <Box> 
                        <NotesList notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote} />
                    </Box>
                </Box>
            
            </Box>
        </Box>
    )
}

export default Update;

