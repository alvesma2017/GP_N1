//variavel com o nome da calculadora
var nome = "Calculadora do Benito"

// funcao soma com dois parametros de soma
function soma(a,b){
    // retorna a somatoria de a + b
    return a + b 
}

// funcao soma com dois parametros de multiplicacao
function multiplica(a,b){
    
    // retorna a multiplicacao de a * b
    return a * b
}
// funcao soma com dois parametros de diminuicao
function diminui(a,b){
// retorna a subtracao de a - b
    return a-b
}
// funcao soma com dois parametros de divisao
function divisao(a,b){
// retorna a divisao de a / b
    return a/b

}

//exportando todas as funcoes e a VARIAVEL NOME para que seja usada em qualquer arquivo do projeto
module.exports = {
    soma,
    multiplica,
    diminui,
    divisao,
    nome

}