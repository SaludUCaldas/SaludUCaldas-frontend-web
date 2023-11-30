import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/styles.css'
import logo from '../assets/logo.jpg'
import axios from "axios";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const isFormValid = email !== "" && password !== ""

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/api/loginW", {
                correo: email,
                contrasena: password,
            });

            console.log("Autenticación exitosa", response.data);
            navigate('/inicio')
        } catch (error) {
            console.error("Error de autenticación", error);

            if (error.response) {
                if (error.response.status === 400) {
                    setError("Usuario o contraseña incorrectos, vuelva a intentarlo.");
                } else if (error.response.status === 403) {
                    setError("Acceso no permitido para este usuario");
                } else {
                    setError("Error de autenticación");
                }
            } else {
                setError("Error de conexión");
            }
        }
    };

    return (
        <div>
            <header>
                <img className="logo" src={logo} alt="logo" />
                <h1>SaludUCaldas</h1>
            </header>
            <main className="main-login">
                <form className="inicio-sesion" onSubmit={handleLogin} action="#">
                    <h2>Inicio de sesión</h2>
                    <div className="form-group">
                        <label htmlFor="usuario">Correo</label>
                        <input className="login-input" type="email" name="usuario" id="usuario" required onChange={handleEmailChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contrasena">Contraseña</label>
                        <input className="login-input" type="password" name="contrasena" id="contrasena" required onChange={handlePasswordChange} />
                    </div>
                    <div className="form-group">
                        <button className="login-boton" type="submit" disabled={!isFormValid}>
                            Iniciar Sesión
                        </button>
                    </div>
                </form>
                {error && (
                    <div className="error-message">
                        <p>{error}</p>
                    </div>
                )}
            </main>
            <footer>
                <p>Copyright &copy; 2023 SaludUCaldas</p>
            </footer>
        </div>
    );
}

export default Login;
