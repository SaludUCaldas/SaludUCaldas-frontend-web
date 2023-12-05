import React from 'react'
import logo from '../assets/logo.jpg'

function Observar(props) {
    return (
        <div>
            <div>
                <header>
                    <img className="logo" src={logo} alt="logo" />
                    <h1>SaludUCaldas</h1>
                </header>
                <main className='main-observar'>
                    <section className='historiales-medicos'>
                        <table className='lista-historiales-medicos'>
                            <thead>
                                <tr>
                                    <th>Fecha consulta</th>
                                    <th>Diagnostico</th>
                                    <th>Medicamento</th>
                                    <th>Dosis</th>
                                    <th>Observaciones</th>
                                </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </table>
                    </section>
                </main>
                <footer>
                    <p>Copyright © 2023 SaludUCaldas</p>
                </footer>
            </div>
        </div>
    )
}

export default Observar