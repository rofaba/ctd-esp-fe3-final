import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Asegúrate de importar useNavigate
import { useContextGlobal } from "../Components/utils/ContextGlobal";

const Favs = () => {
  const { favs } = useContextGlobal();
  const navigate = useNavigate(); // Utiliza useNavigate aquí

  let filteredFavs = favs.filter((item, index) => {
    return favs.indexOf(item) === index;
  });

  return (
    <>
      <h1>Dentists Favs</h1>
      
        <div className="card-grid"> 
          {filteredFavs.map(item => (
            <Link to={`/detail/${item.id}`} key={item.id} className="link-card">
              <div className="card">
                <img src="./images/doctor.jpg" alt="img-doc" className="img-doc" />
                <h4>{item.name}</h4>
                <h5>{item.username}</h5>
              </div>
            </Link>
          ))}
        </div>
      
      <button onClick={() => navigate(-1)} className="btn-back">Volver</button>
    </>
  );
};


export default Favs;

