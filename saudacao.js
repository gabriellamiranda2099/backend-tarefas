function saudacao(nomeJogador) {
    console.log("Bem vindo ao jogo, " + nomeJogador + "!")
}

saudacao("MaoMao");

//Função que recebe um valor
function subirNivel(nivelAtual) {
    return nivelAtual +1;

}
 
let meuNivel = 20;

let nivelAtualizado = subirDeNive(meuNivel);

console.log('Seu novo nivel: ' + nivelAtualizado);