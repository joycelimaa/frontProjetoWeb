import React, { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddBoxIcon from '@mui/icons-material/AddBox';
//import { Link } from "@mui/material";
import { Link } from "react-router-dom";


function Register(){
   
    let id=0;
    const idFunction = () =>{
        return id++
    }
    
    //edit, delet and view button hoover
    const [hoveredRow, setHoveredRow] = React.useState(null);

    const onMouseEnterRow = (event) => {
    const id = Number(event.currentTarget.getAttribute("data-id"));
    setHoveredRow(id);
    };

    const onMouseLeaveRow = (event) => {
    setHoveredRow(null);
    };

    //---------------------------------------------------
    const [users, setUsers] = useState([{
        id: idFunction(), name: "joyce lalalallalallallalalal",
    }])

    //Adding new row
    const createNewRow = () => {
        return  { id: users.length, name: ''}; 
    }

    const addNewRow = () => { 
        setUsers((users) => [...users, createNewRow()]);
    };


    const columns = [
        { headerName: "ID", field:"id", },
        { headerName:"Name", field: "name", flex:1, editable: true},
        
        { 
            headerName:"", 
            field:"actions",
            width:120,
            sortable:false,
            disableColumnMenu: true,
            renderCell: (params) =>{
                if (hoveredRow === params.id){
                    return (
                        
                        <Box
                          sx={{
                            // backgroundColor: "whitesmoke",
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                          }}
                        >
                          <IconButton onClick={() => console.log(params.id)}>
                            <VisibilityIcon />
                          </IconButton>
                          <IconButton onClick={() => console.log(params.id)}>
                            <Link to="/update"><EditIcon /></Link> 
                          </IconButton>
                          <IconButton onClick={() => console.log(params.id)}>
                            <DeleteIcon />
                          </IconButton>
                          
                          
                        </Box>
                      );
                }
                else return null;
            }
        }
    ]

    return(

        <Box m="20px">
            <h1>Pacientes</h1>
            <Box
                sx={{
                // backgroundColor: "whitesmoke",
                
                display:"flex",
                justifyContent: "end",
                alignItems: "center"
                }}
            >
                <IconButton onClick={addNewRow}>
                    <AddBoxIcon /> 
                </IconButton>
            </Box>
            
           <Box
            m="10px 0 10 0"
            height= "75vh"
           
            sx={{
            "& .MuiDataGrid-iconSeparator": {
              display: "none"
            },
            "& .MuiDataGrid-pinnedColumnHeaders": {
              boxShadow: "none",
              backgroundColor: "transparent"
            },
            "& .MuiDataGrid-pinnedColumns": {
              boxShadow: "none",
              // backgroundColor: "transparent",
              "& .MuiDataGrid-cell": {
                padding: 0
              }
            },
            "& .MuiDataGrid-row": {
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "whitesmoke"
              },
              "&:first-child": {
                borderTop: "1px solid rgba(224, 224, 224, 1)"
              }
            },
            "& .MuiDataGrid-cell:focus": {
              outline: "none"
            },
            "& .MuiDataGrid-cell:focus-within": {
              outline: "none"
            }
            }}
           >
           
            <DataGrid
            rows = {users}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
            initialState={{ pinnedColumns: { right: ["actions"] } }}
            componentsProps={{
                row: {
                    onMouseEnter: onMouseEnterRow,
                    onMouseLeave: onMouseLeaveRow
                }
            }}
            onRowAdd={addNewRow}
            />
            </Box>

        </Box>
    )
}

export default Register;








