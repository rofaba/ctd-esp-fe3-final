import { Link, useNavigate } from "react-router-dom";
import { useContextGlobal } from "../Components/utils/ContextGlobal";

const Favs = () => {
  const { favs } = useContextGlobal();
  const navigate = useNavigate();

  let filteredFavs = favs.filter((item, index) => favs.indexOf(item) === index);

  return (
    <>
      <h2>Dentistas Favoritos</h2>
      
      {filteredFavs.length > 0 ? ( 
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
      ) : (
        <p>No hay favoritos agregados.</p>
         
      )}
      
      <button onClick={() => navigate(-1)} className="btn-back">Volver</button>
    </>
  );
};

export default Favs;


