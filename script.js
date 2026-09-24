const jogos = {

    rdr2: {
        titulo: "Red Dead Redemption II",
        imagem: "img/rdr2.png",
        descricao: "Uma aventura de mundo aberto ambientada no Velho Oeste, acompanhando Arthur Morgan e sua gangue em uma história marcada por escolhas e sobrevivência.",
        genero: "Ação / Aventura",
        desenvolvedora: "Rockstar Games",
        lancamento: "2018"
    },


    re9: {
        titulo: "Resident Evil 9: Requiem",
        imagem: "img/re9.png",
        descricao: "Um novo capítulo da famosa franquia de terror da Capcom, trazendo exploração, combate e uma nova ameaça para enfrentar.",
        genero: "Terror / Ação",
        desenvolvedora: "Capcom",
        lancamento: "2026"
    },


    zzz: {
        titulo: "Zenless Zone Zero",
        imagem: "img/zzz.png",
        descricao: "Um RPG de ação urbano com combates rápidos, personagens únicos e uma cidade cheia de mistérios e perigos.",
        genero: "RPG / Ação",
        desenvolvedora: "HoYoverse",
        lancamento: "2024"
    },


    bl3: {
        titulo: "Borderlands 3",
        imagem: "img/bl3.png",
        descricao: "Um looter-shooter frenético com milhões de armas, habilidades especiais e muito caos enquanto você enfrenta novos inimigos pela galáxia.",
        genero: "FPS / Looter Shooter",
        desenvolvedora: "Gearbox Software",
        lancamento: "2019"
    },


    codmw19: {
        titulo: "Call of Duty: Modern Warfare",
        imagem: "img/cod mw19.png",
        descricao: "Um reboot da clássica franquia de tiro, trazendo uma campanha intensa, combate moderno e uma experiência multiplayer competitiva.",
        genero: "FPS",
        desenvolvedora: "Infinity Ward",
        lancamento: "2019"
    },


    mk1: {
        titulo: "Mortal Kombat 1",
        imagem: "img/mk1.png",
        descricao: "Um reboot do universo de Mortal Kombat, reunindo personagens conhecidos em uma nova história cheia de combates brutais e fatalities.",
        genero: "Luta",
        desenvolvedora: "NetherRealm Studios",
        lancamento: "2023"
    },


    hk: {
        titulo: "Hollow Knight",
        imagem: "img/hk.png",
        descricao: "Uma aventura metroidvania sombria e desafiadora, ambientada em um vasto reino subterrâneo repleto de criaturas, segredos e batalhas.",
        genero: "Metroidvania / Ação",
        desenvolvedora: "Team Cherry",
        lancamento: "2017"
    },


    ck: {
        titulo: "Chaves Kart",
        imagem: "img/ck.png",
        descricao: "Um jogo de corrida inspirado na clássica série mexicana, colocando Chaves e seus amigos em pistas malucas com itens e obstáculos.",
        genero: "Corrida",
        desenvolvedora: "Epopeia Games",
        lancamento: "2024"
    },


    ds2: {
        titulo: "Dark Souls II",
        imagem: "img/ds2.png",
        descricao: "Um RPG de ação sombrio e desafiador, marcado por combates difíceis, exploração perigosa e um enorme mundo cheio de inimigos e segredos.",
        genero: "RPG / Ação",
        desenvolvedora: "FromSoftware",
        lancamento: "2014"
    },


    mt3: {
        titulo: "Miami Traffic 3",
        imagem: "img/mt3.png",
        descricao: "Um jogo caótico de mundo aberto estrelado por gatos, inspirado em clássicos como GTA e cheio de situações absurdas.",
        genero: "Ação / Mundo Aberto",
        desenvolvedora: "Desconhecida",
        lancamento: "Desconhecido"
    },


    wd1: {
        titulo: "WATCH_DOGS",
        imagem: "img/wd1.png",
        descricao: "Um jogo de ação e mundo aberto onde tecnologia e hacking são suas principais ferramentas para explorar e enfrentar o crime em Chicago.",
        genero: "Ação / Mundo Aberto",
        desenvolvedora: "Ubisoft Montreal",
        lancamento: "2014"
    },


    br: {
        titulo: "Bad Rats",
        imagem: "img/br.png",
        descricao: "Um jogo de quebra-cabeças completamente insano onde você controla ratos e usa objetos do cenário para derrotar seus inimigos.",
        genero: "Puzzle",
        desenvolvedora: "Invent4 Entertainment",
        lancamento: "2009"
    }

};


// Pega o que está escrito depois de ?game=
const parametros = new URLSearchParams(window.location.search);

const idJogo = parametros.get("game");


// Procura o jogo dentro do objeto
const jogo = jogos[idJogo];


// Se o jogo existir...
if (jogo) {

    document.querySelector("#titulo").textContent = jogo.titulo;

    document.querySelector("#imagem").src = jogo.imagem;

    document.querySelector("#imagem").alt = jogo.titulo;

    document.querySelector("#descricao").textContent = jogo.descricao;

    document.querySelector("#genero").textContent = jogo.genero;

    document.querySelector("#desenvolvedora").textContent = jogo.desenvolvedora;

    document.querySelector("#lancamento").textContent = jogo.lancamento;

    document.title = `${jogo.titulo} - GameRate`;

}


// Se alguém acessar jogo.html sem especificar um jogo
else {

    document.querySelector("main").innerHTML = `
        <h1>Jogo não encontrado</h1>

        <p>
            O jogo que você está procurando não existe.
        </p>

        <a href="index.html" class="botao">
            Voltar para o início
        </a>
    `;

}
