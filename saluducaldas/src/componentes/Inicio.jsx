import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import '../styles/styles.css';
import logo from '../assets/logo.jpg';
import { useCountdownContext } from "../util/ContadorContexto";

function Inicio() {
  const [citasMedicas, setCitasMedicas] = useState([]);
  const { setSelectedCitaId } = useCountdownContext();

  useEffect(() => {
    const idDoctor = localStorage.getItem('id_doctor');

    if (idDoctor) {
      axios.get(`http://localhost:3000/api/citasMedicasW/${idDoctor}`)
        .then(response => {
          setCitasMedicas(response.data.citasMedicas);
        })
        .catch(error => {
          console.error('Error fetching citas médicas:', error);
        });
    }
  }, []);

  const handleCerrarSesion = () => {
    localStorage.removeItem('id_doctor');
    window.location.href = '/login';
  };

  const handleSelectCita = (citaId) => {
    console.log("Selected Cita ID:", citaId);
    setSelectedCitaId(citaId);
  };

  return (
    <div>
      <header>
        <div className='nav-derecha'>
          <img className="logo" src={logo} alt="logo" />
          <h1>SaludUCaldas</h1>
        </div>
        <button className='boton' onClick={handleCerrarSesion}>Cerrar Sesión</button>
      </header>
      <main className="main-inicio">
        <section className="citas">
          <h2>Citas médicas</h2>
          <table className="lista-citas">
            <thead>
              <tr>
                <th>Cita</th>
                <th>Paciente</th>
                <th>Cédula</th>
                <th>Estado</th>
                <th>Hora inicio</th>
                <th>Hora fin</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {citasMedicas.map(cita => (
                <tr key={cita.id}>
                  <td>{cita.id}</td>
                  <td>{cita.paciente.nombre}</td>
                  <td>{cita.paciente.cedula}</td>
                  <td>{cita.estado}</td>
                  <td>{cita.hora_inicio}</td>
                  <td>{cita.hora_fin}</td>
                  <td><Link
                    className="link-lista"
                    to={`editar/${cita.id}`}
                  onClick={() => handleSelectCita(cita.id)}>Editar</Link></td>
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
  );
}

export default Inicio;
