import { BrowserRouter, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../assets/login-register.css"
import axios from "axios";
import api from "../../services/service";
import { authLogin, signIn } from "../../services/service.auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = { email, password }
      navigate("/");
      await signIn(data);
    } catch (error) {
      console.log(error)
    }
  };

  return (
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
        <button onClick={handleLogin} className="login-form-btn">
          Login
        </button>
      </div>

      {token && (
        <div>
          <h2>Token:</h2>
          <p>{token}</p>
        </div>
      )}

      <div className="text-center">
        <span className="txt1">Não possui conta? </span>
        <Link className="txt2" to="/auth/signup">
          Criar conta.
        </Link>
      </div>
    </form>
  );
};

export default Login;