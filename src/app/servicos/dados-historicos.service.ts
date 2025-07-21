import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { EventoHistorico } from '../modelos/evento-historico';

@Injectable({
  providedIn: 'root'
})
export class DadosHistoricosService {
  private readonly eventos = signal<EventoHistorico[]>([
    {
       ano: 1889,
      titulo: 'Fundação como "Nintendo Koppai"',
      descricao: 'A Nintendo foi fundada por Fusajiro Yamauchi como uma empresa para fabricar e vender cartas de baralho artesanais Hanafuda.',
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Nintendo_Hanafuda_cards_pack.jpg/800px-Nintendo_Hanafuda_cards_pack.jpg'
    },
    {
      ano: 1977,
      titulo: 'Color TV-Game',
      descricao: 'Primeira incursão da Nintendo no mercado de consoles. Em parceria com a Mitsubishi, lançou séries de consoles dedicados, como o Color TV-Game 6, que rodava variações de Pong.',
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Nintendo-Color-TV-Game-6-FL.jpg/1024px-Nintendo-Color-TV-Game-6-FL.jpg'
    },
    {
      ano: 1980,
      titulo: 'Game & Watch',
      descricao: 'Criado por Gunpei Yokoi, esta série de portáteis com um único jogo e um relógio foi um sucesso massivo, introduzindo o D-pad e vendendo mais de 43 milhões de unidades.',
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Game_%26_Watch_Donkey_Kong.jpg/800px-Game_%26_Watch_Donkey_Kong.jpg'
    },
    {
      ano: 1981,
      titulo: 'Arcade Donkey Kong',
      descricao: 'O lançamento do jogo de arcade Donkey Kong, criado por um jovem Shigeru Miyamoto, não só salvou a divisão americana da Nintendo, como também marcou a primeira aparição de Mario.',
      imagem: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Donkey_Kong_arcade_flyer.jpg/220px-Donkey_Kong_arcade_flyer.jpg'
    },
    {
      ano: 1983,
      titulo: 'Nintendo Entertainment System (NES) / Famicom',
      descricao: 'Lançado como Famicom no Japão, o NES revitalizou a indústria de videogames norte-americana. Sob a liderança de Masayuki Uemura, o console se tornou um fenômeno global com jogos como Super Mario Bros. e The Legend of Zelda.',
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/NES-Console-Set.jpg/1024px-NES-Console-Set.jpg'
    },
    {
      ano: 1989,
      titulo: 'Game Boy',
      descricao: 'Outra criação de Gunpei Yokoi, o Game Boy priorizou a vida útil da bateria e a durabilidade sobre os gráficos coloridos, dominando o mercado de portáteis por mais de uma década com a ajuda de jogos como Tetris e Pokémon Red & Blue.',
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Nintendo-Game-Boy-FL.jpg/1024px-Nintendo-Game-Boy-FL.jpg'
    },
    {
      ano: 1990,
      titulo: 'Super Nintendo (SNES) / Super Famicom',
      descricao: 'A entrada da Nintendo na era de 16-bits. O SNES travou uma famosa "guerra de consoles" com o Sega Genesis e é lembrado por sua vasta biblioteca de clássicos como Super Mario World e A Link to the Past.',
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/SNES-Mod1-Console-Set.jpg/1024px-SNES-Mod1-Console-Set.jpg'
    },
    {
      ano: 1995,
      titulo: 'Virtual Boy',
      descricao: 'Uma tentativa pioneira e mal-sucedida em jogos 3D estereoscópicos. Liderado por Gunpei Yokoi, seu design monocromático vermelho e falta de portabilidade levaram a um fracasso comercial.',
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Nintendo-Virtual-Boy-Set.png/1024px-Nintendo-Virtual-Boy-Set.png'
    },
    {
      ano: 1996,
      titulo: 'Nintendo 64',
      descricao: 'Marcou a entrada da Nintendo nos gráficos 3D de 64-bits. Seu controle com stick analógico revolucionou os jogos tridimensionais, sendo palco para obras-primas como Super Mario 64 e Ocarina of Time.',
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/N64-Console-Set.jpg/1024px-N64-Console-Set.jpg'
    },
    {
      ano: 1998,
      titulo: 'Game Boy Color',
      descricao: 'Uma atualização do Game Boy original, trazendo uma tela colorida e mantendo a retrocompatibilidade. O sucesso foi impulsionado pelo fenômeno de Pokémon Gold e Silver.',
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Nintendo-Game-Boy-Color-FL.jpg/800px-Nintendo-Game-Boy-Color-FL.jpg'
    },
    {
      ano: 2001,
      titulo: 'Game Boy Advance',
      descricao: 'O verdadeiro sucessor de 32-bits do Game Boy. Com poder gráfico similar ao SNES, foi o lar de novos clássicos como Metroid Fusion e Pokémon Ruby & Sapphire. Teve versões populares como o GBA SP.',
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Nintendo-Game-Boy-Advance-Milky-Blue.jpg/1024px-Nintendo-Game-Boy-Advance-Milky-Blue.jpg'
    },
    {
      ano: 2001,
      titulo: 'Nintendo GameCube',
      descricao: 'Primeiro console da Nintendo a usar discos ópticos. Apesar de lutar contra o PS2 e o Xbox, o GameCube é cultuado por sua biblioteca única, com jogos como Metroid Prime e Super Smash Bros. Melee.',
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/GameCube-Set.jpg/1024px-GameCube-Set.jpg'
    },
    {
      ano: 2004,
      titulo: 'Nintendo DS',
      descricao: 'Com duas telas (uma sensível ao toque), o DS inovou na jogabilidade e atraiu um público massivo e diversificado com jogos como Nintendogs e Brain Age, tornando-se o portátil mais vendido de todos os tempos.',
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Nintendo-DS-Lite-w-stylus.png/1024px-Nintendo-DS-Lite-w-stylus.png'
    },
    {
      ano: 2006,
      titulo: 'Nintendo Wii',
      descricao: 'O Wii revolucionou a indústria com seus controles de movimento intuitivos, atraindo um enorme público casual e familiar. O sucesso de Wii Sports o transformou em um fenômeno cultural mundial.',
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Wii-console.jpg/1024px-Wii-console.jpg'
    },
    {
      ano: 2011,
      titulo: 'Nintendo 3DS',
      descricao: 'Levou o 3D estereoscópico sem óculos para o mundo portátil. Após um início lento, uma forte biblioteca de jogos como Super Mario 3D Land e Pokémon X & Y garantiu seu sucesso.',
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Nintendo-3DS-Aqua-Blue-Open.png/1024px-Nintendo-3DS-Aqua-Blue-Open.png'
    },
    {
      ano: 2012,
      titulo: 'Wii U',
      descricao: 'Sucessor do Wii, introduziu a jogabilidade assimétrica com o GamePad. No entanto, um marketing confuso e falta de apoio de terceiros levaram a vendas fracas, apesar de ter excelentes jogos como Mario Kart 8.',
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Wii_U_Console_and_Gamepad.png/1024px-Wii_U_Console_and_Gamepad.png'
    },
    {
      ano: 2017,
      titulo: 'Nintendo Switch',
      descricao: 'Um conceito híbrido que combina console doméstico e portátil. O Switch foi um sucesso retumbante, impulsionado por jogos aclamados como The Legend of Zelda: Breath of the Wild e Animal Crossing: New Horizons.',
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Nintendo-Switch-Console-Docked-wJoyCon-RedBlue.jpg/1024px-Nintendo-Switch-Console-Docked-wJoyCon-RedBlue.jpg'
    },
     {
      ano: 2025,
      titulo: 'Nintendo Switch 2',
      descricao: 'Lançado em 5 de junho de 2025, o Nintendo Switch 2 evolui o conceito híbrido com mais poder, uma tela LCD de 7.9 polegadas Full HD e Joy-Cons magnéticos. Liderado por Shuntaro Furukawa, o console teve um desenvolvimento iniciado em 2019, visando um salto de performance e mantendo a retrocompatibilidade. O lançamento foi um recorde histórico, com títulos como "Mario Kart World", "The Duskbloods" e versões aprimoradas de jogos do Switch original, além de forte apoio de thirds como "Cyberpunk 2077".',
      imagem: 'https://placehold.co/1024x768/E60012/FFFFFF?text=Nintendo+Switch+2'
    }
  ]);

  getEventos() {
    return this.eventos.asReadonly();
  }
}