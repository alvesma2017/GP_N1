//variavel que chama a funcao soma do arq calculadora                       
//importando (require) o arquivo de funcoes chamado calculadora
var calculadora = require("./calculadora")

//printando a variavel nome
console.log(calculadora.nome)
//printando o resultado das funcoes
console.log(calculadora.soma(10,20))
console.log(calculadora.multiplica(2,5))
console.log(calculadora.diminui(20,10))
console.log(calculadora.divisao(50,2))

