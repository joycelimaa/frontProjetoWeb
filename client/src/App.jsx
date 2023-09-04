import React from "react";
import Application from "./Application";
import AuthPage from "./pages/index"
import { isAuth } from "./services/service.auth";
import "./App.css"

function App() {

    return (
        <div className="app">
            {isAuth() ? <Application /> : <AuthPage />}
        </div>
    )
}

export default App;