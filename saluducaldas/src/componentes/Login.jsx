import React from "react";
import { Link } from "react-router-dom";
import '../styles/styles.css'
import logo from '../assets/logo.jpg'

function Login() {
    return (
        <div>
            <header>
                <img className="logo" src={logo} alt="logo" />
                <h1>SaludUCaldas</h1>
            </header>
            <main className="main-login">
                <form className="inicio-sesion" action="#">
                    <h2>Inicio de sesión</h2>
                    <div class="form-group">
                        <label for="usuario">Correo</label>
                        <input className="login-input" type="email" name="usuario" id="usuario" required />
                    </div>
                    <div class="form-group">
                        <label for="contrasena">Contraseña</label>
                        <input className="login-input" type="password" name="contrasena" id="contrasena" required />
                    </div>
                    <div class="form-group">
                        <button className="login-boton" type="submit">
                            <Link className="link-boton" to="/inicio">Iniciar Sesión</Link>
                        </button>
                    </div>
                </form>
            </main>
            <footer>
                <p>Copyright &copy; 2023 SaludUCaldas</p>
            </footer>
        </div>
    );
}

export default Login;
