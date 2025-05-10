import { useState } from 'react';
import { addDoctor, updateDoctorById, deleteDoctorById } from '@/services/doctors.js';
import './stylesheet/FormDoctor.css';

const FormDoctor = ({ doctors, setDoctors, setActivateForm, data = null }) => {
    const [newDoctor, setNewDoctor] = useState(data || {
        documento: '',
        nombres: '',
        apellidos: '',
        email: '',
        num_celular: '',
        ciudad: '',
        direccion: '',
        estado: ''
    });

    const handleAdd = (event) => {
        event.preventDefault();
        let valid = true;
        for (let value of Object.values(newDoctor)) {
            if (value.trim() === '') {
                valid = false;
                break;
            }
        }

        if (valid) {
            const ids = doctors.map((doctor) => doctor.id);
            let newId = Math.max(...ids) + 1;
            setDoctors(
                addDoctor(doctors, { id: newId, ...newDoctor })
            )
            setActivateForm(false);
        }
    }

    const handleEdit = (event) => {
        event.preventDefault();
        let valid = true;
        for (let value of Object.values(newDoctor)) {
            if (`${value}`.trim() === '') {
                valid = false;
                break;
            }
        }

        if (valid) {
            setDoctors(
                updateDoctorById(doctors, newDoctor.id, newDoctor)
            )
            setActivateForm(false);
        }
    }

    const handleDelete = (event) => {
        event.preventDefault();
        setDoctors(
            deleteDoctorById(doctors, newDoctor.id)
        );
        setActivateForm(false);
    }

    const handleChange = (event) => {
        setNewDoctor({
            ...newDoctor, 
            [event.target.name]: event.target.value
        })
    }
    
    return (
        <section className='formdoctor-overlay'>
            <article className='formdoctor-form-wrapper'>
                <form className='formdoctor-form'>
                    <label htmlFor="documento">Documento</label>
                    <input className='formdoctor-input' 
                        name='documento' 
                        type="text" 
                        value={newDoctor.documento} 
                        onChange={handleChange} />

                    <label htmlFor="nombres">Nombres</label>
                    <input className='formdoctor-input' 
                        name='nombres' 
                        type="text" 
                        value={newDoctor.nombres} 
                        onChange={handleChange} />

                    <label htmlFor="apellidos">Apellidos</label>
                    <input className='formdoctor-input' 
                        name='apellidos' 
                        type="text" 
                        value={newDoctor.apellidos} 
                        onChange={handleChange} />

                    <label htmlFor="email">Email</label>
                    <input className='formdoctor-input' 
                        name='email' 
                        type="email" 
                        value={newDoctor.email} 
                        onChange={handleChange} />

                    <label htmlFor="num_celular">Numero de celular</label>
                    <input className='formdoctor-input' 
                        name='num_celular' 
                        type="text" 
                        value={newDoctor.num_celular} 
                        onChange={handleChange} />

                    <label htmlFor="ciudad">Ciudad</label>
                    <input className='formdoctor-input' 
                        name='ciudad' 
                        type="text" 
                        value={newDoctor.ciudad} 
                        onChange={handleChange} />

                    <label htmlFor="direccion">Direccion</label>
                    <input className='formdoctor-input' 
                        name='direccion' 
                        type="text" 
                        value={newDoctor.direccion} 
                        onChange={handleChange} />

                    <label htmlFor="estado">Estado</label>
                    <select className='formdoctor-input' name="estado" id="estado" defaultValue={newDoctor.estado} onChange={handleChange}>
                        <option value=""></option>
                        <option value="Activo">Activo</option>
                        <option value="Inactivo">Inactivo</option>
                    </select>

                    <span className='formdoctor-btns'>
                        <button className='formdoctor-btn' onClick={data ? handleEdit : handleAdd}>
                            {data ? 'Editar' : 'Agregar'}
                        </button>

                        {data && <button className='formdoctor-btn_delete' onClick={handleDelete}>Eliminar</button>}
                    </span>
                </form>
            </article>
        </section>
    )
}

export default FormDoctor;