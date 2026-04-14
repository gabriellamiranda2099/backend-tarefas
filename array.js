//Lista de frutas- ARRAY

const frutas = ["Maçã", "Banana", "Uva","Manga"];

console.log(frutas[1]);
console.log(frutas[3]);
console.log(frutas.lenght);
frutas[1] = "Morango"; //Altera o valor do elemento
frutas.push("Pessego"); //Adiciona um item elemento no final
frutas.unshift("Pera");
console.log(frutas);
console.log(frutas.lenght);

frutas[3] = "Abacate";
frutas.push("Melão");
console.log(frutas);
