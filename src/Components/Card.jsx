import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/ContextGlobal";

const Card = ({ data }) => {
  const { theme, setFavs, favs } = useContextGlobal();

  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(favs.includes(data));
  }, [favs, data]);

  const toggleFav = () => {
    if (active) {
      // Si el dentista ya está en favoritos, lo eliminamos
      setFavs(favs.filter(fav => fav.id !== data.id));
      alert(`Dentista ${data.name} eliminado de favoritos`);
    } else {
      // Si el dentista no está en favoritos, lo agregamos
      setFavs([...favs, data]);
      alert(`Dentista ${data.name} agregado como favoritos`);
    }
  };

  return (
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
  );
};

export default Card;

