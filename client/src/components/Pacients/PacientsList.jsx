import Pacient from "./Pacient";
import { Box, IconButton, Typography, useTheme, Dialog, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from "@mui/icons-material/Delete";
import { tokens } from "../../theme";
import { useContext, useState } from "react";
import { PacientContext } from "../../contexts/PacientsContext";
import { useEffect } from "react";
import AddFormPacients from "./AddFormPacients";
const PacientsList = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const{pacients} = useContext(PacientContext)
    
    const [show, setShow] = useState(true)
    const handleShowPacient = () => setShow(true)
    const handleClosePacient = () => setShow(false)  
    const acao = true
    useEffect(() =>{
        handleClosePacient()
    }, [pacients]) 

    return(
        
        
        <><Box m="20">

            {/*Crud table */}
            <Box
                sx={{
                    // backgroundColor: "whitesmoke",
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center"
                }}
            >
                <IconButton onClick={handleShowPacient}>
                    <AddBoxIcon />
                </IconButton>
            </Box>

            <Box
                bgcolor="grey"
                borderRadius="10px"
                p="10px"
                m="20px"
                maxHeight="520px"
                maxWidth="auto"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                whiteSpace="normal"
                overflow="auto"
                textAlign="center"
            >

                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th >Rua</th>
                            <th >Número</th>
                            <th >Cidade</th>
                            <th>Contato</th>
                            <th>Idade</th>
                            <th>Gênero</th>
                            <th>Altura</th>
                            <th>Peso</th>
                            <th>Contato de Emergência</th>
                            <th>Lesionado</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pacients.map(pacient => (
                            <tr key={pacient.id}>
                                <Pacient pacient={pacient} acao={acao} />
                            </tr>

                        ))}
                    </tbody>
                </table>
            </Box>
            </Box>
            <Dialog open={show} onClose={handleClosePacient} fullWidth>
                <AddFormPacients/>
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="end"
                    alignItems="center"
                    mr="20px"
                    mb="10px"
                >
                    <Button onClick={handleClosePacient} variant="contained" sx={{ m: "10px", p: "10px" }}><Typography>fechar</Typography></Button>
                </Box>

            </Dialog></>
        
    )
}

export default PacientsList;