import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/ContextGlobal";
import TempAlert from "./TempAlert"; 

const Card = ({ data }) => {
  const { theme, setFavs, favs } = useContextGlobal();
  const [active, setActive] = useState(false);
  const [tempAlertMessage, setTempAlertMessage] = useState("");

  useEffect(() => {
    setActive(favs.includes(data));
  }, [favs, data]);

  const toggleFav = () => {
    if (active) {
      setFavs(favs.filter(fav => fav.id !== data.id));
      setTempAlertMessage(`Dentista ${data.name} eliminado de favoritos`); 
    } else {
      setFavs([...favs, data]);
      setTempAlertMessage(`Dentista ${data.name} agregado como favoritos`); 
    }
  };

  return (
    <>
      <div className="card">
        <Link to={`/detail/${data.id}`} key={data.id} className="card-container">
          <img src="./images/doctor.jpg" alt="imagen-dentista" className="img-doc" />
          <h5>{data.name}</h5>
          <h5>{data.username}</h5>
        </Link>
        <button
          onClick={toggleFav}
          className={`favButton ${active ? "removeFav" : ""}`}
          id={theme.theme}
        >
          {active ? "Eliminar de favoritos" : "Agregar a favoritos"}
        </button>
      </div>
      {tempAlertMessage && <TempAlert message={tempAlertMessage} duration={3000} />}
    </>
  );
};

export default Card;


