import { Box, IconButton } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useContext, useEffect } from "react";
import { PrescriptionContext } from "../../contexts/PrescriptionContext";
import { useState } from "react";
import EditFormPrescription from "./EditFormPrescription";
import { 
     useTheme, Typography, Button,
    Dialog, FormControl, FormGroup, Input, InputLabel 
} from "@mui/material";


const Prescription = ({prescription}) =>{
    
    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)  

    const {deletePrescription} = useContext(PrescriptionContext)

    useEffect(() =>{
        handleClose()
    }, [prescription]) 


    return(
        <>
        <td>{prescription.name}</td>
        <td>{prescription.quantity}</td>
        <td>{prescription.time}</td>
        <td>{prescription.hour}</td>
        <tr><IconButton onClick={handleShow} ><EditIcon /></IconButton>
            <IconButton onClick={() => deletePrescription(prescription.id)} ><DeleteIcon /></IconButton></tr>
        
        <Dialog open={show} onClose={handleClose} fullWidth>
            <EditFormPrescription thePrescription={prescription} />
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

export default Prescription;