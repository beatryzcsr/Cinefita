import logo from "../assets/logo.png"
import elemento1 from "../assets/elemento1.png"
import elemento2 from "../assets/elemento2.png"
import { Link } from "react-router-dom"
import { GiRotaryPhone } from "react-icons/gi"
import { FaInstagram, FaTiktok, FaEnvelope, FaPhoneAlt } from "react-icons/fa"

export default function Contato () {
    return (
        <main className="relative min-h-screen overflow-x-hidden bg-[#E6D5B8] flex flex-col pb-[420px] font-serif sm:pb-[460px]">

            {/* imagens */}

            <div className="flex w-full items-start justify-center gap-2 px-3 sm:px-8 md:justify-between md:px-12">
            <img src={logo} alt="Cinefita Locadora" className="mt-6 h-36 w-36 object-contain sm:mt-10 sm:h-52 sm:w-52 md:ml-8 md:h-64 md:w-64" />

            <img src={elemento1} alt="elemento1" className="hidden md:mt-15 md:block md:h-130 md:w-170" />
           </div>

           {/* titulo principal */}

           <div className="absolute top-72 z-10 flex items-center sm:top-80 md:top-85">
             <img src={elemento2} alt="elemento1" className="h-16 w-28 sm:h-20 sm:w-40 md:h-24 md:w-47" />
             <div className="flex flex-col">
               <h1 className="text-4xl text-[#A82C24] font-bold sm:text-5xl md:text-6xl">CONTATO</h1>
               <p className="mt-2 w-[calc(100vw-9rem)] max-w-[32rem] text-left text-sm text-[#4A3525] sm:text-base">Seja bem-vindo ao nosso túnel do tempo! Ficou com dúvidas sobre nosso catálogo, procurando um clássico dos anos 80 ou teve problemas com seu videocassete? Nossa equipe está pronta para ajudar!</p>
             </div>
           </div>

{/* retangulo de contato */}
 <div className="absolute left-1/2 top-120 z-10 flex h-auto min-h-90 w-[calc(100%-2rem)] max-w-[75rem] -translate-x-1/2 flex-col rounded-2xl border-5 bg-[#E6D5B8] text-[#4A3525] sm:top-125 md:top-130 md:flex-row">

    {/* divisao 1 do retangulo */}
  <div className="w-full border-b-3 pb-6 text-center md:w-110 md:border-b-0 md:border-r-3 md:pb-0">
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
  <div className="flex w-full flex-col items-center justify-center gap-5 px-5 py-8 text-center sm:px-8 md:w-190 md:py-0">
   <h2 className="text-xl font-bold tracking-widest sm:text-2xl">QUER REALIZAR UMA COMPRA?</h2>
    <p className="text-sm">Preencha nosso formulário para escolher seu produto.</p>
    <Link to="/formulario" className="rounded-lg bg-[#A82C24] px-6 py-3 font-bold text-[#E6D5B8] transition-colors hover:bg-[#85231d]">
      Ir para o formulário
    </Link>
   </div>
 </div>
            
        </main>
    )
}