import img from '/public/Ana.png'
import img2 from '/public/Rafael.png'
import img3 from '/public/Carolina.png'
import img4 from '/public/Beatriz.png'
import img5 from '/public/Felipe.png'
import img6 from '/public/Gabriel.png'
import img7 from '/public/Lucas.png'
import img8 from '/public/Mariana.png'
import img10 from '/public/verde1.png'
import img11 from '/public/verde2.png'
import img12 from '/public/verde3.png'
import img13 from '/public/verde4.png'
import img14 from '/public/verde5.png'
import img15 from '/public/verde6.png'
import img16 from '/public/verde7.png'
import img17 from '/public/verde8.png'
import img18 from '/public/verde9.png'
import img19 from '/public/verde10.png'
import { SiAnimalplanet } from "react-icons/si";
import { AiFillMedicineBox } from "react-icons/ai";

// DISNEY

// filmes principais do estúdio
const disney_filmesp = [
  {
    nome: 'O Rei Leão',
    sinopse: 'Simba precisa assumir seu lugar como rei após enfrentar uma grande perda.',
    tag: 'Animação',
    diretor: 'Roger Allers e Rob Minkoff',
    atores_principais: 'Matthew Broderick, Jeremy Irons e James Earl Jones',
    image: ''
  },
  {
    nome: 'Frozen',
    sinopse: 'Anna parte em uma jornada para encontrar sua irmã Elsa e salvar seu reino.',
    tag: 'Fantasia',
    diretor: 'Chris Buck e Jennifer Lee',
    atores_principais: 'Kristen Bell, Idina Menzel e Josh Gad',
    image: ''
  },
  {
    nome: 'Aladdin',
    sinopse: 'Um jovem encontra uma lâmpada mágica e ganha a chance de mudar sua vida.',
    tag: 'Fantasia',
    diretor: 'Ron Clements e John Musker',
    atores_principais: 'Scott Weinger, Robin Williams e Linda Larkin',
    image: ''
  },
  {
    nome: 'A Bela e a Fera',
    sinopse: 'Uma jovem encontra uma fera amaldiçoada e descobre o verdadeiro significado do amor.',
    tag: 'Romance',
    diretor: 'Gary Trousdale e Kirk Wise',
    atores_principais: 'Paige O’Hara, Robby Benson e Jerry Orbach',
    image: ''
  }
];

// filmes lançados recentemente
const disney_filmesr = [
  {
    nome: 'Moana 2',
    sinopse: 'Moana retorna ao oceano para enfrentar uma nova aventura ao lado de Maui.',
    tag: 'Animação',
    diretor: 'David Derrick Jr.',
    atores_principais: 'Auli‘i Cravalho, Dwayne Johnson e Hualalai Chung',
    image: ''
  },
  {
    nome: 'Mufasa: O Rei Leão',
    sinopse: 'A história mostra a origem de Mufasa e sua trajetória até se tornar rei.',
    tag: 'Aventura',
    diretor: 'Barry Jenkins',
    atores_principais: 'Aaron Pierre, Kelvin Harrison Jr. e Beyoncé',
    image: ''
  },
  {
    nome: 'Lilo & Stitch',
    sinopse: 'Uma garota havaiana cria uma amizade inesperada com uma criatura alienígena.',
    tag: 'Fantasia',
    diretor: 'Dean Fleischer Camp',
    atores_principais: 'Maia Kealoha, Sydney Agudong e Chris Sanders',
    image: ''
  }
];


// PIXAR

// filmes principais do estúdio
const pixar_filmesp = [
  {
    nome: 'Toy Story',
    sinopse: 'Brinquedos ganham vida quando seus donos não estão por perto.',
    tag: 'Animação',
    diretor: 'John Lasseter',
    atores_principais: 'Tom Hanks, Tim Allen e Don Rickles',
    image: ''
  },
  {
    nome: 'Procurando Nemo',
    sinopse: 'Um peixe atravessa o oceano para encontrar seu filho desaparecido.',
    tag: 'Aventura',
    diretor: 'Andrew Stanton',
    atores_principais: 'Albert Brooks, Ellen DeGeneres e Alexander Gould',
    image: ''
  },
  {
    nome: 'Os Incríveis',
    sinopse: 'Uma família de super-heróis precisa voltar à ação para salvar o mundo.',
    tag: 'Super-herói',
    diretor: 'Brad Bird',
    atores_principais: 'Craig T. Nelson, Holly Hunter e Samuel L. Jackson',
    image: ''
  },
  {
    nome: 'Up: Altas Aventuras',
    sinopse: 'Um idoso viaja para a América do Sul levando sua casa presa a balões.',
    tag: 'Aventura',
    diretor: 'Pete Docter',
    atores_principais: 'Ed Asner, Jordan Nagai e Christopher Plummer',
    image: ''
  }
];

// filmes lançados recentemente
const pixar_filmesr = [
  {
    nome: 'Divertida Mente 2',
    sinopse: 'Riley cresce e novas emoções começam a controlar sua mente durante a adolescência.',
    tag: 'Animação',
    diretor: 'Kelsey Mann',
    atores_principais: 'Amy Poehler, Maya Hawke e Ayo Edebiri',
    image: ''
  },
  {
    nome: 'Elio',
    sinopse: 'Um garoto é levado ao espaço e acaba sendo confundido com o líder da Terra.',
    tag: 'Ficção',
    diretor: 'Adrian Molina',
    atores_principais: 'Yonas Kibreab, Zoe Saldaña e Brad Garrett',
    image: ''
  },
  {
    nome: 'Toy Story 5',
    sinopse: 'Woody, Buzz e seus amigos enfrentam uma nova aventura em um mundo tecnológico.',
    tag: 'Animação',
    diretor: 'Andrew Stanton',
    atores_principais: 'Tom Hanks, Tim Allen e Joan Cusack',
    image: ''
  }
];


// MARVEL STUDIOS

// filmes principais do estúdio
const marvel_filmesp = [
  {
    nome: 'Homem de Ferro',
    sinopse: 'Tony Stark constrói uma armadura tecnológica e se transforma em super-herói.',
    tag: 'Super-herói',
    diretor: 'Jon Favreau',
    atores_principais: 'Robert Downey Jr., Gwyneth Paltrow e Jeff Bridges',
    image: ''
  },
  {
    nome: 'Os Vingadores',
    sinopse: 'Heróis da Marvel se unem para impedir uma ameaça que pode destruir a Terra.',
    tag: 'Super-herói',
    diretor: 'Joss Whedon',
    atores_principais: 'Robert Downey Jr., Chris Evans e Scarlett Johansson',
    image: ''
  },
  {
    nome: 'Pantera Negra',
    sinopse: 'T’Challa precisa proteger Wakanda e defender seu povo de uma nova ameaça.',
    tag: 'Super-herói',
    diretor: 'Ryan Coogler',
    atores_principais: 'Chadwick Boseman, Michael B. Jordan e Lupita Nyong’o',
    image: ''
  },
  {
    nome: 'Vingadores: Ultimato',
    sinopse: 'Os heróis restantes tentam reverter as consequências do ataque de Thanos.',
    tag: 'Super-herói',
    diretor: 'Anthony e Joe Russo',
    atores_principais: 'Robert Downey Jr., Chris Evans e Mark Ruffalo',
    image: ''
  }
];

// filmes lançados recentemente
const marvel_filmesr = [
  {
    nome: 'Deadpool & Wolverine',
    sinopse: 'Deadpool precisa convencer Wolverine a ajudá-lo em uma missão perigosa.',
    tag: 'Super-herói',
    diretor: 'Shawn Levy',
    atores_principais: 'Ryan Reynolds, Hugh Jackman e Emma Corrin',
    image: ''
  },
  {
    nome: 'Capitão América: Admirável Mundo Novo',
    sinopse: 'Sam Wilson assume o escudo e enfrenta uma ameaça internacional.',
    tag: 'Super-herói',
    diretor: 'Julius Onah',
    atores_principais: 'Anthony Mackie, Harrison Ford e Danny Ramirez',
    image: ''
  },
  {
    nome: 'Thunderbolts*',
    sinopse: 'Um grupo de anti-heróis recebe uma missão que pode mudar seus destinos.',
    tag: 'Super-herói',
    diretor: 'Jake Schreier',
    atores_principais: 'Florence Pugh, Sebastian Stan e David Harbour',
    image: ''
  }
];


// UNIVERSAL PICTURES

// filmes principais do estúdio
const universal_filmesp = [
  {
    nome: 'Jurassic Park',
    sinopse: 'Um parque com dinossauros recriados geneticamente perde o controle de suas criaturas.',
    tag: 'Aventura',
    diretor: 'Steven Spielberg',
    atores_principais: 'Sam Neill, Laura Dern e Jeff Goldblum',
    image: ''
  },
  {
    nome: 'Tubarão',
    sinopse: 'Um enorme tubarão ameaça uma cidade costeira e provoca uma caçada perigosa.',
    tag: 'Suspense',
    diretor: 'Steven Spielberg',
    atores_principais: 'Roy Scheider, Robert Shaw e Richard Dreyfuss',
    image: ''
  },
  {
    nome: 'De Volta para o Futuro',
    sinopse: 'Um adolescente viaja acidentalmente ao passado usando uma máquina do tempo.',
    tag: 'Ficção',
    diretor: 'Robert Zemeckis',
    atores_principais: 'Michael J. Fox, Christopher Lloyd e Lea Thompson',
    image: ''
  },
  {
    nome: 'Meu Malvado Favorito',
    sinopse: 'Um vilão adota três meninas e começa a descobrir o lado divertido da família.',
    tag: 'Animação',
    diretor: 'Pierre Coffin e Chris Renaud',
    atores_principais: 'Steve Carell, Jason Segel e Russell Brand',
    image: ''
  }
];

// filmes lançados recentemente
const universal_filmesr = [
  {
    nome: 'Jurassic World: Recomeço',
    sinopse: 'Uma equipe viaja para uma ilha perigosa em busca de material genético de dinossauros.',
    tag: 'Aventura',
    diretor: 'Gareth Edwards',
    atores_principais: 'Scarlett Johansson, Mahershala Ali e Jonathan Bailey',
    image: ''
  },
  {
    nome: 'Como Treinar o Seu Dragão',
    sinopse: 'Soluço cria uma amizade com um dragão e desafia as tradições de seu povo.',
    tag: 'Fantasia',
    diretor: 'Dean DeBlois',
    atores_principais: 'Mason Thames, Nico Parker e Gerard Butler',
    image: ''
  },
  {
    nome: 'O Robô Selvagem',
    sinopse: 'Um robô inteligente precisa sobreviver em uma ilha e aprender a viver entre animais.',
    tag: 'Animação',
    diretor: 'Chris Sanders',
    atores_principais: 'Lupita Nyong’o, Pedro Pascal e Kit Connor',
    image: ''
  },
  {
    nome: 'Wicked',
    sinopse: 'Duas jovens bruxas se tornam amigas enquanto descobrem seus próprios caminhos.',
    tag: 'Musical',
    diretor: 'Jon M. Chu',
    atores_principais: 'Cynthia Erivo, Ariana Grande e Jonathan Bailey',
    image: ''
  }
];


// PARAMOUNT PICTURES

// filmes principais do estúdio
const paramount_filmesp = [
  {
    nome: 'O Poderoso Chefão',
    sinopse: 'Uma família mafiosa luta para manter seu poder e controlar seus negócios.',
    tag: 'Crime',
    diretor: 'Francis Ford Coppola',
    atores_principais: 'Marlon Brando, Al Pacino e James Caan',
    image: ''
  },
  {
    nome: 'Forrest Gump',
    sinopse: 'Um homem simples vive acontecimentos importantes da história dos Estados Unidos.',
    tag: 'Drama',
    diretor: 'Robert Zemeckis',
    atores_principais: 'Tom Hanks, Robin Wright e Gary Sinise',
    image: ''
  },
  {
    nome: 'Transformers',
    sinopse: 'Robôs alienígenas chegam à Terra e entram em uma guerra que envolve humanos.',
    tag: 'Ação',
    diretor: 'Michael Bay',
    atores_principais: 'Shia LaBeouf, Megan Fox e Josh Duhamel',
    image: ''
  },
  {
    nome: 'Missão: Impossível',
    sinopse: 'Um agente secreto realiza missões perigosas para impedir ameaças internacionais.',
    tag: 'Ação',
    diretor: 'Brian De Palma',
    atores_principais: 'Tom Cruise, Jon Voight e Emmanuelle Béart',
    image: ''
  }
];

// filmes lançados recentemente
const paramount_filmesr = [
  {
    nome: 'Gladiador II',
    sinopse: 'Anos após a queda de Maximus, novos guerreiros lutam pelo futuro de Roma.',
    tag: 'Ação',
    diretor: 'Ridley Scott',
    atores_principais: 'Paul Mescal, Denzel Washington e Pedro Pascal',
    image: ''
  },
  {
    nome: 'Sonic 3',
    sinopse: 'Sonic, Knuckles e Tails enfrentam um novo inimigo extremamente poderoso.',
    tag: 'Aventura',
    diretor: 'Jeff Fowler',
    atores_principais: 'Jim Carrey, Ben Schwartz e Keanu Reeves',
    image: ''
  },
  {
    nome: 'Transformers One',
    sinopse: 'A origem da amizade entre Optimus Prime e Megatron é revelada.',
    tag: 'Animação',
    diretor: 'Josh Cooley',
    atores_principais: 'Chris Hemsworth, Brian Tyree Henry e Scarlett Johansson',
    image: ''
  }
];


// SONY PICTURES

// filmes principais do estúdio
const sony_filmesp = [
  {
    nome: 'Homem-Aranha',
    sinopse: 'Peter Parker ganha poderes e precisa aprender a utilizá-los para combater o crime.',
    tag: 'Super-herói',
    diretor: 'Sam Raimi',
    atores_principais: 'Tobey Maguire, Kirsten Dunst e Willem Dafoe',
    image: ''
  },
  {
    nome: 'Jumanji',
    sinopse: 'Um jogo mágico transporta seus jogadores para uma perigosa aventura.',
    tag: 'Aventura',
    diretor: 'Joe Johnston',
    atores_principais: 'Robin Williams, Kirsten Dunst e David Alan Grier',
    image: ''
  },
  {
    nome: 'Homens de Preto',
    sinopse: 'Agentes secretos protegem a Terra de alienígenas e mantêm sua existência em segredo.',
    tag: 'Ficção',
    diretor: 'Barry Sonnenfeld',
    atores_principais: 'Will Smith, Tommy Lee Jones e Linda Fiorentino',
    image: ''
  },
  {
    nome: 'Karate Kid',
    sinopse: 'Um jovem aprende artes marciais com um mestre e enfrenta seus próprios desafios.',
    tag: 'Drama',
    diretor: 'John G. Avildsen',
    atores_principais: 'Ralph Macchio, Pat Morita e Elisabeth Shue',
    image: ''
  }
];

// filmes lançados recentemente
const sony_filmesr = [
  {
    nome: 'Venom: A Última Rodada',
    sinopse: 'Eddie e Venom precisam fugir enquanto enfrentam novas ameaças perigosas.',
    tag: 'Super-herói',
    diretor: 'Kelly Marcel',
    atores_principais: 'Tom Hardy, Chiwetel Ejiofor e Juno Temple',
    image: ''
  },
  {
    nome: 'Bad Boys: Até o Fim',
    sinopse: 'Dois policiais precisam limpar seus nomes enquanto enfrentam uma nova conspiração.',
    tag: 'Ação',
    diretor: 'Adil El Arbi e Bilall Fallah',
    atores_principais: 'Will Smith, Martin Lawrence e Vanessa Hudgens',
    image: ''
  },
  {
    nome: 'Kraven: O Caçador',
    sinopse: 'Kraven enfrenta perigosos inimigos enquanto tenta provar seu valor como caçador.',
    tag: 'Ação',
    diretor: 'J. C. Chandor',
    atores_principais: 'Aaron Taylor-Johnson, Ariana DeBose e Fred Hechinger',
    image: ''
  }
];


// WARNER BROS.

// filmes principais do estúdio
const warner_filmesp = [
  {
    nome: 'Harry Potter e a Pedra Filosofal',
    sinopse: 'Um garoto descobre que é bruxo e começa seus estudos em Hogwarts.',
    tag: 'Fantasia',
    diretor: 'Chris Columbus',
    atores_principais: 'Daniel Radcliffe, Emma Watson e Rupert Grint',
    image: ''
  },
  {
    nome: 'O Senhor dos Anéis',
    sinopse: 'Um hobbit recebe a missão de destruir um poderoso anel antes que o mal retorne.',
    tag: 'Fantasia',
    diretor: 'Peter Jackson',
    atores_principais: 'Elijah Wood, Ian McKellen e Viggo Mortensen',
    image: ''
  },
  {
    nome: 'Batman: O Cavaleiro das Trevas',
    sinopse: 'Batman enfrenta o Coringa enquanto tenta proteger Gotham de uma onda de crimes.',
    tag: 'Ação',
    diretor: 'Christopher Nolan',
    atores_principais: 'Christian Bale, Heath Ledger e Aaron Eckhart',
    image: ''
  },
  {
    nome: 'Matrix',
    sinopse: 'Um programador descobre que a realidade em que vive é uma enorme simulação.',
    tag: 'Ficção',
    diretor: 'Lana Wachowski e Lilly Wachowski',
    atores_principais: 'Keanu Reeves, Laurence Fishburne e Carrie-Anne Moss',
    image: ''
  }
];

// filmes lançados recentemente
const warner_filmesr = [
  {
    nome: 'Duna: Parte Dois',
    sinopse: 'Paul Atreides se une aos Fremen enquanto busca vingança contra seus inimigos.',
    tag: 'Ficção',
    diretor: 'Denis Villeneuve',
    atores_principais: 'Timothée Chalamet, Zendaya e Austin Butler',
    image: ''
  },
  {
    nome: 'Os Fantasmas Ainda se Divertem',
    sinopse: 'A família Deetz retorna à sua antiga casa e acaba envolvendo-se novamente com Beetlejuice.',
    tag: 'Fantasia',
    diretor: 'Tim Burton',
    atores_principais: 'Michael Keaton, Winona Ryder e Jenna Ortega',
    image: ''
  },
  {
    nome: 'Superman',
    sinopse: 'Superman precisa equilibrar sua vida humana enquanto protege o mundo de novas ameaças.',
    tag: 'Super-herói',
    diretor: 'James Gunn',
    atores_principais: 'David Corenswet, Rachel Brosnahan e Nicholas Hoult',
    image: ''
  }
];

function Filmes() {
  return (
    <section id="home" className="relative z-10 min-h-screen w-full overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${imagem})` }}>

    <div className="py-20 bg-emerald-100 m-20 rounded-2xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700 ">Veterinários</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-emerald-500 sm:text-4xl">
            Nossos profissionais especialisados para os cuidados de seu filhote
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {vets.map((vet) => (
            <article key={vet.name} className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
              <img src={vet.image} alt={vet.name} className="h-100 w-full object-cover" />
              <div className="p-6">
                <SiAnimalplanet size={40} className=" flex mb-3 text-emerald-900" />
                <p className="text-sm font-semibold text-emerald-700">{vet.specialty}</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{vet.name}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">Cidade: {vet.city}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">Telefone: {vet.phone}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">Email: {vet.email}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">Experiência: {vet.experience}</p>
                <p className="mt-2  text-sm leading-7 text-slate-600">Disponível: {vet.availability}</p>
              </div>
            </article>
          ))}
        </div>
    </div>
    </div>

    <div className="py-20 bg-emerald-100 m-20 rounded-2xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Remédios</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-emerald-500 sm:text-4xl">
            Nossos rémedios para os cuidados e melhoras dos seus animais  
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <article key={product.name} className="overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 shadow-sm">
              <img src={product.image} alt={product.name} className="h-48 w-full object-cover" />
              <div className="p-6">
                <AiFillMedicineBox size={40} className=" flex mb-3 text-emerald-900" />
                <p className="text-sm font-semibold text-emerald-700">{product.tag}</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{product.name}</h3>
                <p className="mt-2 mb-5 text-sm leading-7 text-slate-600">{product.description}</p>
                <button className="rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700">Peça aqui</button>
              </div>
            </article>
        
          ))}
          </div>
          </div>
        </div>
    </section>
  )
}

export default Filmes