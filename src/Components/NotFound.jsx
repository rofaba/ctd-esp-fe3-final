import React from 'react';
import BtnBack from './BtnBack';

const NotFound = () => {

  return (
    <>
    <div className='not_found'>
    <img src="./images/404.jpg" alt="Error 404" className="not_found" />
    </div>
    <BtnBack />
    </>
  )
}

export default NotFound;