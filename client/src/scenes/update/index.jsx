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
import AllExams from "../../components/AllExams";
import UseExamForm from "../../components/UseExamForm";
import { addExams } from "../../services/localstorage";


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
        {
            id: nanoid(),
            text:"My second note",
            date: "11/08/2022",
        },
        {
            id: nanoid(),
            text:"My third note",
            date: "12/08/2022",
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

    //Exam part--------------------------------------
    //Exam Popup
    const [open, openChange] = useState(false)
    const functionOpenPopup = () => {
        openChange(true)
    }
    const functionClosePopup = () => {
        openChange(false)
    }

    const {exam, onValueChange, resetExam} = UseExamForm({
        
        name: '',
        date: '',
    })

    const handleSubmit = (e) =>{
        e.preventDefault()
        addExams(exam)
        //console.log(exam)
        resetExam()
        //setExam([...exam, { id:1, name: exam.name, date: exam.date }])
    }
    
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
                        Exames
                        
                        </Typography>
                        <IconButton onClick={functionOpenPopup}>
                        <AddBoxIcon />
                        </IconButton> 
                        
                        {/* Exam Popup */}
                        <Dialog open={open}  onClose={functionClosePopup} fullWidth>
                        <FormGroup >
                            <Typography m="20px"ml="28px" mb="0px" variant="h3">Adicionar Exame</Typography>
                            <FormControl sx={{m:"20px 20px 10px", p:"10px"}}>
                                <InputLabel ><Typography variant="h5">Exame</Typography></InputLabel>
                                <Input 
                                    onChange={onValueChange} 
                                    name="name" 
                                    value={exam.name}
                                />
                            </FormControl>
                            <FormControl sx={{m:"10px  20px 10px", p:"10px"}}>
                                <InputLabel><Typography variant="h5">Data</Typography></InputLabel>
                                <Input  
                                    onChange={onValueChange} 
                                    name="date" 
                                    value={exam.date} 
                                />
                            </FormControl>
                            <Box
                                display="flex"
                                justifyContent="end"
                                alignItems="center"
                                mr="20px"
                                mb="10px"
                            >
                                <Button  onClick={handleSubmit} variant="contained" sx={{m:"0px", p:"10px"}}><Typography>salvar</Typography></Button>
                                <Button variant="contained" sx={{m:"10px", p:"10px"}} onClick={functionClosePopup}><Typography>fechar</Typography></Button>
                            </Box>
                            
                        </FormGroup>
                        </Dialog> 
                    </Box>
                    <Box
                    mt="20px"
                    p="0 20px"
                    display="flex "
                    justifyContent="space-between"
                    alignItems="center"
                    >
                        <AllExams exam={exam} ></AllExams>
                    </Box>
                </Box>

                {/*prescription section*/}
                <Box
                mt="10px"
                gridColumn="span 6"
                gridRow="span 2"
                backgroundColor={colors.primary[400]}
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
                        Prescrição
                        </Typography>
                        <IconButton >
                            <AddBoxIcon /> 
                        </IconButton> 
                    </Box>
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

