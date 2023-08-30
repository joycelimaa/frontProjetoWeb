import { Link } from "react-router-dom";
import { useState } from "react";
import "../../assets/login-register.css";
import axios from "axios";
import { signUp } from "../../services/service.auth";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState(null);


  const handleSignUp = async (e) => {
    e.preventDefault()
    try {
      const data = {
        name,
        email,
        password,
        confirmPassword
      };

      console.log(data);

      await signUp(data);
      setIsRegistered(true);
    }
    catch (error) {
      console.log("Registration Failed: ", error);

      // window.location.reload(); // Recarrega a página em caso de erro
    }
  }

  return (
    <form className="login-form">

      <span className="login-form-title">Criar Conta </span>

      {/* Campo do input de nome */}
      <div className="wrap-input">
        <input
          className={name != "" ? "has-val input" : "input"}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span className="focus-input" data-placeholder="Nome"></span>
      </div>

      {/* Campo do input de email */}
      <div className="wrap-input">
        <input
          className={email != "" ? "has-val input" : "input"}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="focus-input" data-placeholder="Email"></span>
      </div>

      {/* Campo do input de senha */}
      <div className="wrap-input">
        <input
          className={password != "" ? "has-val input" : "input"}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="focus-input" data-placeholder="Senha"></span>
      </div>

      {/* Campo do input de confirmar senha */}
      <div className="wrap-input">
        <input
          className={confirmPassword != "" ? "has-val input" : "input"}
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <span
          className="focus-input"
          data-placeholder="Confirmar sua senha"
        ></span>
      </div>

      <div className="container-login-form-btn">
        <button onClick={handleSignUp} className="login-form-btn">
          Criar conta
        </button>
      </div>

      {isRegistered && (
        <div>
          <p className="success-message">
            Registro bem-sucedido! Agora você pode acessar com suas
            credenciais.
          </p>
        </div>
      )}

      {error && <p className="error-message">{error}</p>}

      <div className="text-center">
        <span className="txt1">Já possui conta? </span>
        <Link className="txt2" to="#">
          Acessar com Email e Senha.
        </Link>
      </div>
    </form>
  );
};

export default SignUp;