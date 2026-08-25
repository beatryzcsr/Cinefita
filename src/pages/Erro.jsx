import { Link } from "react-router-dom";

export default function Erro() {
	return (
		<main className="flex min-h-full flex-1 items-center justify-center bg-[#c25930] px-4 py-12 text-center text-[#4A3525]"> 
			<section className="w-full max-w-md rounded-2xl border-4 border-[#a92f2b] bg-[#e6d5b8] p-8 shadow-lg sm:p-10">
				<p className="mb-3 font-serif text-6xl font-bold text-[#a92f2b]">404</p>
				<h1 className="font-serif text-2xl font-bold text-[#a92f2b] sm:text-3xl">Página não encontrada</h1>
				<p className="mt-3 text-sm sm:text-base">A página que você procura não existe ou foi movida.</p>
				<Link to="/" className="mt-6 inline-block rounded-full bg-[#a92f2b] px-6 py-3 font-serif font-bold text-[#e5a93c] transition hover:bg-[#862321]">
					Voltar para o início
				</Link>
			</section>
		</main>
	)
}
