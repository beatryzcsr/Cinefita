import sobre from "../assets/sobre.png";

export default function Sobre({}) {
    return (
        
    <div className="font-serif">

        {/* Sobre Nós */}
        <div className="bg-cover bg-center h-screen flex" 
        style={{ backgroundImage: `url(${sobre})` }}>
            <h1 className="text-7xl font-bold text-[#E6D5B8] mt-80 ml-130">Sobre Nós</h1>
        </div>

        {/* Nossa História */}
        <div className="bg-[#E6D5B8] h-120 text-[#C2593F]">
            <h2 className="text-5xl font-bold p-15">Nossa História</h2>
            <div className="flex p-15 gap-40 w-[70%] ml-50 text-xl">
                <p>A Cinefita nasceu para reunir em um só lugar filmes para todos os gostos e resgatar a sensação de escolher uma fita na locadora, levar para casa e transformar uma noite comum em uma sessão de cinema.</p>
                <p>Queremos trazer de volta a magia de uma época em que escolher o que assistir fazia parte da experiência, criando um espaço onde nostalgia e cinema se encontram.</p>
            </div>
        </div>
        
        {/* Nossa História */}
        <div className="bg-[#C2593F] h-120 text-[#E6D5B8]">
            <h2 className="text-5xl font-bold p-15">70-80s</h2>
            <div className="flex p-15 gap-40 w-[70%] ml-50 text-xl">
                <p>Escolhemos a estética dos anos 70 e 80 para homenagear a época em que ir à locadora fazia parte do ritual de assistir a um filme — das capas nas prateleiras às fitas VHS e às TVs de tubo.</p>
                <p>Na Cinefita, misturamos nostalgia e tecnologia para trazer essa experiência de volta, com um toque de De Volta para o Futuro. Do passado para o presente, uma fita de cada vez.</p>
            </div>
        </div>

    </div>

    )
}
