const toggleFav = () => {
  
    const actionType = active ? actions.REMOVE_FAVORITE : actions.ADD_FAVORITE;
  
    dispatch({ type: actionType, payload: data.id });

    setActive(!active);
    const message = active
      ? `Dentista ${data.name} eliminado de favoritos`
      : `Dentista ${data.name} agregado como favorito`;
    setTempAlertMessage(message);
  };
  
  export default toggleFav;