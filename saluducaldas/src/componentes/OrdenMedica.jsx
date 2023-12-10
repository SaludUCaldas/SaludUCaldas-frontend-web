import React, { useEffect, useState } from 'react'
import '../styles/styles.css'
import logo from '../assets/logo.jpg'
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function OrdenMedica() {
    const [medicamentos, setMedicamentos] = useState([]);
    const [selectedMedicamento, setSelectedMedicamento] = useState({});
    const [requiereAutorizacion, setRequiereAutorizacion] = useState(false);
    const [observaciones, setObservaciones] = useState('');
    const [observacionesMedicamento, setObservacionesMedicamento] = useState('');
    const [numeroDosis, setNumeroDosis] = useState();

    const location = useLocation();
    const { state } = location;

    useEffect(() => {
        if (state && state.observaciones) {
            setObservaciones(state.observaciones);
        }
    }, [state]);

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
            setObservacionesMedicamento('Ningún medicamento en específico es necesario.');
            setNumeroDosis(0);
        } else {
            const selected = medicamentos.find(medicamento => medicamento.id === parseInt(selectedId));
            setSelectedMedicamento(selected);
            setRequiereAutorizacion(selected.requiere_autorizacion);
            setObservacionesMedicamento(`MEDICAMENTO ASIGNADO\n${selected.nombre}\n${selected.descripcion}\n\nINSTRUCCIONES DE USO DEL MEDICAMENTO:\n\n\nCantidad: ${numeroDosis}`)
        }
    };

    const handleAutorizacionChange = () => {
        setRequiereAutorizacion(!requiereAutorizacion);
    };

    const updateObservacionesMedicamento = (medicamento, dosis) => {
        if (!medicamento.id) {
            return; // No hay medicamento seleccionado
        }

        const nuevasObservaciones = `MEDICAMENTO ASIGNADO\n${medicamento.nombre}\n${medicamento.descripcion}\n\nINSTRUCCIONES DE USO DEL MEDICAMENTO:\nCantidad: ${dosis}`;
        setObservacionesMedicamento(nuevasObservaciones);
    };

    return (
        <div>
            <header>
                <img className="logo" src={logo} alt="logo" />
                <h1>SaludUCaldas</h1>
            </header>
            <main className='main-orden-medica'>
                <form className='nueva-orden-medica'>
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
                        <input
                            type="number"
                            name="numero-dosis"
                            id="numero-dosis"
                            value={numeroDosis}
                            onChange={(e) => {
                                setNumeroDosis(e.target.value);
                                updateObservacionesMedicamento(selectedMedicamento, e.target.value);
                            }}
                        />
                    </div>

                    <div className="form-group2">
                        <label htmlFor="requiere-autorizacion">Requiere autorización</label>
                        <input type="checkbox" name="requiere-autorizacion" id="requiere-autorizacion" checked={requiereAutorizacion} onChange={handleAutorizacionChange} />
                    </div>
                    <label htmlFor="observaciones">Observaciones sobre la orden medica</label>
                    <div className="form-group2">
                        <textarea
                            className='observaciones-orden-medica'
                            cols="30"
                            rows="10"
                            value={observacionesMedicamento}
                            onChange={(e) => setObservacionesMedicamento(e.target.value)}>
                        </textarea>
                        <textarea
                            className='observaciones-editar'
                            cols="30"
                            rows="10"
                            value={observaciones}
                            readOnly>
                        </textarea>
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