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
      descricao: 'Color TV-Game, lançada exclusivamente no Japão a partir de 1977. Desenvolvida em colaboração com a Mitsubishi Electric, esta foi a primeira incursão da empresa em videogames domésticos. A série consistia em consoles dedicados com jogos embutidos, como o Color TV-Game 6 e o Color TV-Game 15, que ofereciam variações do popular Pong. Modelos posteriores incluíram Racing 112 e Block Kuzushi, um clone de Breakout cujo design externo foi um dos primeiros projetos de Shigeru Miyamoto na empresa. A linha foi um sucesso comercial, vendendo cerca de 3 milhões de unidades no total.',
      imagem: [
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjdzJ5rByYTiI7TI29jzCY8KEdoqk4-dijzbBmHRKzQBbGxy1ogPiOQ8myF0kxuvE5tXIdGVGQkgTDcWpcg-ekddLipCcD72cYqdiBma71zFOwLX3WHmzZ6CJBISXKXwhWwgbCq3-jwVcA/w1200-h630-p-k-no-nu/beforemario_dot_com_nintendo_tv_games_01.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/7/78/Color_TV-Game_15_%28Cut_out%29.jpg',
        'https://i.ebayimg.com/images/g/p44AAOSwA8dnkKMs/s-l400.png'
      ]
    },
    {
      ano: 1980,
      titulo: 'Game & Watch',
      descricao: 'Criado por Gunpei Yokoi, esta série de portáteis com um único jogo e um relógio foi um sucesso massivo, introduzindo o D-pad e vendendo mais de 43 milhões de unidades.',
      imagem: [
        'https://i.pinimg.com/736x/c0/02/86/c0028662e0b08bed5e53af7c7457a42f.jpg',
        'https://www.nintendo.com/eu/media/images/10_share_images/others_3/H2x1_GameAndWatch_SuperMarioBros_image950w.jpg',
        'https://i.redd.it/nintendo-lcd-games-v0-4kl449nfgpva1.jpg?width=1600&format=pjpg&auto=webp&s=53d272f3e279abb80017d63dd6e34b60889be930'
      ]
    },
    {
      ano: 1981,
      titulo: 'Arcade Donkey Kong',
      descricao: 'O lançamento do jogo de arcade Donkey Kong, criado por um jovem Shigeru Miyamoto, não só salvou a divisão americana da Nintendo, como também marcou a primeira aparição de Mario. Mario, inicialmente chamado de "Jumpman", foi um sucesso instantâneo, estabelecendo as bases para o futuro da Nintendo no mundo dos jogos. O jogo foi um marco na indústria, introduzindo elementos narrativos e de personagem que se tornariam fundamentais nos jogos subsequentes. Donkey Kong vendeu mais de 132.000 máquinas em todo o mundo, solidificando a reputação da Nintendo como uma força inovadora no setor.',
      imagem: [
        'https://p.turbosquid.com/ts-thumb/y7/klLXnb/mdZEL1D8/r1/jpg/1298780622/300x300/sharp_fit_q85/aed09d03f7ac800923b651570215469e04d804d7/r1.jpg',
        'https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/11542647/media_1.image_.jpg?quality=90&strip=all&crop=7.8125,0,84.375,100',
        'https://i.redd.it/3gja4cy53uvb1.jpg'
      ]
    },
    {
      ano: 1983,
      titulo: 'Nintendo Entertainment System (NES) / Famicom',
      descricao: 'Na terceira geração, a Nintendo não apenas lançou um produto, mas reviveu a indústria de videogames norte-americana com o Nintendo Entertainment System (NES), lançado em 1985, dois anos após sua estreia no Japão como Famicom. Liderado por Masayuki Uemura, o projeto foi uma manobra de marketing brilhante para um mercado hostil. O NES foi vendido como um "sistema de entretenimento", acompanhado pelo robô R.O.B. para evitar o estigma dos "videogames". A inclusão do chip de bloqueio 10NES garantiu o controle de qualidade do software, estabelecendo um modelo de negócios lucrativo. Com clássicos como Super Mario Bros., The Legend of Zelda e Metroid, o NES vendeu 61,91 milhões de unidades , superando seus principais concorrentes, o Sega Master System e o Atari 7800.',
      imagem: [
        'https://files.meiobit.com/wp-content/uploads/2013/07/20130715gogoni-famicom.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/9/9e/Nintendo_CLV-101_20170617.jpg',
        'https://i.ytimg.com/vi/5zUMfNUQZLk/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGFggYShlMA8=&rs=AOn4CLDxaiTL91FwHeu7NZPi4QkEE9XOSw'
      ]
    },
    {
      ano: 1989,
      titulo: 'Game Boy',
      descricao: 'Na quarta geração, o Game Boy, lançado em 1989, foi a obra-prima do designer Gunpei Yokoi. Seguindo a filosofia de "Pensamento Lateral com Tecnologia Gasta", o console usava uma tela monocromática e um processador modesto para garantir um preço baixo e uma vida útil de bateria de até 30 horas. Essa abordagem o tornou um sucesso esmagador contra concorrentes tecnicamente superiores, como o Sega Game Gear e o Atari Lynx. Impulsionado por jogos como Tetris e, mais tarde, Pokémon Red e Blue, o Game Boy (junto com sua versão Color) vendeu 118,69 milhões de unidades.',
      imagem: [
        'https://www.arquivosdowoo.com.br/wp-content/uploads/2019/10/5-Jogo-de-Game-Boy-Pokemon-Arquivos-do-Woo-1140x641.jpg',
        'https://www.acasadocogumelo.com/wp-content/uploads/2019/04/dims-1.jpg',
        'https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/13148823/jbareham_180924_ply0802_0010.jpg?quality=90&strip=all&crop=16.666666666667,0,66.666666666667,100'
      ]
    },
    {
      ano: 1990,
      titulo: 'Super Nintendo (SNES) / Super Famicom',
      descricao: 'Super Nintendo Entertainment System (SNES), lançado em 1990. Desenvolvido pela equipe de Masayuki Uemura, o SNES tinha uma CPU mais lenta que seu principal concorrente, o Sega Mega Drive/Genesis, mas compensava com chips de áudio e vídeo superiores. Inovações como o "Mode 7" para efeitos pseudo-3D e chips de aprimoramento nos cartuchos, como o Super FX de Star Fox, definiram sua identidade. Com uma biblioteca de jogos aclamados como Super Mario World, The Legend of Zelda: A Link to the Past e Donkey Kong Country, o SNES superou seu rival, vendendo 49,10 milhões de unidades globalmente.',
      imagem: [
        'https://upload.wikimedia.org/wikipedia/commons/8/82/USA-SNES_-_JPN-SuperFamicom.png',
        'https://i.ebayimg.com/thumbs/images/g/ImQAAOSwJU9lYkPc/s-l1200.jpg',
        'https://i.ebayimg.com/images/g/z5kAAOSwxxFh-zHy/s-l1200.jpg'
      ]
    },
    {
      ano: 1995,
      titulo: 'Virtual Boy',
      descricao: 'Virtual Boy, de 1995. Projetado pela equipe de Gunpei Yokoi, este console de mesa com formato de óculos de realidade virtual foi uma tentativa malfadada de popularizar a estereoscopia 3D. Seus gráficos monocromáticos em vermelho e preto, design desconfortável que causava dores de cabeça e uma biblioteca minúscula o levaram a ser descontinuado em menos de um ano, tornando-se um grande fracasso comercial.',
      imagem: [
        'https://static1.thegamerimages.com/wordpress/wp-content/uploads/wm/2025/04/untitled-design-2025-04-18t115126-497.jpg',
        'https://www.gamebits.net/wp-content/uploads/2016/11/Virtual-Boy-03.jpg',
        'https://i.pcmag.com/imagery/lineups/06EHBq4LowaSRsDLpX5kA2e-1..v1569492760.jpg'
      ]
    },
    {
      ano: 1996,
      titulo: 'Nintendo 64',
      descricao: 'Nintendo 64. Desenvolvido em parceria com a Silicon Graphics (SGI), o console foi uma potência que definiu a linguagem dos jogos 3D com seu revolucionário controle com stick analógico. No entanto, a decisão controversa de usar cartuchos em vez de CDs, formato adotado pelos concorrentes Sony PlayStation e Sega Saturn, limitou sua capacidade de armazenamento e afastou desenvolvedores importantes. Apesar de ter ficado em um distante segundo lugar para o PlayStation, o N64 vendeu 32,93 milhões de unidades e foi lar de clássicos atemporais como Super Mario 64 e The Legend of Zelda: Ocarina of Time.',
      imagem: [
        'https://goombastomp.com/wp-content/uploads/2016/06/Nintendo-64-at-25.jpg',
        'https://oldback.com.br/wp-content/uploads/2024/08/nintendo-64-cereja-5.jpg',
        'https://cdn.awsli.com.br/1258/1258259/produto/56449767/super-mario-64-727qje7s9i.png'
      ]
    },
    {
      ano: 1998,
      titulo: 'Game Boy Color',
      descricao: 'Uma atualização do Game Boy original, trazendo uma tela colorida e mantendo a retrocompatibilidade. O sucesso foi impulsionado pelo fenômeno de Pokémon Gold e Silver. Ele era capaz de exibir 56 cores simultaneamente e mantendo total compatibilidade com o Game Boy original.',
      imagem: [
        'https://http2.mlstatic.com/D_NQ_NP_759697-MLB83332392694_042025-O-console-nintendo-game-boy-color-cor-atomic-purpleroxo-transparente-cgb-001-original.webp',
        'https://fabiocaparica.com/wp-content/uploads/2022/05/Game-Boy-Color-1024x576.jpeg',
        'https://www.8bitaesthetics.com/cdn/shop/files/IMG_3384_1200x1200.jpg?v=1738090648'
      ]
    },
    {
      ano: 2001,
      titulo: 'Game Boy Advance',
      descricao: 'Game Boy Advance em 2001. Com poder de processamento comparável ao do SNES, design horizontal e botões de ombro, ele representou um salto significativo. A retrocompatibilidade com toda a biblioteca anterior do Game Boy foi novamente um recurso chave. Modelos posteriores, como o Game Boy Advance SP com seu design dobrável e tela iluminada, corrigiram as principais queixas do original. Com jogos como Pokémon Ruby and Sapphire e Metroid Fusion, a linha GBA vendeu 81,51 milhões de unidades.',
      imagem: [
        'https://s.yimg.com/ny/api/res/1.2/VNvOZ5Es4RnIBI6wrqdpyw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTQ4MA--/https://media.zenfs.com/es/levelup_525/e37743813256307f948db8eb691bd527',
        'https://m.media-amazon.com/images/I/61aRNBaVQlL.jpg',
        'https://preview.redd.it/gameboy-advance-can-read-gba-games-but-not-gb-or-gbc-v0-8x8ze7siosod1.jpeg?width=1080&crop=smart&auto=webp&s=83b04dceb6d9d2a2e806b4e309b961c0c7b3248f'
      ]
    },
    {
      ano: 2001,
      titulo: 'Nintendo GameCube',
      descricao: 'Nintendo GameCube em 2001. Projetado em parceria com a IBM e a ArtX/ATI para ser poderoso e fácil de programar, o console era tecnicamente superior ao PlayStation 2 em várias áreas. No entanto, a Nintendo novamente tomou decisões que a isolaram, como o uso de mini-DVDs proprietários com menor capacidade de armazenamento. Enfrentando a concorrência esmagadora do PlayStation 2 da Sony e do recém-chegado Xbox da Microsoft, o GameCube ficou em terceiro lugar, vendendo apenas 21,74 milhões de unidades. Apesar disso, introduziu o aclamado controle sem fio WaveBird e teve jogos de primeira linha como Metroid Prime e Super Smash Bros. Melee.',
      imagem: [
        'https://i.etsystatic.com/22609217/r/il/8f069a/6412548576/il_fullxfull.6412548576_m925.jpg',
        'https://down-br.img.susercontent.com/file/20d3cbcb57feae10d756756fb9e6713f',
      ]
    },
    {
      ano: 2004,
      titulo: 'Nintendo DS',
      descricao: 'A sétima geração viu a Nintendo se reinventar com a "Estratégia do Oceano Azul", primeiro com o portátil Nintendo DS em 2004. Com duas telas (a inferior sensível ao toque), microfone e Wi-Fi, o DS focou em experiências de jogo inovadoras. Ele superou seu concorrente direto e tecnicamente mais poderoso, o PlayStation Portable (PSP) da Sony, de forma esmagadora. Jogos como Nintendogs e Brain Age expandiram o mercado para novos públicos, e o DS se tornou o portátil mais vendido da história, com 154,02 milhões de unidades.',
      imagem: [
        'https://i.redd.it/g23jopvhdobb1.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Nintendo_DS_Trans.png/640px-Nintendo_DS_Trans.png',
        'https://i5.walmartimages.com/seo/Authentic-Nintendo-DS-Lite-Console-Metallic-Rose-with-Stylus-and-Charger-100-OEM_8e105600-0110-4860-825b-37a338142342.385a84220d908831352617155dc39228.jpeg'
      ]
    },
    {
      ano: 2006,
      titulo: 'Nintendo Wii',
      descricao: 'O Wii revolucionou a indústria com seus controles de movimento intuitivos, atraindo um enorme público casual e familiar. O sucesso de Wii Sports o transformou em um fenômeno cultural mundial. O console vendeu 101,63 milhões de unidades, superando o PlayStation 3 e o Xbox 360.',
      imagem: [
        'https://i5.walmartimages.com/seo/Pre-Owned-Nintendo-Wii-Console-White-with-2-Sets-of-Controllers-Mario-Kart-Bundle-System_608fc6ef-1ef2-4fa0-b3eb-cfde65f4a105.581379a14ac635e0518a04391d67171c.png',
        'https://cdn.awsli.com.br/2500x2500/138/138431/produto/7989134/22ef26c031.jpg',
        'https://cdn.awsli.com.br/800x800/53/53761/produto/13441508/ef324edbbb.jpg'
      ]
    },
    {
      ano: 2011,
      titulo: 'Nintendo 3DS',
      descricao: 'Nintendo 3DS chegou em 2011 para suceder o DS. Sua principal inovação era uma tela capaz de produzir um efeito 3D estereoscópico sem a necessidade de óculos. Após um início de vida difícil e um corte de preço drástico, a plataforma se recuperou e tornou-se um grande sucesso, superando confortavelmente seu concorrente, o PlayStation Vita. Com jogos como Super Mario 3D Land e Animal Crossing: New Leaf, a família 3DS vendeu mais de 75 milhões de unidades.',
      imagem: [
        'https://files.tecnoblog.net/wp-content/uploads/2011/08/nintendo-3ds.jpg',
        'https://acdn-us.mitiendanube.com/stores/002/082/206/products/img_94121-c6a85f0439e71055ec16958210865311-1024-1024.jpg',
        'https://www.nintendo.com/eu/media/images/10_share_images/systems_11/nintendo_3ds_28/H2x1_3DS_SystemLandingPage_v07_image1600w.jpg'
      ]
    },
    {
      ano: 2012,
      titulo: 'Wii U',
      descricao: 'Wii U, foi lançado em 2012 como o primeiro console da oitava geração e se tornou um desastre comercial. Seu conceito central, o GamePad, um controle em forma de tablet, era confuso e mal comunicado, levando muitos a acreditarem que era apenas um acessório. Rapidamente superado em poder pelo PlayStation 4 e Xbox One, o Wii U sofreu com a falta de apoio de terceiros e vendeu apenas 13,56 milhões de unidades, tornando-se o console de mesa menos vendido da história da Nintendo. No entanto, sua excelente biblioteca de jogos, com títulos como Mario Kart 8 e Splatoon, e o conceito de jogo "Off-TV" serviram de protótipo para o futuro.',
      imagem: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Wii_U_Console_and_Gamepad.png/1024px-Wii_U_Console_and_Gamepad.png',
        'https://cdn.awsli.com.br/600x700/17/17021/produto/44820286/a99f37ca7c.jpg'
      ]
    },
    {
      ano: 2017,
      titulo: 'Nintendo Switch',
      descricao: 'Nintendo Switch, lançado em 2017, representou a culminação de décadas de experiência. O console híbrido, que funciona tanto na TV quanto como portátil, nasceu das lições aprendidas com os sucessos e fracassos anteriores. Seus controles Joy-Con destacáveis permitem múltiplos estilos de jogo e unificaram as divisões de desenvolvimento da Nintendo em uma única plataforma. Lançado para competir na era do PlayStation 4 e do Xbox One, mas com uma proposta única, o Switch foi um sucesso imediato. Com uma forte linha de jogos como The Legend of Zelda: Breath of the Wild e Super Mario Odyssey, já vendeu mais de 146 milhões de unidades, tornando-se o terceiro console mais vendido de todos os tempos.',
      imagem: [
        'https://files.tecnoblog.net/wp-content/uploads/2021/07/nintendo-switch-lado-a-lado-700x393.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStopjMDdr4usf94LumfNe3ZdJH8bDvJ2BZig&s',
        'https://cdn.awsli.com.br/600x450/1919/1919257/produto/180862361/d5f84530b9.jpg'
      ]
    },
     {
      ano: 2025,
      titulo: 'Nintendo Switch 2',
      descricao: 'Lançado em 5 de junho de 2025, o Nintendo Switch 2 evolui o conceito híbrido com mais poder, uma tela LCD de 7.9 polegadas Full HD e Joy-Cons magnéticos. Liderado por Shuntaro Furukawa, o console teve um desenvolvimento iniciado em 2019, visando um salto de performance e mantendo a retrocompatibilidade. O lançamento foi um recorde histórico, com títulos como "Mario Kart World", "The Duskbloods" e versões aprimoradas de jogos do Switch original, além de forte apoio de thirds como "Cyberpunk 2077".',
      imagem: [
        'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_400/ncom/en_US/articles/2025/nintendo-switch-2-to-be-released-in-2025/1920x1080_WN_PR01162025',
        'https://cdn.mos.cms.futurecdn.net/XyAaqBEtYtb8YffjKZ68Gb.jpg',
        'https://i.ytimg.com/vi/EIsAzvnAc-4/maxresdefault.jpg'
      ]
    }
  ]);

  getEventos() {
    return this.eventos.asReadonly();
  }
}
