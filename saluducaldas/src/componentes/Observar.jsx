import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.jpg'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Observar() {
    const [historialesMedicos, setHistorialesMedicos] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const idAfiliado = id;

        if (idAfiliado) {
            axios.get(`http://localhost:3000/api/historialesMedicos/${idAfiliado}`)
                .then(response => {
                    setHistorialesMedicos(response.data.historialesMedicos);
                })
                .catch(error => {
                    console.error('Error fetching historiales médicos:', error);
                });
        }
    }, []);

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
                                {historialesMedicos.map(historial => (
                                    <tr key={historial.id}>
                                        <td>{historial.fecha_consulta}</td>
                                        <td>{historial.diagnostico}</td>
                                        <td>{historial.medicamento.nombre}</td>
                                        <td>{historial.dosis}</td>
                                        <td>{historial.observaciones}</td>
                                    </tr>
                                ))}
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