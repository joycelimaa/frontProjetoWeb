import { 
    Box, useTheme, Typography, IconButton, Button,
    Dialog, FormControl, FormGroup, Input, InputLabel 
} from "@mui/material";
import { tokens } from "../../theme";
import Calendar from "../../components/Calendar/Calendar";

function Home(){

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return(
        <Box  m="20px" >
            <Box><Calendar/></Box>
        </Box>
    )
} 

export default Home;