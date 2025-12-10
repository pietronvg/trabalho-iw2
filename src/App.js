import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Tela1 from "./telas/tela1";
import Tela2 from "./telas/tela2";
import Tela3 from "./telas/tela3";
import Tela4 from "./telas/tela4";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: 20 }}>
        <Link to="/">Squirtle</Link> |{" "}
        <Link to="/tela2">Pikachu</Link> |{" "}
        <Link to="/tela3">Charmander</Link> |{" "}
        <Link to="/tela4">Bulbasaur</Link>
      </nav>

      <Routes>
        <Route path="/"      element={<Tela1/>}/>
        <Route path="/tela2" element={<Tela2/>}/>
        <Route path="/tela3" element={<Tela3/>}/>
        <Route path="/tela4" element={<Tela4/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
