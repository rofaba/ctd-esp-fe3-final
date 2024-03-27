
import React from "react";  
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/ContextGlobal";
import ThemeToggleButton from './ThemeToggleButton';


const Navbar = () => {
  const { theme } = useContextGlobal();

  return (
    <nav className="nav" id={theme}>
      <div className="links-navbar">
      <img className="navbar-logo" src="./images/logo_dental.jpg" alt="logo dental" />
  
        <Link to="/"> Home</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/favs">Favoritos</Link>
      </div>
      <ThemeToggleButton />
    </nav>
  );
};

export default React.memo(Navbar);

