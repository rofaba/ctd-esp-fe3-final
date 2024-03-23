import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "../Components/utils/ContextGlobal";


const Favs = () => {

  const { favs } = useContextGlobal()

    let filteredFavs = favs.filter((item, index) => {
      return favs.indexOf(item) === index
    })

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="container-favs">
        {filteredFavs.map(item => {
          return (
            <Link to={`/detail/${item.id}`} key={item.id} className="link-card">
              <div className="card-grid">
                <div className="card">
                  <img src="./images/doctor.jpg" alt="img-doc" className="img-doc" />
                  <h4>{item.name}</h4>
                  <h5>{item.username}</h5>
                  <h6>Eliminar de favoritos (en construcción)</h6>
                </div>
              </div>
            </Link>
          )})}
      </div>
    </>
  );
};

export default Favs;
