
// funcao soma com dois parametros de soma
function soma(a,b){
    // retorna a somatoria de a + b
    return a + b 
}

//exportando a funcao SOMA para que seja usada em qualquer arquivo do projeto
module.exports = soma 

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


//pega a funcao soma com os valores 10 e 20 e printa o resultado
console.log(soma(10,20)) 
//pega a funcao multiplicacao com os valores 2 e 5 e printa o resultado
console.log(multiplica(2,5))
//pega a funcao diminui com os valores 20 e 10 e printa o resultado
console.log(diminui(20,10))
//pega a funcao divisao com os valores 50 e 2 e printa o resultado
console.log(divisao(50,2))