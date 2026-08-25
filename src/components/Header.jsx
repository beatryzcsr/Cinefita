import { NavLink } from "react-router-dom";

const links = [
	{ to: "/", label: "Início" },
	{ to: "/produtos", label: "Filmes" },
	{ to: "/formulario", label: "Formulário" },
	{ to: "/sobre", label: "Sobre" },
	{ to: "/contato", label: "Contato" },
];

export default function Header() {
	return (
		<header className="site-header">
			<NavLink className="site-logo" to="/">Cinefita</NavLink>
			<nav aria-label="Navegação principal">
				{links.map((link) => (
					<NavLink
						key={link.to}
						to={link.to}
						className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
						end={link.to === "/"}
					>
						{link.label}
					</NavLink>
				))}
			</nav>
		</header>
	);
}
