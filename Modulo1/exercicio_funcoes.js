// Variáveis Globais
const PROMPT = require('prompt-sync')();

/* 1. Função com parâmetros e retorno: Criar uma função que calcule a média de três notas
passadas como parâmetros.
Instruções:
 Criar uma função que receba três parâmetros (nota1, nota2,nota3);
A função deve calcular a média das três notas e retornar o valor;
Chamar a função e exibir a média no console.
*/
console.log(`\n----- EXERCICIO 1 --------\n`)

//Função para calcular média de três notas
function calcularMedia(nota1, nota2, nota3){
    const media = ((nota1 + nota2 + nota3)/3).toFixed(2)
    return media
}

//Função para gerar notas das provas de modo aleatório, definindo uma nota mínima e máxima
function notaAleatoria(provas, min, max){
    let notas = []
    for (let i = 0; i < provas; i++){
        let nota = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(`Prova ${i+1}: ${nota}`)
        notas.push(nota)
    }
    return notas
}

let provas = notaAleatoria(3,5,10)
let media = calcularMedia(provas[0], provas[1], provas[2]);
console.log(`A média é ${media}`)

/*
2. Função com parâmetros: Criar uma função que verifique se uma pessoa é maior de
idade ou menor de idade.
Instruções:
 Criar uma função chamada que receba um parâmetro (idade);
Se a idade for 18 ou mais, a função deve retornar a mensagem "Você é maior de idade";
Se a idade for menor que 18, a função deve retornar a mensagem "Você é menor de idade";
Chamar a função passando uma idade e exibir o resultado no console.
*/
console.log(`\n----- EXERCICIO 2 --------\n`)
function validarIdade (idade){
    if (idade >= 18){
        console.log("Você é maior de idade")
    } else {
        console.log("Você é menor de idade")
    }
}

let idade = Number(PROMPT("Digite sua idade: "))
validarIdade(idade)


/*
3. Função com parâmetros e retorno: Criar uma função que receba dois números e um
operador e retorne o resultado da operação.
Instruções:
Criar uma função chamada calculadora que receba três parâmetros: num1, num2 e operador.
O operador pode ser um dos seguintes: + (soma), - (subtração), *(multiplicação), / (divisão);
A função deve retornar o resultado da operação;
Chamar a função com diferentes operadores e exibir os resultados no console.
*/
console.log(`\n----- EXERCICIO 3 --------\n`)

function calculadora(num1, num2, op){
    switch (op){
        case "+":
            let sum = num1+num2
            return sum
        case "-":
            let sub = num1-num2
            return sub
        case "*":
            let mult = num1*num2
            return mult
        case "/":
            let div = num1+num2
            return div
    }
}

function startCalc(){
    console.log("Bem vindo à JS_Calc! \nEscreva um número, uma operação (+ | - | / | *) e um segundo número.")
    let number1 = Number(PROMPT("Número: "));
    let operation = PROMPT("Operação: ");
    let number2 = Number(PROMPT("Número: "));
    console.log("Resultado: "+calculadora(number1,number2,operation));
}

startCalc();