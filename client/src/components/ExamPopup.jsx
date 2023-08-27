import { 
    Box, useTheme, Typography, IconButton, Button,
    Dialog, FormControl, FormGroup, Input, InputLabel 
    } from "@mui/material";

    import { useParams } from "react-router-dom";
    
const ExamPopup = ({open, functionClosePopup, id, exam, handleSubmit, onValueChange}) => {
    
    const { id: paramId } = useParams()
    const isEditing = id || paramId

    return(
    <Dialog open={open} onClose={functionClosePopup} fullWidth>
                <FormGroup>
                    <Typography m="20px" ml="28px" mb="0px" variant="h3"> {isEditing? "Editar" : "Adicionar"} Exame</Typography>
                    <FormControl sx={{ m: "20px 20px 10px", p: "10px" }}>
                        <InputLabel><Typography variant="h5">Exame</Typography></InputLabel>
                        <Input
                            onChange={onValueChange}
                            name="name"
                            value={exam?.name} />
                    </FormControl>
                    <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                        <InputLabel><Typography variant="h5">Data</Typography></InputLabel>
                        <Input
                            onChange={onValueChange}
                            name="date"
                            value={exam?.date} />
                    </FormControl>
                    <Box
                        display="flex"
                        justifyContent="end"
                        alignItems="center"
                        mr="20px"
                        mb="10px"
                    >
                        <Button onClick={handleSubmit} variant="contained" sx={{ m: "0px", p: "10px" }}><Typography>salvar</Typography></Button>
                        <Button variant="contained" sx={{ m: "10px", p: "10px" }} onClick={functionClosePopup}><Typography>fechar</Typography></Button>
                    </Box>

                </FormGroup>
            </Dialog>
    )

}

export default ExamPopup;







