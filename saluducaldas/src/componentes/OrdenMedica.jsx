import React from 'react'
import '../styles/styles.css'

function OrdenMedica() {
    return (
        <div>
            <header>
                <img className="logo" src='../assets/logo.jpg' alt="logo" />
                <h1>SaludUCaldas</h1>
            </header>
            <main className='main-orden-medica'>
                <form action="#" className='nueva-orden-medica'>
                    <h2>Nueva orden médica</h2>
                    <div class="form-group">
                        <label for="medicamento">Medicamento</label>
                        <select name="medicamento" id="medicamento">
                            <option value="1">Paracetamol</option>
                            <option value="2">Ibuprofeno</option>
                            <option value="3">Aspirina</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="numero-dosis">Número de dosis</label>
                        <input type="number" name="numero-dosis" id="numero-dosis" />
                    </div>
                    <div class="form-group2">
                        <label for="requiere-autorizacion">Requiere autorización</label>
                        <input type="checkbox" name="requiere-autorizacion" id="requiere-autorizacion" />
                    </div>
                    <div class="form-group">
                        <label for="observaciones">Observaciones</label>
                        <textarea className='observaciones-orden-medica' name="observaciones" id="observaciones"></textarea>
                    </div>
                    <div class="form-group3">
                        <input className='boton' type="submit" value="Guardar" />
                        <input className='boton' type="submit" value="Imprimir" />
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