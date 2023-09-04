import { useContext, useState } from "react"
import { PrescriptionContext } from "../../contexts/PrescriptionContext"
import Prescription from "./Prescription"
import { Box, Typography, useTheme, IconButton, Dialog, Button } from "@mui/material"
import AddFormPresciption from "./AddFormPresciption"
import { tokens } from "../../theme";
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useEffect } from "react"

const PrescriptionList = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const { prescriptions } = useContext(PrescriptionContext)
    const [show, setShow] = useState(false)
    const handleShowPrescipt = () => setShow(true)
    const handleClosePrescipt = () => setShow(false)

    useEffect(() => {
        handleClosePrescipt()
    }, [prescriptions])

    return (

        <>

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
                    <IconButton onClick={handleShowPrescipt} >
                        <AddBoxIcon />
                    </IconButton>
                </Box>
                <Box
                    bgcolor="grey"
                    borderRadius="10px"
                    p="10px"
                    m="20px"
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
                            <th>Quantidade</th>
                            <th>Tempo</th>
                            <th>Horário</th>
                            <th>Ações</th>
                        </thead>
                        <tbody>

                            {prescriptions.map((prescription) => (
                                <tr key={prescription.id}>
                                    <Prescription prescription={prescription} />
                                </tr>
                            ))}


                        </tbody>
                    </table>

                </Box>
            </Box>

            <Dialog open={show} onClose={handleClosePrescipt} fullWidth>
                <AddFormPresciption />
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="end"
                    alignItems="center"
                    mr="20px"
                    mb="10px"
                >

                    <Button onClick={handleClosePrescipt} variant="contained" sx={{ m: "10px", p: "10px" }}><Typography>fechar</Typography></Button>
                </Box>

            </Dialog>

        </>
    )
}

export default PrescriptionList;