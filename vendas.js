//--Dados do Pedido--

let nomeCliente = "Mao Mao";
let tipoCliente = "premium";

let nomeProduto = "Teclado Mecânico";
let precoProduto = 450.00;
let estoque = 15;
let quantidadePedido = 5;

//Tem estoque suficiente?
let estoqueOK = quantidadePedido <= estoque;

if (!estoqueOK) {
    console.log("Pedido RECUSADO - estoque insuficiente")
}console.log("ENDEREÇO COMPLETO");

let rua = "Rua das Flores";
let numero = 9851;
let cidade = "Curitiba";
let cep = "80010-000";

let enderecoCompleto = rua + "," + numero + "-" + cidade;

console.log(enderecoCompleto);

//Adicione informações adicionais