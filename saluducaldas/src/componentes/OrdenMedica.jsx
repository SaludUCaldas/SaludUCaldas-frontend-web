import React, { useEffect, useState } from 'react'
import '../styles/styles.css'
import logo from '../assets/logo.jpg'
// import { useParams } from 'react-router-dom';
import axios from 'axios';

function OrdenMedica() {
    const [medicamentos, setMedicamentos] = useState([]);
    const [selectedMedicamento, setSelectedMedicamento] = useState({});
    const [requiereAutorizacion, setRequiereAutorizacion] = useState(false);
    const [observaciones, setObservaciones] = useState('');
    const [numeroDosis, setNumeroDosis] = useState(0);
    // const { id } = useParams();

    useEffect(() => {
        const fetchMedicamentos = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/medicamentos`);
                setMedicamentos(response.data.medicamentos);
            } catch (error) {
                console.error('Error fetching medicamentos:', error);
            }
        };
        fetchMedicamentos();
    }, []);

    const handleMedicamentoChange = (event) => {
        const selectedId = event.target.value;
        if (selectedId === 'ninguno') {
            setSelectedMedicamento({});
            setRequiereAutorizacion(false);
            setObservaciones('Ningún medicamento en específico es necesario.');
            setNumeroDosis(0);
        } else {
            const selected = medicamentos.find(medicamento => medicamento.id === parseInt(selectedId));
            setSelectedMedicamento(selected);
            setRequiereAutorizacion(selected.requiere_autorizacion);
            setObservaciones(selected.descripcion + '\n\nINSTRUCCIONES DE USO DEL MEDICAMENTO:\n');
        }
    };

    const handleAutorizacionChange = () => {
        setRequiereAutorizacion(!requiereAutorizacion);
    };

    return (
        <div>
            <header>
                <img className="logo" src={logo} alt="logo" />
                <h1>SaludUCaldas</h1>
            </header>
            <main className='main-orden-medica'>
                <form action="#" className='nueva-orden-medica'>
                    <h2>Nueva orden médica</h2>
                    <div className="form-group">
                        <label htmlFor="medicamento">Medicamento</label>
                        <select name="medicamento" id="medicamento" onChange={handleMedicamentoChange} value={selectedMedicamento.id}>
                            <option value="">---- Seleccione un medicamento ----</option>
                            <option value="ninguno">Ningún medicamento es necesario</option>
                            {medicamentos.map(medicamento => (
                                <option key={medicamento.id} value={medicamento.id}>
                                    {medicamento.nombre}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="numero-dosis">Número de dosis</label>
                        <input type="number" name="numero-dosis" id="numero-dosis" value={numeroDosis} onChange={(e) => setNumeroDosis(e.target.value)} />
                    </div>
                    <div className="form-group2">
                        <label htmlFor="requiere-autorizacion">Requiere autorización</label>
                        <input type="checkbox" name="requiere-autorizacion" id="requiere-autorizacion" checked={requiereAutorizacion} onChange={handleAutorizacionChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="observaciones">Observaciones sobre la orden medica</label>
                        <textarea className='observaciones-orden-medica' name="observaciones" id="observaciones" value={observaciones} onChange={(e) => setObservaciones(e.target.value)}></textarea>
                    </div>
                    <div className="form-group3">
                        <input className='boton' type="submit" value="Guardar" />
                        <input className='boton' type="reset" value="Cancelar" />
                    </div>
                </form>
            </main>
            <footer>
                <p>Copyright &copy; 2023 SaludUCaldas</p>
            </footer>
        </div>
    )
}

export default OrdenMedica