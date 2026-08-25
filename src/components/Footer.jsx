

export default function Footer() {
	return (
		<footer className="mt-auto border-t border-zinc-200 bg-zinc-950 px-6 py-8 text-zinc-300">
			<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
				<div>
					<p className="text-lg font-semibold text-white">Cinefita</p>
					<p className="text-sm">Seu espaço para descobrir novos filmes.</p>
				</div>
				<p className="text-sm">© 2026 Cinefita. Todos os direitos reservados.</p>
			</div>
		</footer>
	);
}


// mask-[<value>]