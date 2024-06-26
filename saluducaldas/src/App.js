import './App.css';
import { Route, Routes } from 'react-router-dom';
import Inicio from './componentes/Inicio';
import Editar from './componentes/Editar';
import Observar from './componentes/Observar';
import OrdenMedica from './componentes/OrdenMedica';
import Login from './componentes/Login';
import ProtectedRoutes from './util/ProtectedRoutes';

function App() {
  return (
    <div className="Aplicacion">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path='/' element={<ProtectedRoutes />}>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/inicio/editar/:id/observar" element={<Observar />} />
          <Route path="/inicio/editar/:id" element={<Editar />} />
          <Route path='/inicio/editar/:id/orden-medica' element={<OrdenMedica />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
