import { useContextGlobal } from "../Components/utils/ContextGlobal";
import Card from "../Components/Card";
import { useNavigate } from "react-router-dom";

const Favs = () => {
  const { favs } = useContextGlobal();
  const navigate = useNavigate();

  let filteredFavs = favs.filter((item, index, self) => index === self.findIndex((t) => t.id === item.id));

  return (
    <>
      <h2>Dentistas Favoritos</h2>
      
      {filteredFavs.length > 0 ? (
        <div className="card-grid"> 
          {filteredFavs.map(item => (
   
            <Card key={item.id} data={item} />
          ))}
        </div>
      ) : (
        <p className="no-favs">No hay favoritos agregados.</p>
      )}
      
      <button onClick={() => navigate("/")} className="btn-back">Volver</button>
    </>
  );
};

export default Favs;


