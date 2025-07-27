// 1. A Interface (O Molde do Objeto)
// Define como cada objeto de evento deve ser estruturado.
export interface EventoHistorico {
  id: number;
  ano: number;
  categoria: 'Corporativo' | 'Console' | 'Game';
  titulo: string;
  descricao: string;
  imagem: string[];
}

// 2. Os Dados
// Uma lista (array) de eventos históricos.
export const dadosHistoriaNintendo: EventoHistorico[] = [
    {
    "id": 1,
    "ano": 1889,
    "categoria": "Corporativo",
    "titulo": "Fundação da Nintendo Koppai",
    "descricao": "Fusajiro Yamauchi funda a Nintendo em Kyoto, Japão, para produzir cartas de baralho Hanafuda feitas à mão. Este foi o humilde começo de um futuro gigante do entretenimento.",
    "imagem": [
      "https://placehold.co/600x400/E60012/FFFFFF?text=Nintendo+1889+A",
      "https://placehold.co/600x400/E60012/FFFFFF?text=Nintendo+1889+B",
      "https://placehold.co/600x400/E60012/FFFFFF?text=Nintendo+1889+C"
    ]
  },
  {
    "id": 2,
    "ano": 1977,
    "categoria": "Console",
    "titulo": "Lançamento do Color TV-Game",
    "descricao": "A Nintendo entra no mercado de consoles de videogame domésticos com o Color TV-Game, que apresentava variações do jogo Pong.",
    "imagem": [
      "https://placehold.co/600x400/E60012/FFFFFF?text=Color+TV-Game+A",
      "https://placehold.co/600x400/E60012/FFFFFF?text=Color+TV-Game+B",
      "https://placehold.co/600x400/E60012/FFFFFF?text=Color+TV-Game+C"
    ]
  },
  {
    "id": 3,
    "ano": 1981,
    "categoria": "Game",
    "titulo": "Lançamento de Donkey Kong",
    "descricao": "O jogo de arcade Donkey Kong, projetado por um jovem Shigeru Miyamoto, é lançado. Ele introduz o personagem 'Jumpman', que mais tarde se tornaria o icônico Mario.",
    "imagem": [
      "https://placehold.co/600x400/E60012/FFFFFF?text=Donkey+Kong+A",
      "https://placehold.co/600x400/E60012/FFFFFF?text=Donkey+Kong+B",
      "https://placehold.co/600x400/E60012/FFFFFF?text=Donkey+Kong+C"
    ]
  },
  {
    "id": 4,
    "ano": 1985,
    "categoria": "Console",
    "titulo": "Lançamento do NES na América",
    "descricao": "O Nintendo Entertainment System (NES) é lançado na América do Norte, revitalizando uma indústria de videogames em colapso e estabelecendo o padrão para futuros consoles.",
    "imagem": [
      "https://placehold.co/600x400/E60012/FFFFFF?text=NES+A",
      "https://placehold.co/600x400/E60012/FFFFFF?text=NES+B",
      "https://placehold.co/600x400/E60012/FFFFFF?text=NES+C"
    ]
  },
  {
    "id": 5,
    "ano": 1986,
    "categoria": "Game",
    "titulo": "The Legend of Zelda",
    "descricao": "O primeiro jogo The Legend of Zelda é lançado para o Famicom Disk System no Japão, introduzindo um mundo vasto e não linear e a mecânica de salvar o progresso.",
    "imagem": [
      "https://placehold.co/600x400/E60012/FFFFFF?text=Zelda+A",
      "https://placehold.co/600x400/E60012/FFFFFF?text=Zelda+B",
      "https://placehold.co/600x400/E60012/FFFFFF?text=Zelda+C"
    ]
  },
  {
    "id": 6,
    "ano": 1989,
    "categoria": "Console",
    "titulo": "Lançamento do Game Boy",
    "descricao": "A Nintendo lança o Game Boy, um console portátil que se tornou um fenômeno cultural e dominou o mercado de portáteis por mais de uma década, graças a jogos como Tetris.",
    "imagem": [
      "https://placehold.co/600x400/E60012/FFFFFF?text=Game+Boy+A",
      "https://placehold.co/600x400/E60012/FFFFFF?text=Game+Boy+B",
      "https://placehold.co/600x400/E60012/FFFFFF?text=Game+Boy+C"
    ]
  },
  {
    "id": 7,
    "ano": 1996,
    "categoria": "Console",
    "titulo": "Lançamento do Nintendo 64",
    "descricao": "O Nintendo 64 chega ao mercado, popularizando os jogos 3D com seu controle analógico inovador e títulos marcantes como Super Mario 64.",
    "imagem": [
      "https://placehold.co/600x400/E60012/FFFFFF?text=N64+A",
      "https://placehold.co/600x400/E60012/FFFFFF?text=N64+B",
      "https://placehold.co/600x400/E60012/FFFFFF?text=N64+C"
    ]
  },
  {
    "id": 8,
    "ano": 1996,
    "categoria": "Game",
    "titulo": "Lançamento de Pokémon Red & Green",
    "descricao": "A Game Freak, em parceria com a Nintendo, lança Pokémon Red e Green no Japão, dando início a uma das maiores e mais lucrativas franquias de entretenimento do mundo.",
    "imagem": [
      "https://placehold.co/600x400/E60012/FFFFFF?text=Pokémon+A",
      "https://placehold.co/600x400/E60012/FFFFFF?text=Pokémon+B",
      "https://placehold.co/600x400/E60012/FFFFFF?text=Pokémon+C"
    ]
  }
];
