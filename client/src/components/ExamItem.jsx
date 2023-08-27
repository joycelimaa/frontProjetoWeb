import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { IconButton, Box, Snackbar, Modal, TextField, Button } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";


const ExamItem = ({ exam, onDelete }) => {
    const { id, name, date } = exam;
    const [showSnackbar, setShowSnackbar] = useState(false); // Estado para controlar a exibição do Snackbar
    const [showEditSnackbar, setShowEditSnackbar] = useState(false); // Novo estado para o Snackbar de edição


    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(name);
    const [editedDate, setEditedDate] = useState(date);

    // TODO: TESTAR QUANDO FOR DELETADO (Ainda nn completa por conta que nn consome a api)
    const handleDeleteNote = async () => {
        try {
            await axios.delete(`http://localhost:5000/exams/${id}`);
            setShowSnackbar(true);
        } catch (error) {
            console.log("Erro ao deletar exame: ", error);
        }
    }

    // ↓ Testado: o snackBar aparece, mas não remove o exame↓

    // const handleRemoveExam = async (examId) => {
    //     try {
    //         // Simular a exclusão do exame usando o ID, sem acionar o Axios
    //         console.log(`Exame com ID ${examId} removido`);
    //         setShowSnackbar(true);
    //         onDelete(examId);
    //     } catch (error) {
    //         console.log("Erro ao remover exame:", error);
    //     }
    // };

    const handleEditNote = () => {
        setIsEditing(true);
    };

    const handleSaveEdit = async () => {
        try {
            // Realizar a atualização no backend, enviando os dados editados para a API
            await axios.put(`http://localhost:5000/exams/${id}`, {
                name: editedName,
                date: editedDate
            });

            // Atualizar a interface ou realizar ações necessárias após a edição
            setIsEditing(false);
            setShowSnackbar(true);
        } catch (error) {
            console.log("Erro ao editar exame:", error);
        }
    }

    const handleCloseSnackbar = () => {
        setShowSnackbar(false);
        setShowEditSnackbar(false); // Fecha o Snackbar de edição
    };

    return (
        <tr>
            <th>{isEditing ? <TextField value={editedName} onChange={(e) => setEditedName(e.target.value)} /> : name}</th>
            <th>{isEditing ? <TextField value={editedDate} onChange={(e) => setEditedDate(e.target.value)} /> : date}</th>

            <Box
                display="flex"
            >
                <IconButton onClick={handleDeleteNote}><DeleteIcon /></IconButton>
                <IconButton onClick={handleEditNote}><EditIcon /></IconButton>
            </Box>

            <Modal open={isEditing} onClose={() => setIsEditing(false)}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 300,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <TextField
                        label="Nome"
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        label="Data"
                        value={editedDate}
                        onChange={(e) => setEditedDate(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <Button onClick={handleSaveEdit} variant="contained" color="primary">
                        Salvar
                    </Button>
                </Box>
            </Modal>

            {/* Snackbar para mostrar uma mensagem de sucesso */}
            <Snackbar open={showSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}>
                <MuiAlert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                    Exame excluído com sucesso!
                </MuiAlert>
            </Snackbar>

            {/* Snackbar para mostrar uma mensagem de sucesso após a edição */}
            <Snackbar open={showEditSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}>
                <MuiAlert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                    Exame editado com sucesso!
                </MuiAlert>
            </Snackbar>
        </tr>
    )
}

export default ExamItem;