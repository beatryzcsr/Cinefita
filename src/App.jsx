import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contato from "./pages/Contato"
import Erro from "./pages/Erro"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Form from "./components/Form"


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/formulario" element={<Form />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/" element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path="*" element={<Erro />} />
      </Routes>
        <Footer />
    </BrowserRouter>
  );
}
