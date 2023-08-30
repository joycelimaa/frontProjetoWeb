import { Routes, Route } from "react-router-dom";
import Login from "Login/Login"
import SignUp from "SignUp/SignUp"

function AuthPage() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    );
}

export default AuthPage;
