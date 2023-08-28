import {
    Box, useTheme, Typography, IconButton, Button,
    Dialog, FormControl, FormGroup, Input, InputLabel
} from "@mui/material";
import { useEffect, useState } from "react"
import { addExams } from "../services/localstorage"
import UseExamForm from "./UseExamForm"
import { tokens } from "../theme";
import AddBoxIcon from '@mui/icons-material/AddBox';
import AllExams from "./AllExams"
import { useParams } from "react-router-dom";
import { getExamById } from "../services/localstorage";
import ExamPopup from "./ExamPopup";

import { nanoid } from 'nanoid';

export const ExamForm = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const { id } = useParams()

    const { exam, onValueChange, resetExam, resetingExam } = UseExamForm({

        name: '',
        date: '',
    })

    //Exam Popup
    useEffect(() => {
        if (id) {
            const exam = getExamById(id);
            resetingExam(exam)
        }
    }, [id])


    const handleSubmit = (e) => {
        e.preventDefault()
        id ? editEmployee(id, exam) : addExams({ id: nanoid(), ...exam })
        resetExam()
    }

    const [open, openChange] = useState(false)
    const functionOpenPopup = () => {
        openChange(true)
    }
    const functionClosePopup = () => {
        openChange(false)
    }

    return (
        <><Box
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
            <IconButton onClick={functionOpenPopup}>
                <AddBoxIcon />
            </IconButton>

            {/* Exam Popup */}
            <ExamPopup
                onValueChange={onValueChange}
                handleSubmit={handleSubmit}
                id={id}
                functionClosePopup={functionClosePopup}
                open={open}
                exam={exam}
            />

        </Box>
            <Box
                mt="20px"
                p="0 20px"
                display="flex "
                justifyContent="space-between"
                alignItems="center"
            >
                <AllExams exam={exam}></AllExams>
            </Box></>
    )
}