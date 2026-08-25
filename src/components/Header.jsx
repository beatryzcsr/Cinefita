import { NavLink } from "react-router-dom";

const links = [
	{ to: "/", label: "Home" },
	{ to: "/sobre", label: "Sobre" },
	{ to: "/locacao", label: "Locação" },
	{ to: "/contato", label: "Contato" },
];

export default function Header() {
	return (
		<header className="bg-[#c25930] px-3 py-2 sm:px-4">
			<div className="mx-auto flex min-h-14 max-w-6xl items-center gap-4 rounded-2xl bg-[#e6d5b8] px-3 py-2 shadow-md sm:px-4">
				<NavLink className="shrink-0" to="/" aria-label="CineFita - Home">
					<img className="h-10 w-10 rounded-full object-cover sm:h-12 sm:w-12" src="/logo.png" alt="Logo CineFita" />
				</NavLink>
				<nav className="flex flex-1 flex-wrap items-center justify-evenly gap-x-2 gap-y-1" aria-label="Navegação principal">
					{links.map((link) => (
						<NavLink
							key={link.to}
							to={link.to}
							className={({ isActive }) => isActive ? "px-3 py-2 font-serif text-sm font-bold text-[#a92f2b] underline decoration-2 underline-offset-4 sm:text-base" : "px-3 py-2 font-serif text-sm font-bold text-[#a92f2b] no-underline transition-opacity hover:opacity-70 sm:text-base"}
							end={link.to === "/"}
						>
							{link.label}
						</NavLink>
					))}
				</nav>
				<NavLink className="rounded-full bg-[#a92f2b] px-5 py-2 font-serif text-sm font-bold text-[#e6d5b8] transition-colors hover:bg-[#862321] sm:px-7 sm:text-base" to="/login">
					Login
				</NavLink>
			</div>
		</header>
	);
}
