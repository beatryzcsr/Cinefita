import logo from "../assets/logo.png"
import elemento1 from "../assets/elemento1.png"
import elemento2 from "../assets/elemento2.png"
import { Link } from "react-router-dom"
import { GiRotaryPhone } from "react-icons/gi"
import { FaInstagram, FaTiktok, FaEnvelope, FaPhoneAlt } from "react-icons/fa"

export default function Contato () {
    return (
        <main className="relative min-h-screen bg-[#E6D5B8] flex flex-col pb-[420px]">

            {/* imagens */}

            <div className="flex w-full">
            <img src={logo} alt="Cinefita Locadora" className=" mt-11 ml-25 p-4 h-70 w-70 object-contain" />

            <img src={elemento1} alt="elemento1" className="ml-auto mt-15 h-130 w-170" /> 
           </div>

           {/* titulo principal */}

           <div className="absolute top-85 z-10 flex">
             <img src={elemento2} alt="elemento1" className=" h-24 w-47" /> 
           <h1 className="text-6xl text-[#A82C24] font-bold"> CONTATO </h1>
           </div>

           <p className="absolute top-103 z-10 w-130 text-center ml-15 text-[#4A3525]"> Seja bem-vindo ao nosso túnel do tempo! Ficou com dúvidas sobre nosso catálogo, procurando um clássico dos anos 80 ou teve problemas com seu videocassete? Nossa equipe está pronta para ajudar!
 </p>

{/* retangulo de contato */}
 <div className="absolute left-1/2 top-130 z-10 flex h-90 w-300 -translate-x-1/2 rounded-2xl border-5 bg-[#E6D5B8] text-[#4A3525]">

    {/* divisao 1 do retangulo */}
   <div className="border-r-3 w-110">
    <h2 className="flex items-center gap-2 font-bold text-2xl tracking-widest">
      <GiRotaryPhone aria-hidden="true" className="text-6xl m-3" />
      ENTRE EM CONTATO
    </h2>
    <p className="mx-auto border-b-2 px-4 pb-3 text-center text-sm text-[#4A3525] font-semibold">
      Sinta-se a vontade para nos contatar em qualquer um dos meios abaixo.
    </p>
{/* redes sociais */}
  <div className="flex flex-col items-center text-lg">
   <p className="flex w-full items-center justify-center gap-3 px-4 pt-4"><FaInstagram aria-hidden="true" />@Cinefita</p>
   <p className="flex w-full items-center justify-center gap-3 px-4 pt-4"><FaTiktok aria-hidden="true" />@Cinefita.oficial</p>
   <p className="flex w-full items-center justify-center gap-3 px-4 pt-4"><FaEnvelope aria-hidden="true" />cinefita@gmail.com</p>
   <p className="flex w-full items-center justify-center gap-3 px-4 pt-4"><FaPhoneAlt aria-hidden="true" />(00) 0000-0000</p>
    </div>
   </div>

   {/* segundo quadrante */}
   <div className="flex w-190 flex-col items-center justify-center gap-5 px-8 text-center">
    <h2 className="text-2xl font-bold tracking-widest">QUER REALIZAR UMA COMPRA?</h2>
    <p className="text-sm">Preencha nosso formulário para escolher seu produto.</p>
    <Link to="/formulario" className="rounded-lg bg-[#A82C24] px-6 py-3 font-bold text-[#E6D5B8] transition-colors hover:bg-[#85231d]">
      Ir para o formulário
    </Link>
   </div>
 </div>
            
        </main>
    )
}