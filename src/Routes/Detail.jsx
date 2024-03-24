import { useNavigate, useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/ContextGlobal'

const Detail = () => {
 
  const params = useParams()
  const navigate = useNavigate()

  const { dentist } = useContextGlobal()

  const data = dentist[params.id - 1]

  return (
    <>
      <h2> Detalles Dentista </h2>
      <div className='container-card-detail'>
        <div className='card'>
          <img src="/images/doctor.jpg" alt="img-doc" className="img-doc-detail" />
          <h4>Id profesional: {params.id}</h4>
          <h3>{data.name}</h3>
          <p>Email: {data.email}</p>
          <p>Phone: {data.phone}</p>
          <p>Website: {data.website}</p>
          <button onClick={() => navigate(-1)} className="btn-back"> Volver</button>
        </div>
      </div>
    </>
  )
}

export default Detail