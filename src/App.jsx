import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contato from "./pages/Contato"
import Erro from "./pages/Erro"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Filmes from "./pages/Filmes"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Form from "./pages/Form"

//rotas
export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-1 flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path="/filmes" element={<Filmes />} />
            <Route path="/locacao" element={<Form />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element={<Erro />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
