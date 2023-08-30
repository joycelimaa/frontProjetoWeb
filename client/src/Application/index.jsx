import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Register from "../scenes/register/index"
import Update from '../scenes/update/index'
import { ColorModeContext, useMode } from '../theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import ExamPopup from '../components/ExamPopup'
import Sidebar from '../scenes/global/Sidebar'
import Topbar from '../scenes/global/Topbar'
import { useEffect, useState } from "react"
import { getSub } from "../services/service.auth"

function Application() {

    const [theme, colorMode] = useMode()
    const [user, setUser] = useState(getSub())


    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className='app'>
                    <Sidebar/>
                    <main className='content' >
                        <Topbar />
                        <Routes>
                            <Route path='/' element={<Register />} />
                            <Route path='/update' element={<Update />} />
                            <Route path='/edit-exam/:id' element={<ExamPopup open={true} />} />
                            {/* 
                                        TODO: CONFIGURAR AS RODAS COMO DEVER SER
                                        LOGIN / REGISTER -> SISTEMA 
                                    */}
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default Application;