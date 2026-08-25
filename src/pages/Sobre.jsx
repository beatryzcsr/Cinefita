import sobre from "../assets/sobre.png";

export default function Sobre({}) {
    return (
        
    <div className="font-serif">

        {/* Sobre Nós */}
        <div className="relative h-screen bg-cover bg-center" 
        style={{ backgroundImage: `url(${sobre})` }}>
            <h1 className="absolute left-[46%] top-[47%] -translate-x-1/2 -translate-y-1/2 text-center text-3xl font-bold text-[#E6D5B8] sm:text-6xl md:text-7xl">Sobre Nós</h1>
        </div>

        {/* Nossa História */}
        <div className="bg-[#E6D5B8] px-6 py-10 text-[#C2593F] sm:p-15">
            <h2 className="text-4xl font-bold sm:text-5xl">Nossa História</h2>
            <div className="flex w-full flex-col gap-6 pt-6 text-lg sm:gap-10 sm:pt-10 sm:text-xl md:flex-row">
                <p>A Cinefita nasceu para reunir em um só lugar filmes para todos os gostos e resgatar a sensação de escolher uma fita na locadora, levar para casa e transformar uma noite comum em uma sessão de cinema.</p>
                <p>Queremos trazer de volta a magia de uma época em que escolher o que assistir fazia parte da experiência, criando um espaço onde nostalgia e cinema se encontram.</p>
            </div>
        </div>
        
        {/* Nossa História */}
        <div className="bg-[#C2593F] px-6 py-10 text-[#E6D5B8] sm:p-15">
            <h2 className="text-4xl font-bold sm:text-5xl">70-80s</h2>
            <div className="flex w-full flex-col gap-6 pt-6 text-lg sm:gap-10 sm:pt-10 sm:text-xl md:flex-row">
                <p>Escolhemos a estética dos anos 70 e 80 para homenagear a época em que ir à locadora fazia parte do ritual de assistir a um filme — das capas nas prateleiras às fitas VHS e às TVs de tubo.</p>
                <p>Na Cinefita, misturamos nostalgia e tecnologia para trazer essa experiência de volta, com um toque de De Volta para o Futuro. Do passado para o presente, uma fita de cada vez.</p>
            </div>
        </div>

    </div>

    )
}
