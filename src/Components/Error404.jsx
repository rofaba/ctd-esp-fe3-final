import React from 'react'
import { useNavigate } from 'react-router-dom';
import BtnBack from './BtnBack';


const Error404 = () => {

  const navigate = useNavigate();

  return (
    <>
    <div className='Error_404'>
    <img src="./images/404.jpg" alt="Error 404" className="Error_404" />
 
    </div>
    <BtnBack />
    </>
  )
}

export default Error404