import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/ContextGlobal'

const Detail = () => {
 

  const params = useParams()
  const navigate = useNavigate()

  const { dentist } = useContextGlobal()

  const data = dentist[params.id - 1]

  return (
    <>
      <h1> Detalles Dentista </h1>
      <div className='container-card-detail'>
        <div className='card-detail'>
          <img src="/images/doctor.jpg" alt="img-doc" className="img-doc-detail" />
          <h3>Id profesional: {params.id}</h3>
          <h3>Nombre: {data.name}</h3>
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