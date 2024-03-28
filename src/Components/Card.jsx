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
    setActive(state.favs.some((fav) => fav.id === data.id));
  }, [state.favs, data]);

 
  const toggleFav = () => {
  
    const actionType = active ? actions.REMOVE_FAVORITE : actions.ADD_FAVORITE;
  
    dispatch({ type: actionType, payload: data.id });

    setActive(!active);
    const message = active
      ? `Dentista ${data.name} eliminado de favoritos`
      : `Dentista ${data.name} agregado como favorito`;
    setTempAlertMessage(message);
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
