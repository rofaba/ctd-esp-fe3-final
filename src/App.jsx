import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Detail from "./Routes/Detail";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import { useContextGlobal } from "./Components/utils/ContextGlobal";
import Error404 from "./Components/Error404";

function App() {
  const { state } = useContextGlobal();
console.log(state.theme);
  useEffect(() => {
    // Asume que `state.theme` es la cadena de texto del tema actual
    document.body.className = state.theme;
  }, [state.theme]); // Se ejecuta cada vez que el tema cambia

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;