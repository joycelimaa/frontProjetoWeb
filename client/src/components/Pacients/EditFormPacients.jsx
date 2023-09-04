
import { 
    Box, useTheme, Typography, IconButton, Button,
    Dialog, FormControl, FormGroup, Input, InputLabel 
} from "@mui/material";
import { useContext, useState } from "react";
import { PacientContext } from "../../contexts/PacientsContext";



const EditFormPacient =({thePacient}) =>{

    const {updatePacient} = useContext(PacientContext)
    //como mater as informações no form para que sejam editadas
    const id = thePacient.id

    const[name, setName] = useState(thePacient.name);
    const[email, setEmail] = useState(thePacient.email);
    const[street, setStreet] = useState(thePacient.street);
    const[number, setNumber] = useState(thePacient.number);
    const[city, setCity] = useState(thePacient.city);
    const[age, setAge] = useState(thePacient.age);
    const[genre, setGenre] = useState(thePacient.genre)
    const[height, setHeight] = useState(thePacient.height)
    const[weight, setWeight] = useState(thePacient.weight)
    const[contact_emergency, setContactEmergency] = useState(thePacient.contact_emergency)
    const[contact_personal, setContactPersonal] = useState(thePacient.contact_personal)
    const[injured, setInjured] = useState(thePacient.injured)

    const updatedPacient = {id,name, email, street, number, city, age, genre, height, weight, contact_emergency, contact_personal, injured}

    const handleSubmit = (e) =>{
        e.preventDefault();
        updatePacient(id, updatedPacient)
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
                    <InputLabel><Typography variant="h5">Email</Typography></InputLabel>
                    <Input
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                </FormControl>
                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Rua</Typography></InputLabel>
                    <Input
                        type="text"
                        name="street"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                        />
                </FormControl>
                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Número</Typography></InputLabel>
                    <Input
                        type="text"
                        name="number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        />
                </FormControl>
                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Cidade</Typography></InputLabel>
                    <Input
                        type="text"
                        name="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        />
                </FormControl>
                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Idade</Typography></InputLabel>
                    <Input
                        type="text"
                        name="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        />
                </FormControl>
                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Gênero</Typography></InputLabel>
                    <Input
                        type="text"
                        name="genre"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        />
                </FormControl>
                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Altura</Typography></InputLabel>
                    <Input
                        type="text"
                        name="height"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        />
                </FormControl>
                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Peso</Typography></InputLabel>
                    <Input
                        type="text"
                        name="weight"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        />
                </FormControl>
                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Contato de Emergência</Typography></InputLabel>
                    <Input
                        type="text"
                        name="contact_emergency"
                        value={contact_emergency}
                        onChange={(e) => setContactEmergency(e.target.value)}
                        />
                </FormControl>
                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Contato Pessoal</Typography></InputLabel>
                    <Input
                        type="text"
                        name="contact_personal"
                        value={contact_personal}
                        onChange={(e) => setContactPersonal(e.target.value)}
                        />
                </FormControl>
                <FormControl sx={{ m: "10px  20px 10px", p: "10px" }}>
                    <InputLabel><Typography variant="h5">Lesionado</Typography></InputLabel>
                    <Input
                        type="text"
                        name="injured"
                        value={injured}
                        onChange={(e) => setInjured(e.target.value)}
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

export default EditFormPacient;