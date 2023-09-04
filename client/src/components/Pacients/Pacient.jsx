import { Box, IconButton, Dialog, Button, Typography, Link } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from "@mui/icons-material/Delete";
import { PacientContext } from "../../contexts/PacientsContext";
import { useState, useContext } from "react";
import { useEffect } from "react";
import EditFormPacient from "./EditFormPacients";


const Pacient = ({pacient, acao}) =>{

    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)  

    const {deletePacient} = useContext(PacientContext)

    useEffect(() =>{
        handleClose()
    }, [pacient]) 

    return(
        
        <>
        <td>{pacient.name}</td>
        <td>{pacient.email}</td>
        <td>{pacient.street}</td>
        <td>{pacient.number}</td>
        <td>{pacient.city}</td>
        <td>{pacient.contact_personal}</td>
        <td>{pacient.age}</td>
        <td>{pacient.genre}</td>
        <td>{pacient.height}</td>
        <td>{pacient.weight}</td>
        <td>{pacient.contact_emergency}</td>
        <td>{pacient.injured ? "Sim": "Não"}</td>
        {acao ? <td><IconButton onClick={handleShow}  ><EditIcon /></IconButton>
                <IconButton onClick={() => deletePacient(pacient.id)}  ><DeleteIcon /></IconButton></td> 
            : 
                <td><IconButton  ><Link to="/update"> <VisibilityIcon /></Link></IconButton></td>
        }
        

        <Dialog open={show} onClose={handleClose} fullWidth>
            <EditFormPacient thePacient={pacient} />
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="end"
                alignItems="center"
                mr="20px"
                mb="10px"
            >
                
                <Button onClick={handleClose} variant="contained" sx={{ m: "10px", p: "10px" }}><Typography>fechar</Typography></Button>
            </Box>
        </Dialog> 
        </>

    )
}

export default Pacient;