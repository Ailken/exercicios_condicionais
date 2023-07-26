//valor do produto comprado.
const valorDoProduto = 1000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 100;

const valorDaParcela = valorDoProduto / quantidadeDoParcelamento

let quantidadeParcelasAPagas = valorPago / valorDaParcela;

let parcelasAPagar = quantidadeDoParcelamento - quantidadeParcelasAPagas;

console.log("Restam " + parcelasAPagar + " parcelas de R$" + valorDaParcela)