import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/ContextGlobal";

const Card = ({ data }) => {
  const { theme, setFavs, favs } = useContextGlobal();

  const [active, setActive] = useState(false);

  useEffect(() => {
    if (favs.includes(data)) {
      setActive(true)
    }
  },[favs, data])
  

  const addFav = () => {
    if (favs.includes(data)) {
      return null
    }
    setFavs([...favs, data]);
    alert(`dentista ${data.name} agregado como favoritos`)
  };

  return (
    <div className="card">
      <Link to={`/detail/${data.id}`} key={data.id} className="link-card">
        
        <img src="./images/doctor.jpg" alt="img-doc" className="img-doc" />
        <h4>{data.name}</h4>
        <h5>{data.username}</h5>
      </Link>
      <button
        onClick={() => {
          addFav();
          setActive(true)
        }}
        className={`favButton ${active ? "active" : ""}`}
        id={theme.theme}
      >
        Agregar a favoritos
      </button>
    </div>
  );
};

export default Card;
