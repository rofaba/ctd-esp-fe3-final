import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/ContextGlobal";
import TempAlert from "./TempAlert"; // Asegúrate de tener la ruta correcta

const Card = ({ data }) => {
  const { theme, setFavs, favs } = useContextGlobal();
  const [active, setActive] = useState(false);
  const [tempAlertMessage, setTempAlertMessage] = useState(""); // Nuevo estado para el mensaje temporal

  useEffect(() => {
    setActive(favs.includes(data));
  }, [favs, data]);

  const toggleFav = () => {
    if (active) {
      setFavs(favs.filter(fav => fav.id !== data.id));
      setTempAlertMessage(`Dentista ${data.name} eliminado de favoritos`); // Actualiza el mensaje temporal
    } else {
      setFavs([...favs, data]);
      setTempAlertMessage(`Dentista ${data.name} agregado como favoritos`); // Actualiza el mensaje temporal
    }
  };

  return (
    <>
      <div className="card">
        <Link to={`/detail/${data.id}`} key={data.id} className="link-card">
          <img src="./images/doctor.jpg" alt="img-doc" className="img-doc" />
          <h4>{data.name}</h4>
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


