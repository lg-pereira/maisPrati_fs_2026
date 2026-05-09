/* Comentários em bloco 
podem ter várias linhas
*/
//Variáveis declaradas, nao podem iniciar com números
var nome = "Luiz" //variável de texto
let numero = 10 //variável de número
let boolean = false //variável de boolean
let nulo = null //variável de nulo
let indefinido //variável de indefinido

const Curso = "Full Stack" //Constante, nao permitte troca de valor


// Operadores aritmeticos
let a = 10
let b = 5
let c = 1
let soma = a + b //adição
let subtracao = a - b //subtração
let multiplicacao = a * b //multiplicação
let divisao = a / b //divisão
let modulo = a % b //módulo - resto da divisão
let exponenciacao = a ** b //exponenciação - potência

console.log("Soma: ", soma)
console.log("Subtração: ", subtracao)
console.log("Multiplicação: ", multiplicacao)
console.log("Divisão: ", divisao)
console.log("Módulo: ", modulo)
console.log("Exponenciação: ", exponenciacao)

//Operadores de comparação
console.log("Maior que: ", a > b)
console.log("Menor que: ", a < b)
console.log("Maior ou igual que: ", a >= b)
console.log("Menor ou igual que: ", a <= b)
console.log("Igualdade: ", a == b)
console.log("Desigualdade: ", a != b)
console.log("Identico a: ", a === b)
console.log("Nao Identico a: ", a !== b)

//Operadores de atribuição
let atribuicao = c //atribuição
console.log("Atribuição: ", atribuicao)
let atribuicaoAdicao = atribuicao += a //atribuição com adição
console.log("Atribuição com adição: ", atribuicaoAdicao)
let atribuicaoSubtracao = atribuicao -= b //atribuição com subtração
console.log("Atribuição com subtração: ", atribuicaoSubtracao)
let atribuicaoMultiplicacao = atribuicao *= a //atribuição com multiplicação
console.log("Atribuição com multiplicação: ", atribuicaoMultiplicacao)
let atribuicaoDivisao = atribuicao /= b //atribuição com divisão
console.log("Atribuição com divisão: ", atribuicaoDivisao)
let atribuicaoModulo = atribuicao %= a //atribuição com módulo - resto da divisão
console.log("Atribuição com módulo: ", atribuicaoModulo)
let atribuicaoExponenciacao = atribuicao **= b //atribuição com exponenciação - potência
console.log("Atribuição com exponenciação: ", atribuicaoExponenciacao)

//Operadores de Incremento e Decremento
console.log("Incremento: ", a++)
console.log("Decremento: ", a--)

//Operadores lógicos
if (a && b <=c){
    console.log("a é maior que b e menor que c")
} else if (a && b >= c){
    console.log("a é maior que b e maior que c")
} else {
    console.log("a é menor que b")
}
if (typeof(a) === "number" || typeof(b) === "number"){
    console.log(`${a} ou ${b} são números`)
}
if (!(typeof(a) === "string" && !typeof(b) === "string")){
    console.log(`${a} ou ${b} nao sao textos`)
}

//Operadores ternários
let resultado = a > b ? "Maior" : "Menor"
console.log("Ternário: ", resultado)