import { useContextGlobal } from "../Components/utils/ContextGlobal";
import Card from "../Components/Card";
import { useNavigate } from "react-router-dom";
import { actions } from "../Components/utils/ContextGlobal";

const Favs = () => {
  const { state, dispatch } = useContextGlobal();
  const navigate = useNavigate();

  let filteredFavs = state.favs.filter((item, index, self) =>
    index === self.findIndex((t) => t.id === item.id)
  );

  const clearFavorites = () => {
    dispatch({ type: actions.CLEAR_FAVORITES });
  };
console.log(state.favs);

  return (
    <>
    <div className="favs-head">
      <h2>Dentistas Favoritos</h2>
      <button onClick={clearFavorites} className="favButton-all">
            Eliminar todos los favoritos
          </button>
    </div>
      
      {filteredFavs.length > 0 ? (
        <>
          <div className="card-grid">
            {filteredFavs.map((item) => (
              <Card key={item.id} data={item} />
            ))}
          </div>
         
        </>
      ) : (
        <p className="no-favs">No hay favoritos agregados.</p>
      )}
      <button onClick={() => navigate("/")} className="btn-back">
        Volver
      </button>
    </>
  );
};

export default Favs;