import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/ContextGlobal";

const Navbar = () => {
  const { dispatch, theme } = useContextGlobal();

  return (
    <nav className="nav" id={theme}>
     
        <div className="links-navbar">
        <Link to="/">Home</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/favs">Favoritos</Link>
        </div>
     
      
      <button className="btn-theme" onClick={() => dispatch({ type: "change_theme" })}>
        Change theme
      </button>
    </nav>
  );
};

export default React.memo(Navbar);
