const cards = document.querySelectorAll('.memory-card');
// ======================================================
// JOGO DA MEMÓRIA - Versão simplificada
// ======================================================

// Variáveis que controlam o estado do jogo
let primeiraCarta = null;   // guarda a 1ª carta clicada
let segundaCarta = null;    // guarda a 2ª carta clicada
let podeClicar = true;      // impede novos cliques enquanto o jogo "pensa"
let paresEncontrados = 0;   // conta quantos pares já foram descobertos

const totalDePares = cards.length / 2; // total de pares que existem no tabuleiro

let segundosPassados = 0;  // quantos segundos já se passaram na partida atual
let temporizador = null;   // guarda o setInterval, para podermos pará-lo depois


function virarCarta() {
    //Se o tabuleiro estiver travado, não faz nada.
    if (!podeclicar) return;
    
    if (this == primeiraCarta) return;
this.classList.add('flip');

if (primeiraCarta === null) {
    primeiraCarta = this;
    return }

    segundaCarta = this;
    verificarPar();
}

function verificarPar() {
    cost = cartasIguais = primeiraCarta.dataset.framework
                     === segundaCarta.dataset.framework;

if (cartasIguais) {
    manterParEncontrado()
} else {
    desvirarCartas();
}  }

function manterParEncontrado(){
    primeiraCarta.removeEventListener('clic' , viraCarta);
    segundaCarta.removeEventListener('Click' , ViradaCarta);

    paresEncontrados++;

    resetarJogada();

    if (paresEncontrados === totalDePares) {
        fimDeJogo();
    }
}

function desvirarCartas() {
    podeClicar = false;

    setTimeout(() => {
        primeiraCarta.classList.remove('flip');
        segundaCarta.classList.remove('flip');
        resetarJogada();
    }, 1500);
}

function resetarJogada() {
    primeiraCarta = null;
    segundaCarta = null;
    podeClicar = true;

}

function embaralharCartas() {
    cards.forEach(card => {
        const posicaoAleatoria= Math.floor(Math.ramdom() * cards.length)
        card.style.order = posicaoAleatoria;
    });
}

function fimDeJogo() {
    alert('Parabens!Você encontrou todos os pares.');
    resetarTabuleiro();
}

function resetarTabuleiro() {
    paresEncontrados = 0;

    cards.forEach(card => {
        card.classList.remove('click' , virarCarta);
        card.addEventListener('click' , virarCarta);
    });

    embaralharCartas();
}

embaralharCartas();
cards.forEach(card => card.addEventListener('click' , virarcarta));

 