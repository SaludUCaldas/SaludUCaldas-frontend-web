import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import '../styles/styles.css';
import axios from 'axios';

function Editar() {
  const [historialesMedicos, setHistorialesMedicos] = useState([]);
  const { id } = useParams();
  const PlantillaHistoria = "RESUMEN DE LA HISTORIA CLÍNICA: \nTIPO DE SERVICIO: \nSÍNTOMAS: \nEXÁMEN FÍSICO: "

  function imprimir() {
    window.print();
  }

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
      <header>
        <img className="logo" src={logo} alt="logo" />
        <h1>SaludUCaldas</h1>
      </header>
      <main className="main-editar">
        <h2>Historial médico</h2>
        <div className="container">
          <section className="observaciones">
            <h3>Observaciones</h3>
            <textarea className='observaciones-editar' cols="30" rows="10">
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
        <button type="button" className="generar-orden-medica boton">
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
