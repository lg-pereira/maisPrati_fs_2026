/* Funções */
const PROMPT = require("prompt-sync")();

// function mensagem(){
//     console.log("Olá mundo!")
// }

// mensagem()

/*
1 - Função sem parâmetros e sem retorno: Criar uma função simples que exiba uma
mensagem de saudação.
Instruções:
● Criar uma função chamada saudacao que não recebe parâmetros;
● Ex: A função deve exibir no console a mensagem "Olá, bem-vindo ao nosso sistema!";
● Chamar a função para que a saudação seja exibida.
*/

function saudacao(){
    console.log("Olá bem-vindo ao nosso sistema!")
}
saudacao()

/*
2 - Função com parâmetros: Criar uma função que receba dois números como parâmetros
e retorne a soma, subtração, multiplicação e divisão desses números.
*/

function operacoes(a, b){
    const soma = a + b;
    const subtracao = a - b;
    const multiplicacao = a * b;
    const divisao = a / b;
    return [soma, subtracao, multiplicacao, divisao];
}

function calcular(){
    let num1 = Number(PROMPT("Digite o primeiro número: "));
    let num2 = Number(PROMPT("Digite o segundo número: "));
    let resultado = operacoes(num1, num2);
    console.log(`Soma: ${resultado[0]}`);
    console.log(`Subtração: ${resultado[1]}`);
    console.log(`Multiplicação: ${resultado[2]}`);
    console.log(`Divisão: ${resultado[3]}`);
}

// calcular();

function calcularMedia(nota1, nota2){
    let media = (nota1 + nota2)/2

    return media
}

let resultado = calcularMedia(8, 10)
console.log(`A média é ${resultado}`)

//EXEMPLO DO FLUXO DA FUNÇÃO
function saudacao(nome){
    console.log(`Ola, ${nome}`)
}

console.log("Inicio do programa") // ao ler a linha executa o console.log
saudacao("Guilherme") // ao ler a linha ele busca a função passa o parametro e executa o bloco de código
console.log("Fim do programa")// ao ler a linha executa o console.log
