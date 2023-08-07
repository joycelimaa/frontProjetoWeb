import { Box, useTheme, Typography, IconButton } from "@mui/material";
import React from "react";
import { tokens } from "../../theme";
import AddBoxIcon from '@mui/icons-material/AddBox';

function Update(){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
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
                        <IconButton >
                            <AddBoxIcon /> 
                        </IconButton> 
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
                        <IconButton >
                            <AddBoxIcon /> 
                        </IconButton> 
                    </Box>
                </Box>
            
            </Box>
        </Box>
    )
}

export default Update;

