import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { EventoHistorico } from '../modelos/evento-historico';

@Injectable({
  providedIn: 'root'
})
export class DadosHistoricosService {
  private readonly eventos = signal<EventoHistorico[]>([
    {
      ano: 1977,
      titulo: 'Color TV-Game',
      descricao: 'Primeira incursão da Nintendo no mercado de consoles. Em parceria com a Mitsubishi, lançou séries de consoles dedicados, como o Color TV-Game 6, que rodava variações de Pong.',
      imagem: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjdzJ5rByYTiI7TI29jzCY8KEdoqk4-dijzbBmHRKzQBbGxy1ogPiOQ8myF0kxuvE5tXIdGVGQkgTDcWpcg-ekddLipCcD72cYqdiBma71zFOwLX3WHmzZ6CJBISXKXwhWwgbCq3-jwVcA/w1200-h630-p-k-no-nu/beforemario_dot_com_nintendo_tv_games_01.jpg'
    },
    {
      ano: 1980,
      titulo: 'Game & Watch',
      descricao: 'Criado por Gunpei Yokoi, esta série de portáteis com um único jogo e um relógio foi um sucesso massivo, introduzindo o D-pad e vendendo mais de 43 milhões de unidades.',
      imagem: 'https://i.pinimg.com/736x/c0/02/86/c0028662e0b08bed5e53af7c7457a42f.jpg'
    },
    {
      ano: 1981,
      titulo: 'Arcade Donkey Kong',
      descricao: 'O lançamento do jogo de arcade Donkey Kong, criado por um jovem Shigeru Miyamoto, não só salvou a divisão americana da Nintendo, como também marcou a primeira aparição de Mario.',
      imagem: 'https://p.turbosquid.com/ts-thumb/y7/klLXnb/mdZEL1D8/r1/jpg/1298780622/300x300/sharp_fit_q85/aed09d03f7ac800923b651570215469e04d804d7/r1.jpg'
    },
    {
      ano: 1983,
      titulo: 'Nintendo Entertainment System (NES) / Famicom',
      descricao: 'Lançado como Famicom no Japão, o NES revitalizou a indústria de videogames norte-americana. Sob a liderança de Masayuki Uemura, o console se tornou um fenômeno global com jogos como Super Mario Bros. e The Legend of Zelda.',
      imagem: 'https://files.meiobit.com/wp-content/uploads/2013/07/20130715gogoni-famicom.jpg'
    },
    {
      ano: 1989,
      titulo: 'Game Boy',
      descricao: 'Outra criação de Gunpei Yokoi, o Game Boy priorizou a vida útil da bateria e a durabilidade sobre os gráficos coloridos, dominando o mercado de portáteis por mais de uma década com a ajuda de jogos como Tetris e Pokémon Red & Blue.',
      imagem: 'https://www.arquivosdowoo.com.br/wp-content/uploads/2019/10/5-Jogo-de-Game-Boy-Pokemon-Arquivos-do-Woo-1140x641.jpg'
    },
    {
      ano: 1990,
      titulo: 'Super Nintendo (SNES) / Super Famicom',
      descricao: 'A entrada da Nintendo na era de 16-bits. O SNES travou uma famosa "guerra de consoles" com o Sega Genesis e é lembrado por sua vasta biblioteca de clássicos como Super Mario World e A Link to the Past.',
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/8/82/USA-SNES_-_JPN-SuperFamicom.png'
    },
    {
      ano: 1995,
      titulo: 'Virtual Boy',
      descricao: 'Uma tentativa pioneira e mal-sucedida em jogos 3D estereoscópicos. Liderado por Gunpei Yokoi, seu design monocromático vermelho e falta de portabilidade levaram a um fracasso comercial.',
      imagem: 'https://static1.thegamerimages.com/wordpress/wp-content/uploads/wm/2025/04/untitled-design-2025-04-18t115126-497.jpg'
    },
    {
      ano: 1996,
      titulo: 'Nintendo 64',
      descricao: 'Marcou a entrada da Nintendo nos gráficos 3D de 64-bits. Seu controle com stick analógico revolucionou os jogos tridimensionais, sendo palco para obras-primas como Super Mario 64 e Ocarina of Time.',
      imagem: 'https://goombastomp.com/wp-content/uploads/2016/06/Nintendo-64-at-25.jpg'
    },
    {
      ano: 1998,
      titulo: 'Game Boy Color',
      descricao: 'Uma atualização do Game Boy original, trazendo uma tela colorida e mantendo a retrocompatibilidade. O sucesso foi impulsionado pelo fenômeno de Pokémon Gold e Silver.',
      imagem: 'https://http2.mlstatic.com/D_NQ_NP_759697-MLB83332392694_042025-O-console-nintendo-game-boy-color-cor-atomic-purpleroxo-transparente-cgb-001-original.webp'
    },
    {
      ano: 2001,
      titulo: 'Game Boy Advance',
      descricao: 'O verdadeiro sucessor de 32-bits do Game Boy. Com poder gráfico similar ao SNES, foi o lar de novos clássicos como Metroid Fusion e Pokémon Ruby & Sapphire. Teve versões populares como o GBA SP.',
      imagem: 'https://s.yimg.com/ny/api/res/1.2/VNvOZ5Es4RnIBI6wrqdpyw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTQ4MA--/https://media.zenfs.com/es/levelup_525/e37743813256307f948db8eb691bd527'
    },
    {
      ano: 2001,
      titulo: 'Nintendo GameCube',
      descricao: 'Primeiro console da Nintendo a usar discos ópticos. Apesar de lutar contra o PS2 e o Xbox, o GameCube é cultuado por sua biblioteca única, com jogos como Metroid Prime e Super Smash Bros. Melee.',
      imagem: 'https://i.etsystatic.com/22609217/r/il/8f069a/6412548576/il_fullxfull.6412548576_m925.jpg'
    },
    {
      ano: 2004,
      titulo: 'Nintendo DS',
      descricao: 'Com duas telas (uma sensível ao toque), o DS inovou na jogabilidade e atraiu um público massivo e diversificado com jogos como Nintendogs e Brain Age, tornando-se o portátil mais vendido de todos os tempos.',
      imagem: 'https://i.redd.it/g23jopvhdobb1.jpg'
    },
    {
      ano: 2006,
      titulo: 'Nintendo Wii',
      descricao: 'O Wii revolucionou a indústria com seus controles de movimento intuitivos, atraindo um enorme público casual e familiar. O sucesso de Wii Sports o transformou em um fenômeno cultural mundial.',
      imagem: 'https://i5.walmartimages.com/seo/Pre-Owned-Nintendo-Wii-Console-White-with-2-Sets-of-Controllers-Mario-Kart-Bundle-System_608fc6ef-1ef2-4fa0-b3eb-cfde65f4a105.581379a14ac635e0518a04391d67171c.png'
    },
    {
      ano: 2011,
      titulo: 'Nintendo 3DS',
      descricao: 'Levou o 3D estereoscópico sem óculos para o mundo portátil. Após um início lento, uma forte biblioteca de jogos como Super Mario 3D Land e Pokémon X & Y garantiu seu sucesso.',
      imagem: 'https://files.tecnoblog.net/wp-content/uploads/2011/08/nintendo-3ds.jpg'
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
      imagem: 'https://files.tecnoblog.net/wp-content/uploads/2021/07/nintendo-switch-lado-a-lado-700x393.jpg'
    },
     {
      ano: 2025,
      titulo: 'Nintendo Switch 2',
      descricao: 'Lançado em 5 de junho de 2025, o Nintendo Switch 2 evolui o conceito híbrido com mais poder, uma tela LCD de 7.9 polegadas Full HD e Joy-Cons magnéticos. Liderado por Shuntaro Furukawa, o console teve um desenvolvimento iniciado em 2019, visando um salto de performance e mantendo a retrocompatibilidade. O lançamento foi um recorde histórico, com títulos como "Mario Kart World", "The Duskbloods" e versões aprimoradas de jogos do Switch original, além de forte apoio de thirds como "Cyberpunk 2077".',
      imagem: 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_400/ncom/en_US/articles/2025/nintendo-switch-2-to-be-released-in-2025/1920x1080_WN_PR01162025'
    }
  ]);

  getEventos() {
    return this.eventos.asReadonly();
  }
}