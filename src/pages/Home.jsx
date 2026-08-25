import camera from "../assets/camera.png"
import moca from "../assets/moca.png"
import salavint from "../assets/salavint.png"
import tenis from "../assets/tenis.png"
import vintagel from "../assets/vintagel.png"
import polaroid from "../assets/polaroid.png"

export default function Home () {
    return (
        <main className="flex min-h-[calc(100svh-73px)] items-center justify-center bg-[#c25930] px-3 py-4 sm:px-6 sm:py-6">
            <div className="mx-auto grid aspect-[1.2] w-full max-w-[820px] grid-cols-[1.17fr_0.745fr_0.745fr_1fr] grid-rows-[1.2fr_0.42fr_1fr] gap-2 sm:gap-3">

                <img className="col-start-1 row-span-3 row-start-1 h-full w-full rounded-sm border-2 border-[#e7bd3f] object-cover sm:border-4" src={polaroid} alt="Sala vintage com jukebox" />
                <img className=" col-start-2 col-span-2 row-start-1 h-full w-full rounded-sm border-2 border-[#e7bd3f] object-cover sm:border-4" src={vintagel} alt="Sala com televisão e objetos vintage" />
                <div className="col-start-2 col-span-2 row-start-2 flex items-center justify-center rounded-lg border-2 border-[#a92f2b] bg-[#ead9b8] px-2 sm:rounded-xl sm:border-4">
                    <h1 className="m-0 font-serif text-lg font-bold text-[#a92f2b] sm:text-4xl">CineFita</h1>
                </div>
                <img className="col-start-2 row-start-3 h-full w-full rounded-sm border-4 border-[#e7bd3f] object-cover" src={tenis} alt="Tênis vermelho sobre aparelho de som" />
                <img className="col-start-3 row-start-3 h-full w-full rounded-sm border-2 border-[#e7bd3f] object-cover sm:border-4" src={moca} alt="Câmera de vídeo vintage" />
                <img className="col-start-4 row-span-3 row-start-1 h-full w-full rounded-sm border-2 border-[#e7bd3f] object-cover sm:border-4" src={salavint} alt="Sala vintage com jukebox" />
            </div>
        </main>
    )
}
