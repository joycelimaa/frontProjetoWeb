import { Link } from "react-router-dom";
import { useState } from "react";
import { LayoutComponents } from "../../assets/LayoutComponents";
import "../../assets/login-register.css";
import axios from "axios";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState(null);

<<<<<<< HEAD
  const handleSignUp = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8081/api/v1/auth/register",
        {
          name,
          email,
          password,
          confirmPassword,
=======
    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8081/api/v1/auth/register", {
                name, 
                email, 
                password,
                confirmPassword
            })

            if (response.status === 201) {
                console.log('Registration successful');
                setIsRegistered(true);
                setError(null);

                const token = response.data.token;
                localStorage.setItem(token);  // Salva o token no localStorage 
            }
        }
        catch (error) {
            console.log("Registration Failed: ", error);
            
            // window.location.reload(); // Recarrega a página em caso de erro
>>>>>>> 048118803bf053b902c61cb44f32529a006d1ef9
        }
      );

      if (response.status === 201) {
        console.log("Registration successful");
        setIsRegistered(true);
        setError(null);

        const token = response.data.token;
        localStorage.setItem(token); // Salva o token no localStorage
      }
    } catch (error) {
      console.log("Registration Failed: ", error);
      setError("Erro ao registrar. Verifique suas informações");
      // window.location.reload(); // Recarrega a página em caso de erro
    }
  };

  return (
    <LayoutComponents>
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
          <Link className="txt2" to="/login">
            Acessar com Email e Senha.
          </Link>
        </div>
      </form>
    </LayoutComponents>
  );
};

export default SignUp;