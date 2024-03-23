/* Uso de async/await en fetchDentist: Se transformó la función getDentist a una versión async llamada fetchDentist dentro de un useEffect, lo que mejora la legibilidad y manejo de errores.
Memoización del valor del contexto con useMemo: Esto evita que los consumidores del contexto se rendericen innecesariamente debido a objetos de valor que cambian en cada render.
Optimización de useEffect para localStorage: Se dejó sin cambios, pero asegurándose de que las dependencias estén correctamente especificadas para evitar efectos innecesarios.
Cambio en el manejo de errores: Se añadió un manejo básico de errores en la petición de axios para una mejor depuración y estabilidad. */


import axios from "axios";
import React, { useReducer, useEffect, useState, createContext, useContext, useMemo } from "react";

export const initialState = { theme: "light" };

const reducer = (state, action) => {
  switch (action.type) {
    case "change_theme":
      return { theme: state.theme === "light" ? "dark" : "light" };
    default:
      throw new Error("Unhandled action type");
  }
};

export const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {
  const [theme, dispatch] = useReducer(reducer, initialState);
  const [dentist, setDentist] = useState([]);
  const [favs, setFavs] = useState([]);
  
  const KEY = "card.info";

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(favs));
  }, [favs]);

  useEffect(() => {
    const fetchDentist = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setDentist(response.data);
      } catch (error) {
        console.error("Failed to fetch dentist:", error);
      }
    };
    
    fetchDentist();
  }, []);

  const value = useMemo(() => ({
    dentist,
    theme,
    dispatch,
    favs,
    setFavs,
  }), [dentist, theme, favs]);

  return <ContextGlobal.Provider value={value}>{children}</ContextGlobal.Provider>;
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal);
