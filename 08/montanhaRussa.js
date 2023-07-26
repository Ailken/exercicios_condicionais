const idade = 12;
const possuiPatologia = false;
const altura = 160;
const ehEstudante = false;

if (idade < 12 || idade > 65 || possuiPatologia === true || altura < 150) {
    console.log("ACESSO NEGADO");
} else if (idade >= 12 && idade < 18) {
    console.log("R$ 10.00");
} else {
    console.log("R$ 20.00");
}