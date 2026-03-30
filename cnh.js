const idade = 15;
const maiorIdade = idade >= 18;
const possuiCNH = false;

const podeDirigir = maiorIdade && possuiCNH;
console.log(`Pode viaar sozinho?`, podeDirigir);

const podeViajarSozinho = maiorIdade || possuiCNH; 
console.log (`Pode viajar sozinho?`, podeViajarSozinho);

const precisaDeAcompanhante = !maiorIdade; 
console.log(`Precisa de acompanhante?`, precisaDeAcompanhante);

