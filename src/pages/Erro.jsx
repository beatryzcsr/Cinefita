import { Link } from "react-router-dom"

export default function Erro() {
	return (
		<main className="min-h-screen bg-[#E6D5B8] p-8 text-center text-[#4A3525]">
			<h1 className="text-4xl font-bold text-[#A82C24]">Página não encontrada</h1>
			<Link to="/" className="mt-4 inline-block underline">
				Voltar para o início
			</Link>
		</main>
	)
}
