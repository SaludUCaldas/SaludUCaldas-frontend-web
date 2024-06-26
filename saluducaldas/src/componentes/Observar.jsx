import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.jpg'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Observar() {
    const [historialesMedicos, setHistorialesMedicos] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchHistorialesMedicos = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/historialesMedicos/${id}`);
                setHistorialesMedicos(response.data.historialesMedicos);
            } catch (error) {
                console.error('Error fetching historiales médicos:', error);
            }
        };

        fetchHistorialesMedicos();
    }, [id]);

    const handleCerrarSesion = () => {
        localStorage.removeItem('id_doctor');
        window.location.href = '/login';
    };

    return (
        <div>
            <div>
                <header>
                    <div className='nav-derecha'>
                        <img className="logo" src={logo} alt="logo" />
                        <h1>SaludUCaldas</h1>
                    </div>
                    <button className='boton' onClick={handleCerrarSesion}>Cerrar Sesión</button>
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