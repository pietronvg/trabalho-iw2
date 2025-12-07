import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import tela1 from "./telas/tela1/tela1";
import tela2 from "./telas/tela2/tela2";
import tela3 from "./telas/tela3/tela3";
import tela4 from "./telas/tela4/tela4";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: 20 }}>
        <Link to="/">Tela 1</Link> |{" "}
        <Link to="/tela2">Tela 2</Link> |{" "}
        <Link to="/tela3">Tela 3</Link> |{" "}
        <Link to="/tela4">Tela 4</Link>
      </nav>

      <Routes>
        <Route path="/" element={<tela1/>}/>
        <Route path="/tela2" element={<tela2/>}/>
        <Route path="/tela2" element={<tela3/>}/>
        <Route path="/tela3" element={<tela4/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
