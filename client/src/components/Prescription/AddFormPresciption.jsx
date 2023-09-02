
import { 
    Box, useTheme, Typography, IconButton, Button,
    Dialog, FormControl, FormGroup, Input, InputLabel 
} from "@mui/material";
import { PrescriptionContext } from "../../contexts/PrescriptionContext";
import { useContext, useState } from "react";



const AddFormPresciption =() =>{

    const {addPrescription} = useContext(PrescriptionContext)
    const [newPrescription, setNewPrescription] = useState({
        name:"", quantity:"", time:"", hour:""
    })

    const onInputChange = (e) =>{
        setNewPrescription({...newPrescription, [e.target.name]: e.target.value})
    }
    const {name, quantity, time, hour} = newPrescription

    const handleSubmitPres = (e) =>{
        e.preventDefault()
        addPrescription(name, quantity, time, hour)
    }


    return(


       <><Box>
            <FormGroup>
                <Typography m="20px" ml="28px" mb="0px" variant="h3"> Adicionar Prescrição</Typography>
                <FormControl sx={{ m: "20px 20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Nome</Typography></InputLabel>
                    <Input
                        type="text"
                        name="name"
                        onChange={(e) => onInputChange(e)}
                        value={name} />
                </FormControl>
                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Quantidade</Typography></InputLabel>
                    <Input
                        type="text"
                        name="quantity"
                        onChange={(e) => onInputChange(e)}
                        value={quantity} />
                </FormControl>
                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Tempo</Typography></InputLabel>
                    <Input
                        type="text"
                        name="time"
                        onChange={(e) => onInputChange(e)}
                        value={time} />
                </FormControl>
                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Hora</Typography></InputLabel>
                    <Input
                        type="text"
                        name="hour"
                        onChange={(e) => onInputChange(e)}
                        value={hour} />
                </FormControl>


            </FormGroup>
        </Box>
        
        <Box
            display="flex"
            justifyContent="end"
            flexDirection="row"
            alignItems="center"
            mr="30px"
            mb="0px"
        >
                <Button onClick={handleSubmitPres} variant="contained" sx={{ m: "0px", p: "10px" }}><Typography>salvar</Typography></Button>
        </Box></>
    )
}

export default AddFormPresciption;











