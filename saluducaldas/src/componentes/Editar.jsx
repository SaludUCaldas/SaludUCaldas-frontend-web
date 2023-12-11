import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import '../styles/styles.css';
import axios from 'axios';

function Editar() {
  const [historialesMedicos, setHistorialesMedicos] = useState([]);

  const { id } = useParams();
  const PlantillaHistoria = "RESUMEN DE LA HISTORIA CLÍNICA: \n\nTIPO DE SERVICIO: \nSÍNTOMAS: \nEXÁMEN FÍSICO: \n\n"
  const [observaciones, setObservaciones] = useState(PlantillaHistoria);

  const history = useNavigate();


  function imprimir() {
    window.print();
  }

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

  const handleSubmit = (e) => {
    e.preventDefault();

    history(`/inicio/editar/${id}/orden-medica`, {
      state: {
        observaciones: observaciones,
      }
    });
  };

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
      <main className="main-editar">
        <h2>Historial médico</h2>
        <div className="container">
          <section className="observaciones">
            <h3>Observaciones</h3>
            <textarea
              className='observaciones-editar'
              cols="30"
              rows="10"
              value={observaciones}
              onChange={(e) => setObservaciones(e.target.value)}>
              {PlantillaHistoria}
            </textarea>
          </section>
          <section className="historial-medico">
            <table className="lista-historial-medico">
              <thead>
                <tr>
                  <th></th>
                  <th>Historias clínicas pasadas</th>
                </tr>
              </thead>
              <tbody>
                {historialesMedicos.map(historial => (
                  <tr key={historial.id}>
                    <td>{historial.id}</td>
                    <td>{historial.fecha_consulta}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={2}>
                    <button type="button" className="generar-orden-medica boton">
                      <Link className="link-boton" to={`observar`}>
                        Mostrar más detalles
                      </Link>
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </section>
        </div>
      </main>
      <div className="botones-editar">
        <button type="button" className="guardar boton">
          Guardar
        </button>
        <button type="button" className="imprimir boton" onClick={() => imprimir()}>
          Imprimir
        </button>
        <button type="button" className="generar-orden-medica boton" onClick={handleSubmit}>
          <Link className="link-boton" to="orden-medica">
            Generar orden médica
          </Link>
        </button>
        <button type="button" className="cancelar boton">
          Cancelar
        </button>
      </div>
      <footer>
        <p>Copyright © 2023 SaludUCaldas</p>
      </footer>
    </div>
  );
}

export default Editar;
