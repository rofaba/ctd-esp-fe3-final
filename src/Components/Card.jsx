import { useContextGlobal } from "./utils/ContextGlobal";
import TempAlert from "./TempAlert";
import { actions } from "./utils/ContextGlobal";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Card = ({ data }) => {
  const { state, dispatch } = useContextGlobal();
  const [active, setActive] = useState(false);
  const [tempAlertMessage, setTempAlertMessage] = useState("");

  useEffect(() => {
    const isFav = state.favs.some((fav) => fav.id === data.id);
    setActive(isFav);
  }, [state.favs, data]);


  const addToFavorites = () => {
    console.log("Agregando a favoritos:", data);
    dispatch({ type: actions.ADD_FAVORITE, payload: data });
    setTempAlertMessage(`Dentista ${data.name} agregado a favoritos`);
    setActive(true);
  };
  
  const removeFromFavorites = () => {
    console.log("Eliminando de favoritos:", data);
    dispatch({ type: actions.REMOVE_FAVORITE, payload: data.id }); 
    setTempAlertMessage(`Dentista ${data.name} eliminado de favoritos`);
    setActive(false);
  };
  
  const toggleFav = () => {
    if (active) {
      removeFromFavorites();
    } else {
      addToFavorites();
    }
  };

  return (
    <>
      <div className="card">
        <Link to={`/detail/${data.id}`} className="card-container">
          <img src="./images/doctor.jpg" alt={`Dentista ${data.name}`} className="img-doc" />
          <h5>{data.name}</h5>
          <h5>{data.username}</h5>
        </Link>
        <button onClick={toggleFav} className={`favButton ${active ? "removeFav" : ""}`}>
          {active ? "Eliminar de favoritos" : "Agregar a favoritos"}
        </button>
      </div>
      {tempAlertMessage && <TempAlert message={tempAlertMessage} duration={2000} />}
    </>
  );
};

export default Card;
