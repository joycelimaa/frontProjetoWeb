import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { LayoutComponents } from "../../assets/LayoutComponents";
import "../../assets/login-register.css";
import axios from "axios";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");

    useEffect(() => {
        // verifica se há um token salvo no localStorage ao carregar o componente
        const savedToken = localStorage.getItem('token');
        if (savedToken) {
            setToken(savedToken); // define o token no estado
        }
    }, []);

    /* FEITO COM FETCH 
    const handleLogin = async () => {
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
    */

    const handleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:8081/api/v1/auth/login", {
                email,
                password
            });

            const data = response.data;

            if (data.token) {
                setToken(data.token);
                localStorage.setItem('token', data.token); // Armazena o token no localStorage
            }
        }
        catch (err) {
            console.error("Login failed: ", err);
        }
    }

    return (
        <LayoutComponents>
                <form className="login-form">
                    <span className="login-form-title">Bem vindo</span>

                    {/* Campo do input de email */}
                    <div className="wrap-input">
                        <input
                            className={email != "" ? "hav-val input" : "input"}
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}

                        />
                        <span className="focus-input" data-placeholder="Email"></span>
                    </div>

                    {/* Campo do input de senha */}
                    <div className="wrap-input">
                        <input
                            className={password != "" ? "hav-val input" : "input"}
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}

                        />
                        <span className="focus-input" data-placeholder="Senha"></span>
                    </div>

                    <div className="container-login-form-btn">
                        <button onClick={handleLogin} className="login-form-btn">Login</button>
                    </div>


                    {token && (
                        <div>
                            <h2>Token:</h2>
                            <p>{token}</p>
                        </div>
                    )}

                    <div className="text-center">
                        <span className="txt1">Não possui conta? </span>
                        <Link className="txt2" to="/signup">
                            Criar conta.
                        </Link>
                    </div>
                </form>

        </LayoutComponents>
    );
};