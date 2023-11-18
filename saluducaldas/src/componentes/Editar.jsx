import React from 'react'
import '../styles/styles.css'
import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg'

function Editar() {
    return (
        <div>
            <header>
                <img className="logo" src={logo} alt="logo" />
                <h1>SaludUCaldas</h1>
            </header>
            <main className='main-editar'>
                <h2>Historial médico</h2>
                <div className='container'>
                    <section className="observaciones">
                        <h3>Observaciones</h3>
                        <textarea className='observaciones-editar'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</textarea>
                    </section>
                    <section className="historial-medico">
                        <table className="lista-historial-medico">
                            <thead>
                                <th>Resultados</th>
                                <th></th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>HOLA</td>
                                    <td><Link className='link-lista' to="observar">Observar</Link></td>
                                </tr>
                                <tr>
                                    <td>HOLA</td>
                                    <td><Link className='link-lista' to="observar">Observar</Link></td>
                                </tr>
                                <tr>
                                    <td>HOLA</td>
                                    <td><Link className='link-lista' to="observar">Observar</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </div>
            </main>
            <div className="botones-editar">
                <button type="button" className="guardar boton">Guardar</button>
                <button type="button" className="imprimir boton">Imprimir</button>
                <button type="button" className="generar-orden-medica boton"><Link className='link-boton' to="orden-medica">Generar orden médica</Link></button>
                <button type="button" className="cancelar boton">Cancelar</button>
            </div>
            <footer>
                <p>Copyright © 2023 SaludUCaldas</p>
            </footer>
        </div>
    )
}

export default Editar