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
            </Routes>
            </BrowserRouter>
            
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App;

