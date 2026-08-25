import vhs from "../assets/vhs.png"
import vhsi from "../assets/vhsi.png"

export default function Footer() {
	return (
		<footer className="mt-auto border-t border-zinc-200 bg-[#4a3525] px-4 py-6 text-zinc-300 sm:px-6 sm:py-8">
			<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:gap-8 sm:text-left">
				<img className="h-24 w-full max-w-52 object-contain sm:h-32 sm:w-52" src={vhs} alt="VHS Cinefita" />
				<div className="flex min-w-0 flex-1 flex-col items-center gap-2 font-serif sm:items-start">
					<p className="text-lg font-semibold text-white">CineFita</p>
					<p className="text-sm">Seu espaço para descobrir novos filmes.</p>
					<p className="text-sm">© 2026 Cinefita. Todos os direitos reservados.</p>
				</div>
				<img className="h-24 w-full max-w-52 object-contain sm:h-32 sm:w-52" src={vhsi} alt="VHS Cinefita" />
			</div>
		</footer>
	);
}

