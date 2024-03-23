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
