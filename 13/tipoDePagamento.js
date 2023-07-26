//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if (tipoDePagamento === "credito") {
    let valorASerPago = valorDoProduto - (valorDoProduto * 0.05);
    console.log("Valor a ser pago: R$ 123.50");
} else if (tipoDePagamento === "cheque") {
    console.log(valorDoProduto - (valorDoProduto * 0.03));
} else {
    console.log(valorDoProduto - (valorDoProduto * 0.10));
}