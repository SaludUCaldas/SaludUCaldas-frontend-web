import React from "react";
import { Link } from "react-router-dom";
import '../styles/styles.css'

function Inicio() {
  return (
    <div>
      <header>
        <img className="logo" src='../assets/logo.jpg' alt="logo" />
        <h1>SaludUCaldas</h1>
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
              <tr>
                <td>Cita 1</td>
                <td>Juan Pérez</td>
                <td>123456789</td>
                <td>Confirmado</td>
                <td><Link to="editar">Editar</Link></td>
              </tr>
              <tr>
                <td>Cita 2</td>
                <td>María García</td>
                <td>987654321</td>
                <td>Cancelado</td>
                <td><Link to="editar">Editar</Link></td>
              </tr>
              <tr>
                <td>Cita 3</td>
                <td>Pedro Rodríguez</td>
                <td>654321987</td>
                <td>Pendiente</td>
                <td><Link to="editar">Editar</Link></td>
              </tr>
            </tbody>
          </table>
          <div className="paginacion">
            <a href="pagina-anterior.html" className="paginacion-anterior">Anterior</a>
            <a href="pagina-1.html" className="paginacion-primera">1</a>
            <a href="pagina-2.html" className="paginacion-actual">2</a>
            <a href="pagina-siguiente.html" className="paginacion-siguiente">Siguiente</a>
            <a href="pagina-3.html" className="paginacion-ultima">Última</a>
          </div>
        </section>
      </main>
      <footer>
        <p>Copyright © 2023 SaludUCaldas</p>
      </footer>
    </div>
  );
}

export default Inicio;
