import fundoFita from '../assets/fundofita.png'
import { GoStarFill } from "react-icons/go";
import { AiFillMedicineBox } from "react-icons/ai";
import { SiAnimalplanet } from "react-icons/si";
import { FaClapperboard } from "react-icons/fa6";

// ==========================================================
// DISNEY
// ==========================================================

// filmes principais do estudio
const disney_filmesp = [
  {
    nome: 'O Rei Leão',
    sinopse: 'Simba precisa enfrentar desafios para assumir o lugar de seu pai como rei.',
    tag: 'Animação',
    diretor: 'Roger Allers e Rob Minkoff',
    atores_principais: 'Matthew Broderick, Jeremy Irons e James Earl Jones',
    image: fundoFita
  },
  {
    nome: 'Frozen',
    sinopse: 'Anna parte em uma aventura para encontrar Elsa e salvar o reino de Arendelle.',
    tag: 'Animação',
    diretor: 'Chris Buck e Jennifer Lee',
    atores_principais: 'Kristen Bell, Idina Menzel e Josh Gad',
    image: fundoFita
  },
  {
    nome: 'Aladdin',
    sinopse: 'Um jovem encontra uma lâmpada mágica e recebe a ajuda de um poderoso gênio.',
    tag: 'Fantasia',
    diretor: 'Ron Clements e John Musker',
    atores_principais: 'Scott Weinger, Robin Williams e Linda Larkin',
    image: fundoFita
  },
  {
    nome: 'A Bela e a Fera',
    sinopse: 'Belle conhece uma criatura amaldiçoada e descobre que a aparência não define alguém.',
    tag: 'Romance',
    diretor: 'Gary Trousdale e Kirk Wise',
    atores_principais: 'Paige O’Hara, Robby Benson e Jerry Orbach',
    image: fundoFita
  },
  {
    nome: 'Mulan',
    sinopse: 'Mulan assume o lugar de seu pai no exército para proteger sua família.',
    tag: 'Aventura',
    diretor: 'Tony Bancroft e Barry Cook',
    atores_principais: 'Ming-Na Wen, Eddie Murphy e BD Wong',
    image: fundoFita
  },
  {
    nome: 'Hércules',
    sinopse: 'Um jovem semideus precisa provar seu valor para descobrir seu verdadeiro lugar.',
    tag: 'Fantasia',
    diretor: 'Ron Clements e John Musker',
    atores_principais: 'Tate Donovan, Danny DeVito e James Woods',
    image: fundoFita
  },
  {
    nome: 'Tarzan',
    sinopse: 'Um homem criado por gorilas precisa descobrir suas origens e seu verdadeiro mundo.',
    tag: 'Aventura',
    diretor: 'Kevin Lima e Chris Buck',
    atores_principais: 'Tony Goldwyn, Minnie Driver e Brian Blessed',
    image: fundoFita
  },
  {
    nome: 'Enrolados',
    sinopse: 'Rapunzel deixa sua torre pela primeira vez e embarca em uma grande aventura.',
    tag: 'Animação',
    diretor: 'Nathan Greno e Byron Howard',
    atores_principais: 'Mandy Moore, Zachary Levi e Donna Murphy',
    image: fundoFita
  },
  {
    nome: 'Piratas do Caribe',
    sinopse: 'Um pirata embarca em uma aventura envolvendo navios, maldições e tesouros.',
    tag: 'Aventura',
    diretor: 'Gore Verbinski',
    atores_principais: 'Johnny Depp, Orlando Bloom e Keira Knightley',
    image: fundoFita
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
    image: fundoFita
  },
  {
    nome: 'Mufasa: O Rei Leão',
    sinopse: 'A história mostra a origem de Mufasa e sua trajetória até se tornar rei.',
    tag: 'Aventura',
    diretor: 'Barry Jenkins',
    atores_principais: 'Aaron Pierre, Kelvin Harrison Jr. e Beyoncé',
    image: fundoFita
  },
  {
    nome: 'Lilo & Stitch',
    sinopse: 'Uma garota havaiana cria uma amizade inesperada com uma criatura alienígena.',
    tag: 'Fantasia',
    diretor: 'Dean Fleischer Camp',
    atores_principais: 'Maia Kealoha, Sydney Agudong e Chris Sanders',
    image: fundoFita
  },
];


// ==========================================================
// PIXAR
// ==========================================================

// filmes principais do estudio
const pixar_filmesp = [
  {
    nome: 'Toy Story',
    sinopse: 'Brinquedos ganham vida quando seus donos não estão por perto.',
    tag: 'Animação',
    diretor: 'John Lasseter',
    atores_principais: 'Tom Hanks, Tim Allen e Don Rickles',
    image: fundoFita
  },
  {
    nome: 'Procurando Nemo',
    sinopse: 'Um peixe atravessa o oceano para encontrar seu filho desaparecido.',
    tag: 'Aventura',
    diretor: 'Andrew Stanton',
    atores_principais: 'Albert Brooks, Ellen DeGeneres e Alexander Gould',
    image: fundoFita
  },
  {
    nome: 'Os Incríveis',
    sinopse: 'Uma família de super-heróis precisa voltar à ação para salvar o mundo.',
    tag: 'Super-herói',
    diretor: 'Brad Bird',
    atores_principais: 'Craig T. Nelson, Holly Hunter e Samuel L. Jackson',
    image: fundoFita
  },
  {
    nome: 'Up: Altas Aventuras',
    sinopse: 'Um idoso viaja para a América do Sul levando sua casa presa a balões.',
    tag: 'Aventura',
    diretor: 'Pete Docter',
    atores_principais: 'Ed Asner, Jordan Nagai e Christopher Plummer',
    image: fundoFita
  },
  {
    nome: 'Carros',
    sinopse: 'Um jovem carro de corrida aprende importantes lições após ficar preso em uma cidade.',
    tag: 'Animação',
    diretor: 'John Lasseter',
    atores_principais: 'Owen Wilson, Paul Newman e Bonnie Hunt',
    image: fundoFita
  },
  {
    nome: 'Ratatouille',
    sinopse: 'Um rato apaixonado por culinária sonha em se tornar um grande chef.',
    tag: 'Comédia',
    diretor: 'Brad Bird',
    atores_principais: 'Patton Oswalt, Ian Holm e Lou Romano',
    image: fundoFita
  },
  {
    nome: 'Wall-E',
    sinopse: 'Um pequeno robô encontra uma nova esperança para a humanidade.',
    tag: 'Ficção',
    diretor: 'Andrew Stanton',
    atores_principais: 'Ben Burtt, Elissa Knight e Jeff Garlin',
    image: fundoFita
  },
  {
    nome: 'Monstros S.A.',
    sinopse: 'Dois monstros precisam proteger uma criança que entrou acidentalmente em seu mundo.',
    tag: 'Animação',
    diretor: 'Pete Docter',
    atores_principais: 'John Goodman, Billy Crystal e Mary Gibbs',
    image: fundoFita
  },
  {
    nome: 'Viva: A Vida é uma Festa',
    sinopse: 'Um garoto viaja ao mundo dos mortos para descobrir a história de sua família.',
    tag: 'Fantasia',
    diretor: 'Lee Unkrich',
    atores_principais: 'Anthony Gonzalez, Gael García Bernal e Benjamin Bratt',
    image: fundoFita
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
    image: fundoFita
  },
  {
    nome: 'Elio',
    sinopse: 'Um garoto é levado ao espaço e acaba sendo confundido com o líder da Terra.',
    tag: 'Ficção',
    diretor: 'Adrian Molina',
    atores_principais: 'Yonas Kibreab, Zoe Saldaña e Brad Garrett',
    image: fundoFita
  },
  {
    nome: 'Toy Story 5',
    sinopse: 'Woody, Buzz e seus amigos enfrentam uma nova aventura em um mundo tecnológico.',
    tag: 'Animação',
    diretor: 'Andrew Stanton',
    atores_principais: 'Tom Hanks, Tim Allen e Joan Cusack',
    image: fundoFita
  },
  {
    nome: 'Hoppers',
    sinopse: 'Uma jovem utiliza uma nova tecnologia para se comunicar com animais.',
    tag: 'Animação',
    diretor: 'Daniel Chong',
    atores_principais: 'Piper Curda, Jon Hamm e Bobby Moynihan',
    image: fundoFita
  }
];


// ==========================================================
// MARVEL STUDIOS
// ==========================================================

// filmes principais do estudio
const marvel_filmesp = [
  {
    nome: 'Homem de Ferro',
    sinopse: 'Tony Stark constrói uma armadura tecnológica e se transforma em super-herói.',
    tag: 'Super-herói',
    diretor: 'Jon Favreau',
    atores_principais: 'Robert Downey Jr., Gwyneth Paltrow e Jeff Bridges',
    image: fundoFita
  },
  {
    nome: 'Os Vingadores',
    sinopse: 'Os maiores heróis da Terra se unem para enfrentar uma ameaça alienígena.',
    tag: 'Super-herói',
    diretor: 'Joss Whedon',
    atores_principais: 'Robert Downey Jr., Chris Evans e Scarlett Johansson',
    image: fundoFita
  },
  {
    nome: 'Capitão América: O Primeiro Vingador',
    sinopse: 'Steve Rogers se torna um supersoldado e enfrenta as forças da Hydra.',
    tag: 'Ação',
    diretor: 'Joe Johnston',
    atores_principais: 'Chris Evans, Hugo Weaving e Hayley Atwell',
    image: fundoFita
  },
  {
    nome: 'Thor',
    sinopse: 'Thor é banido de Asgard e precisa aprender o significado de ser um herói.',
    tag: 'Fantasia',
    diretor: 'Kenneth Branagh',
    atores_principais: 'Chris Hemsworth, Natalie Portman e Tom Hiddleston',
    image: fundoFita
  },
  {
    nome: 'Guardiões da Galáxia',
    sinopse: 'Um grupo de heróis improváveis se une para proteger a galáxia.',
    tag: 'Aventura',
    diretor: 'James Gunn',
    atores_principais: 'Chris Pratt, Zoe Saldaña e Dave Bautista',
    image: fundoFita
  },
  {
    nome: 'Pantera Negra',
    sinopse: 'T’Challa precisa proteger Wakanda enquanto enfrenta um poderoso inimigo.',
    tag: 'Super-herói',
    diretor: 'Ryan Coogler',
    atores_principais: 'Chadwick Boseman, Michael B. Jordan e Lupita Nyong’o',
    image: fundoFita
  },
  {
    nome: 'Homem-Aranha: De Volta ao Lar',
    sinopse: 'Peter Parker tenta equilibrar sua vida escolar com sua responsabilidade de herói.',
    tag: 'Super-herói',
    diretor: 'Jon Watts',
    atores_principais: 'Tom Holland, Michael Keaton e Zendaya',
    image: fundoFita
  },
  {
    nome: 'Doutor Estranho',
    sinopse: 'Um cirurgião descobre as artes místicas após perder a capacidade de operar.',
    tag: 'Fantasia',
    diretor: 'Scott Derrickson',
    atores_principais: 'Benedict Cumberbatch, Chiwetel Ejiofor e Rachel McAdams',
    image: fundoFita
  },
  {
    nome: 'Vingadores: Ultimato',
    sinopse: 'Os heróis restantes tentam reverter as consequências do ataque de Thanos.',
    tag: 'Super-herói',
    diretor: 'Anthony e Joe Russo',
    atores_principais: 'Robert Downey Jr., Chris Evans e Mark Ruffalo',
    image: fundoFita
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
    image: fundoFita
  },
  {
    nome: 'Capitão América: Admirável Mundo Novo',
    sinopse: 'Sam Wilson assume o escudo e enfrenta uma ameaça internacional.',
    tag: 'Super-herói',
    diretor: 'Julius Onah',
    atores_principais: 'Anthony Mackie, Harrison Ford e Danny Ramirez',
    image: fundoFita
  },
  {
    nome: 'Thunderbolts*',
    sinopse: 'Um grupo de anti-heróis recebe uma missão que pode mudar seus destinos.',
    tag: 'Super-herói',
    diretor: 'Jake Schreier',
    atores_principais: 'Florence Pugh, Sebastian Stan e David Harbour',
    image: ''
  },
  {
    nome: 'Quarteto Fantástico: Primeiros Passos',
    sinopse: 'Uma equipe de heróis precisa proteger seu mundo de uma ameaça cósmica.',
    tag: 'Super-herói',
    diretor: 'Matt Shakman',
    atores_principais: 'Pedro Pascal, Vanessa Kirby e Joseph Quinn',
    image: ''
  }
];


// ==========================================================
// UNIVERSAL PICTURES
// ==========================================================

// filmes principais do estudio
const universal_filmesp = [
  {
    nome: 'Jurassic Park',
    sinopse: 'Um parque com dinossauros geneticamente recriados perde o controle das criaturas.',
    tag: 'Aventura',
    diretor: 'Steven Spielberg',
    atores_principais: 'Sam Neill, Laura Dern e Jeff Goldblum',
    image: ''
  },
  {
    nome: 'Tubarão',
    sinopse: 'Um enorme tubarão ameaça uma cidade costeira e provoca uma perigosa caçada.',
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
  },
  {
    nome: 'E.T. O Extraterrestre',
    sinopse: 'Um garoto faz amizade com um alienígena perdido e tenta ajudá-lo a voltar para casa.',
    tag: 'Ficção',
    diretor: 'Steven Spielberg',
    atores_principais: 'Henry Thomas, Drew Barrymore e Dee Wallace',
    image: ''
  },
  {
    nome: 'A Múmia',
    sinopse: 'Exploradores despertam uma antiga criatura egípcia e precisam impedir sua destruição.',
    tag: 'Aventura',
    diretor: 'Stephen Sommers',
    atores_principais: 'Brendan Fraser, Rachel Weisz e Arnold Vosloo',
    image: ''
  },
  {
    nome: 'King Kong',
    sinopse: 'Uma equipe encontra um gigantesco gorila em uma ilha misteriosa.',
    tag: 'Aventura',
    diretor: 'Peter Jackson',
    atores_principais: 'Naomi Watts, Jack Black e Adrien Brody',
    image: ''
  },
  {
    nome: 'O Grinch',
    sinopse: 'Uma criatura que odeia o Natal decide roubar a celebração de uma pequena cidade.',
    tag: 'Comédia',
    diretor: 'Ron Howard',
    atores_principais: 'Jim Carrey, Taylor Momsen e Jeffrey Tambor',
    image: ''
  },
  {
    nome: 'Velozes e Furiosos',
    sinopse: 'Um policial se infiltra em um grupo de corredores envolvidos em crimes.',
    tag: 'Ação',
    diretor: 'Rob Cohen',
    atores_principais: 'Vin Diesel, Paul Walker e Michelle Rodriguez',
    image: ''
  }
];

// filmes lançados recentemente
const universal_filmesr = [
  {
    nome: 'Jurassic World: Recomeço',
    sinopse: 'Uma equipe viaja para uma ilha perigosa em busca de material genético.',
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


// ==========================================================
// PARAMOUNT PICTURES
// ==========================================================

// filmes principais do estudio
const paramount_filmesp = [
  {
    nome: 'O Poderoso Chefão',
    sinopse: 'Uma poderosa família mafiosa luta para manter seu controle sobre seus negócios.',
    tag: 'Crime',
    diretor: 'Francis Ford Coppola',
    atores_principais: 'Marlon Brando, Al Pacino e James Caan',
    image: ''
  },
  {
    nome: 'Forrest Gump',
    sinopse: 'Um homem simples participa de acontecimentos importantes da história americana.',
    tag: 'Drama',
    diretor: 'Robert Zemeckis',
    atores_principais: 'Tom Hanks, Robin Wright e Gary Sinise',
    image: ''
  },
  {
    nome: 'Transformers',
    sinopse: 'Robôs alienígenas chegam à Terra e iniciam uma guerra que envolve humanos.',
    tag: 'Ação',
    diretor: 'Michael Bay',
    atores_principais: 'Shia LaBeouf, Megan Fox e Josh Duhamel',
    image: ''
  },
  {
    nome: 'Missão: Impossível',
    sinopse: 'Um agente secreto recebe missões extremamente perigosas para proteger seu país.',
    tag: 'Ação',
    diretor: 'Brian De Palma',
    atores_principais: 'Tom Cruise, Jon Voight e Emmanuelle Béart',
    image: ''
  },
  {
    nome: 'Titanic',
    sinopse: 'Um jovem casal se apaixona durante a viagem inaugural do famoso Titanic.',
    tag: 'Romance',
    diretor: 'James Cameron',
    atores_principais: 'Leonardo DiCaprio, Kate Winslet e Billy Zane',
    image: ''
  },
  {
    nome: 'Top Gun',
    sinopse: 'Um piloto talentoso enfrenta desafios durante seu treinamento de aviação.',
    tag: 'Ação',
    diretor: 'Tony Scott',
    atores_principais: 'Tom Cruise, Kelly McGillis e Val Kilmer',
    image: ''
  },
  {
    nome: 'Um Lugar Silencioso',
    sinopse: 'Uma família precisa sobreviver em um mundo onde criaturas atacam qualquer som.',
    tag: 'Terror',
    diretor: 'John Krasinski',
    atores_principais: 'Emily Blunt, John Krasinski e Millicent Simmonds',
    image: ''
  },
  {
    nome: 'Sonic: O Filme',
    sinopse: 'Sonic precisa fugir de autoridades e encontra um aliado inesperado na Terra.',
    tag: 'Aventura',
    diretor: 'Jeff Fowler',
    atores_principais: 'Ben Schwartz, Jim Carrey e James Marsden',
    image: ''
  },
  {
    nome: 'O Show de Truman',
    sinopse: 'Um homem descobre que sua vida inteira está sendo transmitida pela televisão.',
    tag: 'Drama',
    diretor: 'Peter Weir',
    atores_principais: 'Jim Carrey, Laura Linney e Ed Harris',
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
  },
  {
    nome: 'Missão: Impossível - O Acerto Final',
    sinopse: 'Ethan Hunt enfrenta uma nova ameaça que pode colocar o mundo inteiro em perigo.',
    tag: 'Ação',
    diretor: 'Christopher McQuarrie',
    atores_principais: 'Tom Cruise, Hayley Atwell e Ving Rhames',
    image: ''
  }
];


// ==========================================================
// SONY PICTURES
// ==========================================================

// filmes principais do estudio
const sony_filmesp = [
  {
    nome: 'Homem-Aranha',
    sinopse: 'Peter Parker ganha poderes e precisa aprender a usá-los para combater o crime.',
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
    sinopse: 'Um jovem aprende artes marciais com um mestre e enfrenta seus maiores desafios.',
    tag: 'Drama',
    diretor: 'John G. Avildsen',
    atores_principais: 'Ralph Macchio, Pat Morita e Elisabeth Shue',
    image: ''
  },
  {
    nome: 'Resident Evil',
    sinopse: 'Uma equipe tenta impedir que um vírus mortal transforme pessoas em criaturas perigosas.',
    tag: 'Terror',
    diretor: 'Paul W. S. Anderson',
    atores_principais: 'Milla Jovovich, Michelle Rodriguez e Eric Mabius',
    image: ''
  },
  {
    nome: 'O Espetacular Homem-Aranha',
    sinopse: 'Peter Parker descobre novos segredos sobre seus poderes e sua família.',
    tag: 'Super-herói',
    diretor: 'Marc Webb',
    atores_principais: 'Andrew Garfield, Emma Stone e Rhys Ifans',
    image: ''
  },
  {
    nome: '007: Cassino Royale',
    sinopse: 'James Bond enfrenta um perigoso banqueiro durante uma missão internacional.',
    tag: 'Ação',
    diretor: 'Martin Campbell',
    atores_principais: 'Daniel Craig, Eva Green e Mads Mikkelsen',
    image: ''
  },
  {
    nome: 'Bad Boys',
    sinopse: 'Dois policiais precisam proteger uma testemunha enquanto investigam criminosos.',
    tag: 'Ação',
    diretor: 'Michael Bay',
    atores_principais: 'Will Smith, Martin Lawrence e Téa Leoni',
    image: ''
  },
  {
    nome: 'Anjos da Noite',
    sinopse: 'Uma guerreira vampira descobre uma conspiração envolvendo vampiros e lobisomens.',
    tag: 'Fantasia',
    diretor: 'Len Wiseman',
    atores_principais: 'Kate Beckinsale, Scott Speedman e Michael Sheen',
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
  },
  {
    nome: 'Karate Kid: Lendas',
    sinopse: 'Um jovem aprende artes marciais com dois mestres enquanto enfrenta novos desafios.',
    tag: 'Ação',
    diretor: 'Jonathan Entwistle',
    atores_principais: 'Ben Wang, Jackie Chan e Ralph Macchio',
    image: ''
  }
];


// ==========================================================
// WARNER BROS.
// ==========================================================

// filmes principais do estudio
const warner_filmesp = [
  {
    nome: 'Harry Potter e a Pedra Filosofal',
    sinopse: 'Harry descobre que é bruxo e começa seus estudos na escola de magia Hogwarts.',
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
    sinopse: 'Um programador descobre que a realidade em que vive é uma grande simulação.',
    tag: 'Ficção',
    diretor: 'Lana Wachowski e Lilly Wachowski',
    atores_principais: 'Keanu Reeves, Laurence Fishburne e Carrie-Anne Moss',
    image: ''
  },
  {
    nome: 'O Exorcista',
    sinopse: 'Uma garota começa a apresentar comportamentos assustadores e sua família busca ajuda.',
    tag: 'Terror',
    diretor: 'William Friedkin',
    atores_principais: 'Ellen Burstyn, Linda Blair e Max von Sydow',
    image: ''
  },
  {
    nome: 'A Fantástica Fábrica de Chocolate',
    sinopse: 'Um garoto ganha a oportunidade de visitar uma misteriosa fábrica de chocolates.',
    tag: 'Fantasia',
    diretor: 'Tim Burton',
    atores_principais: 'Johnny Depp, Freddie Highmore e Helena Bonham Carter',
    image: ''
  },
  {
    nome: 'It: A Coisa',
    sinopse: 'Um grupo de crianças enfrenta uma criatura que assume a forma de seus maiores medos.',
    tag: 'Terror',
    diretor: 'Andy Muschietti',
    atores_principais: 'Bill Skarsgård, Jaeden Martell e Finn Wolfhard',
    image: ''
  },
  {
    nome: 'Mad Max: Estrada da Fúria',
    sinopse: 'Em um mundo pós-apocalíptico, Max se une a Furiosa para escapar de um tirano.',
    tag: 'Ação',
    diretor: 'George Miller',
    atores_principais: 'Tom Hardy, Charlize Theron e Nicholas Hoult',
    image: ''
  },
  {
    nome: 'Duna',
    sinopse: 'Paul Atreides viaja para um planeta desértico e se envolve em uma disputa pelo poder.',
    tag: 'Ficção',
    diretor: 'Denis Villeneuve',
    atores_principais: 'Timothée Chalamet, Zendaya e Rebecca Ferguson',
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
    sinopse: 'A família Deetz retorna à sua antiga casa e encontra novamente o excêntrico Beetlejuice.',
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
  },
  {
    nome: 'Minecraft: O Filme',
    sinopse: 'Um grupo de personagens é transportado para o mundo de Minecraft e precisa sobreviver.',
    tag: 'Aventura',
    diretor: 'Jared Hess',
    atores_principais: 'Jack Black, Jason Momoa e Emma Myers',
    image: ''
  }
];

function Filmes() {
  return (

      <>
    <div className="relative w-full h-100 overflow-hidden">
      <img
        src={fundoFita}
        alt="Fundo da página de filmes"
        className="w-full h-full object-cover border-5 border-[#4A2C20] drop-shadow-lg"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
          Filmes
        </h1>
      </div>
    </div>

    <section id="filmes" className=" bg-[#E6D5B8] py-20 ">

    <div className="rounded-2xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C2593F] ">Disney</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#A82C24] sm:text-4xl">Filmes Principais</h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {disney_filmesp.map((filmep) => (
            <article key={filmep.nome} className="overflow-hidden border-5 border-[#4A2C20] bg-[#E0CAA4] shadow-sm">
              <img src={filmep.image} alt={filmep.nome} className="h-140 w-full object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-2">
                <GoStarFill size={40} className=" flex mb-3 text-[#E5A93C]" />
                <h3 className="ml-1 mb-3 text-xl font-semibold text-[#C2593F]">{filmep.nome}</h3>
                </div>
                <p className="text-sm font-semibold text-[#606C38]">{filmep.tag}</p>
                <p className="mt-2 text-sm leading-7 text-slate-900">Sinopse: {filmep.sinopse}</p>
                <p className="mt-2 text-sm leading-7 text-slate-900">Diretor: {filmep.diretor}</p>
                <p className="mt-2 mb-8 text-sm leading-7 text-slate-900">Atores Principais: {filmep.atores_principais}</p>
                <a className="mt-2 rounded-full bg-[#A82C24] px-6 py-3 font-semibold text-white transition hover:[#E64A40]" href="/locacao">Alugue aqui</a>
              </div>
            </article>
          ))}
        </div>
    </div>
    </div>

    <div className="mt-10 rounded-2xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="max-w-2xl">
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#A82C24] sm:text-4xl">
            Filmes lançados recentemente
          </h2>
        </div>

        {/* fwf */}

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {disney_filmesr.map((filmesr) => (
            <article key={filmesr.nome} className="overflow-hidden border-5 border-[#4A2C20] bg-[#E0CAA4] shadow-sm">
              <img src={filmesr.image} alt={filmesr.nome} className="h-140 w-full object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-2">
                <FaClapperboard size={30} className=" flex mb-3 text-[#E5A93C]" />
                <h3 className="ml-1 mb-3 text-xl font-semibold text-[#C2593F]">{filmesr.nome}</h3>
                </div>
                <p className="text-sm font-semibold text-[#606C38]">{filmesr.tag}</p>
                <p className="mt-2 text-sm leading-7 text-slate-900">Sinopse: {filmesr.sinopse}</p>
                <p className="mt-2 text-sm leading-7 text-slate-900">Diretor: {filmesr.diretor}</p>
                <p className="mt-2 mb-8 text-sm leading-7 text-slate-900">Atores Principais: {filmesr.atores_principais}</p>
                <a className="mt-2 rounded-full bg-[#A82C24] px-6 py-3 font-semibold text-white transition hover:[#E64A40]" href="/locacao">Alugue aqui</a>
              </div>
            </article>
        
          ))}
          </div>
          </div>
        </div>
        
          
    </section>
    </>
  )
}

export default Filmes