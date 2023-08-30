import React from "react";
import { BrowserRouter } from "react-router-dom";
import Application from "./application";
import AuthPage from "./pages/index"
import { isAuth } from "./services/service.auth";

function App() {

    return (
        <BrowserRouter>
            <div class="app">
                {isAuth() ? <Application/> : <AuthPage/>}
            </div>
        </BrowserRouter>
    )
}

export default App;