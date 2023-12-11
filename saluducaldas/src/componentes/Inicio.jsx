import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import '../styles/styles.css';
import logo from '../assets/logo.jpg';

function Inicio() {
  const [citasMedicas, setCitasMedicas] = useState([]);

  useEffect(() => {
    const idDoctor = localStorage.getItem('id_doctor');

    if (idDoctor) {
      // const today = new Date().toISOString().split('T')[0];

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
          <h2>Buscar</h2>
          <form className="busqueda-citas">
            <input className="busqueda-input" type="text" name="nombre" placeholder="Nombre" />
            <input className="busqueda-input" type="number" name="cedula" placeholder="Cédula" />
            <input className="busqueda-input" type="submit" value="Buscar" />
          </form>
          <table className="lista-citas">
            <thead>
              <tr>
                <th>Cita</th>
                <th>Paciente</th>
                <th>Cédula</th>
                <th>Estado</th>
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
                  <td><Link className="link-lista" to={`editar/${cita.id}`}>Editar</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <div className="paginacion">
            <a href="pagina-anterior.html" className="paginacion-anterior">Anterior</a>
            <a href="pagina-1.html" className="paginacion-primera">1</a>
            <a href="pagina-2.html" className="paginacion-actual">2</a>
            <a href="pagina-siguiente.html" className="paginacion-siguiente">Siguiente</a>
            <a href="pagina-3.html" className="paginacion-ultima">Última</a>
          </div> */}
        </section>
      </main>
      <footer>
        <p>Copyright © 2023 SaludUCaldas</p>
      </footer>
    </div>
  );
}

export default Inicio;
