import { Routes, Route } from "react-router-dom";
import Login from "./Login/index"
import SignUp from "./SignUp/index"
import { LayoutComponents } from "../assets/LayoutComponents/index";
import "./index.css"


function AuthPage() {
    return (
        <LayoutComponents>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="auth/login" element={<Login />} />
                <Route path="auth/signup" element={<SignUp />} />
            </Routes>
        </LayoutComponents>
    );
}

export default AuthPage;
