
import { 
    Box, useTheme, Typography, IconButton, Button,
    Dialog, FormControl, FormGroup, Input, InputLabel 
} from "@mui/material";
import { PrescriptionContext } from "../../contexts/PrescriptionContext";
import { useContext, useState } from "react";



const EditFormPrescription =({thePrescription}) =>{

    const {updatePrescription} = useContext(PrescriptionContext)
    //como mater as informações no form para que sejam editadas
    const id = thePrescription.id

    const[name, setName] = useState(thePrescription.name);
    const[quantity, setQuantity] = useState(thePrescription.quantity);
    const[time, setTime] = useState(thePrescription.time);
    const[hour, setHour] = useState(thePrescription.hour);

    const updatedPrescription = {id, name, quantity, time, hour}

    const handleSubmit = (e) =>{
        e.preventDefault();
        updatePrescription(id, updatedPrescription)
    }

    return(


       <><Box>
            <FormGroup>
                <Typography m="20px" ml="28px" mb="0px" variant="h3"> Editar Prescrição</Typography>
                <FormControl sx={{ m: "20px 20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Nome</Typography></InputLabel>
                    <Input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                </FormControl>
                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Quantidade</Typography></InputLabel>
                    <Input
                        type="text"
                        name="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        />
                </FormControl>
                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Tempo</Typography></InputLabel>
                    <Input
                        type="text"
                        name="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        />
                </FormControl>
                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Hora</Typography></InputLabel>
                    <Input
                        type="text"
                        name="hour"
                        value={hour}
                        onChange={(e) => setHour(e.target.value)}
                        />
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
                <Button onClick={handleSubmit} variant="contained" sx={{ m: "0px", p: "10px" }}><Typography>salvar</Typography></Button>
        </Box></>
    )
}

export default EditFormPrescription;











