import vhs from "../assets/vhs.png"
import vhsi from "../assets/vhsi.png"

export default function Footer() {
	return (
		<footer className=" mt-auto border-t border-zinc-200 bg-[#4a3525]  py-8 text-zinc-300 flex ">
			<div className="mx-auto flex max-w-6xl items-start justify-between gap-6 text-left ">
				<div className="flex items-start gap-10">
					<img className="h-50 w-90 object-contain" src={vhs} alt="VHS Cinefita" />
					<div className="flex flex-col gap-4 justify-center">
						<p className="flex justify-center text-lg font-semibold text-white font-serif">CineFita</p>
						<p className="flex justify-center text-sm font-serif">Seu espaço para descobrir novos filmes.</p>
				        <p className="flex justify-center text-right text-sm font-serif">© 2026 Cinefita. Todos os direitos reservados.</p>
					</div>
                    <img className="h-50 w-90 object-contain" src={vhsi} alt="VHS Cinefita" />
				</div>
			</div>
		</footer>
	);
}

