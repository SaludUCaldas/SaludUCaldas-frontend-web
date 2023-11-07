import './App.css';
import { Route, Routes } from 'react-router-dom';
import Inicio from './componentes/Inicio';
import Editar from './componentes/Editar';
import Observar from './componentes/Observar';
import OrdenMedica from './componentes/OrdenMedica';

function App() {
  return (
    <div className="Aplicacion">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="editar" element={<Editar />} />
        <Route path="editar/observar" element={<Observar />} />
        <Route path='editar/orden-medica' element={<OrdenMedica />} />
      </Routes>
    </div>
  );
}

export default App;
