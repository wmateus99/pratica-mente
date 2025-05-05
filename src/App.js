import "./App.css";
import NavMenu from "./components/nav_menu/NavMenu"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Inicio from "./pages/Inicio"
import Atividades from "./pages/Atividades"
import Textos from "./pages/Textos"
import Auxiliares from "./pages/Auxiliares"
import Provas from "./pages/Provas"
import Sobre from "./pages/Sobre"

function App() {
    return (
    <Router>
        <NavMenu/>

        <Routes>
            <Route exact path="/" element={<Inicio/>}/>
            <Route exact path="/atividades" element={<Atividades/>}/>
            <Route exact path="/textos" element={<Textos/>}/>
            <Route exact path="/auxiliares" element={<Auxiliares/>}/>
            <Route exact path="/provas" element={<Provas/>}/>
            <Route exact path="/sobre" element={<Sobre/>}/>
        </Routes>
    </Router>
);
}

export default App;
