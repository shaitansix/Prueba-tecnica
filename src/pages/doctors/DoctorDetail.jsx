import './stylesheet/DoctorDetail.css';

const DoctorDetail = ({ doctor, setDoctorDetails }) => {
    return (
        <section className='doctordetail-overlay'>
            <article className='doctordetail-wrapper'>
                <div className='doctordetail-header'>
                    <span>Perfil del doctor</span>
                    <button onClick={() => setDoctorDetails(false)}>X</button>
                </div>

                <span className='doctordetail-title'>Informacion personal</span>
                <span>{`Nombre completo: ${doctor.nombres} ${doctor.apellidos}`}</span>
                <span>{`Numero de identificacion: ${doctor.documento}`}</span>

                <span className='doctordetail-title'>Informacion de contacto</span>
                <span>{`Email: ${doctor.email}`}</span>
                <span>{`Celular: ${doctor.num_celular}`}</span>

                <span className='doctordetail-title'>Informacion de residencia</span>
                <span>{`Ciudad: ${doctor.ciudad}`}</span>
                <span>{`Direccion: ${doctor.direccion}`}</span>
            </article>
        </section>
    )
}

export default DoctorDetail;