import './App.css';
import { Route, Routes } from 'react-router-dom';
import Inicio from './componentes/Inicio';
import Editar from './componentes/Editar';
import Observar from './componentes/Observar';
import OrdenMedica from './componentes/OrdenMedica';
import Login from './componentes/Login';

function App() {
  return (
    <div className="Aplicacion">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="inicio" element={<Inicio />} />
        <Route path="inicio/editar" element={<Editar />} />
        <Route path="inicio/editar/observar" element={<Observar />} />
        <Route path='inicio/editar/orden-medica' element={<OrdenMedica />} />
      </Routes>
    </div>
  );
}

export default App;
