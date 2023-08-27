import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Register from './scenes/register'
import CreateUser from './CreateUser'
import Update from './scenes/update'
import { ColorModeContext,useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Topbar from './scenes/global/Topbar'
import Sidebar from './scenes/global/Sidebar'
import { ExamForm } from './components/ExamForm'
import ExamPopup from './components/ExamPopup'


import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'

function App() {

  const [theme,colorMode] = useMode()
  

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app' >
          <BrowserRouter>
          <Sidebar/>
          </BrowserRouter>
          <main className='content' >
            <Topbar />
            <BrowserRouter>
            
            <Routes>
              <Route path='/' element={<Register/>}></Route>
              <Route path='/create' element={<CreateUser/>}></Route>
              <Route path='/update' element={<Update/>}></Route>
              <Route path='/edit-exam/:id' element={<ExamPopup open={true} />}></Route>

              {/* 
                TODO: CONFIGURAR AS RODAS COMO DEVER SER
                LOGIN / REGISTER -> SISTEMA 
              */}
              <Route path="/login" element={<Login />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
            

            </Routes>
            </BrowserRouter>
            
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}



export default App;

