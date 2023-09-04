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
import MonitorarLesao from "../scenes/monitorarLesao"
import Home from "../scenes/home"

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
                            <Route path='/' element={<Home />} />
                            <Route path="/registrar-paciente" element={<Register />} />
                            <Route path="create"/>
                            <Route path='/update' element={<Update />} />
                            <Route path='/monitorar-lesao' element={<MonitorarLesao />} />
                            <Route path='/edit-exam/:id' element={<ExamPopup open={true} />} />
                            
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default Application;