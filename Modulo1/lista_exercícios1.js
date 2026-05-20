/** Variáveis globais */
const Prompt = require('prompt-sync')()


/* 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if. */

console.log(`\n----- EXERCICIO 1 --------\n`)

let num = 9
if (num % 2 === 0 ){
    console.log("Número é par")
}
if (num % 2 != 0){
    console.log("Número é impar")
}

/* 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else. */
console.log(`\n----- EXERCICIO 2 --------\n`)

let age = 70
if (age >= 12){
    if (age >= 18){
            if (age >= 59){
                if (age >= 60){
                    console.log("Idoso")
                }
            } else {
                console.log("Adulto")
                }
    } else {
        console.log("Adolescente")
        }
} else {
    console.log("Criança")  
    }

/* 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado",
"Recuperação", ou "Reprovado" utilizando if-else if. */
console.log(`\n----- EXERCICIO 3 --------\n`)

let nota = 5
if (nota <= 3 ){
    console.log("Reprovado")
} else if (nota >= 7 ) {
    console.log("Aprovado")
} else {
    console.log("Recuperação")
}

/* 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada. */
console.log(`\n----- EXERCICIO 4 --------\n`)

console.log("Escolha uma das opções abaixo digitando o número \nOpção [1] - A joke\nOpção[2] - Luck number\nOpção[3] - Silence")
let choose = Number(Prompt("3Sua escolha? "))

switch(choose){
    case 1:
        console.log("Sabe por que o computador foi preso? Porque ele executou um programa!")
        break
    case 2:
        let luck = Math.floor(Math.random()*100)
        console.log(`Seu número da sorte é ${luck}`)
        break
    case 3:
        console.log("Zzzzzzzzzz")
        break
    default:
        console.log("Não escolheu nenhuma das opções")
}

/* 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.  */
console.log(`\n----- EXERCICIO 5 --------\n`)

let peso = 90
let altura = 1.77
let imc = peso/(altura**2).toFixed(1)
if (imc < 18.5 ){
    console.log("Baixo Peso")
} else if (imc >= 18.5 && imc < 25 ){
    console.log("Peso Normal")
} else if ( imc >= 25 && imc < 30 ){
    console.log("Sobrepeso")
} else {
    console.log("Obesidade")
}

/* 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
● Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C <
A + B
● Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
● Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
● Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C) */
console.log(`\n----- EXERCICIO 6 --------\n`)

let lado_A = 3
let lado_B = 4
let lado_C = 5

if ( lado_A < (lado_B + lado_C) && lado_B < (lado_A + lado_C) && lado_C < (lado_A + lado_B)){
    if (lado_A === lado_B && lado_B === lado_C) {
        console.log("Triângulo Equilátero")
    } else if ( lado_A != lado_B && lado_B != lado_C){
        console.log("Triângulo Escaleno")
    } else {
        console.log("Triângulo Isósceles")
    }
} else {
    console.log("Os valores não formam um triângulo.")
}

/* 7. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a
média aritmética desses números.  */
console.log(`\n----- EXERCICIO 7 --------\n`)

while(true) {
    console.log("Digite números decimais, digite 0 para parar e recebar a média.")
    let dec_sum = 0
    let counter = 0
    let dec_num
    do{
        dec_num = parseFloat(Prompt())
        if (isNaN(dec_num)){
            dec_num = parseFloat(Prompt("Digite um número: "))
        } else {
            dec_sum += dec_num
            counter++
        }
    } while (dec_num != 0)
    console.log(`A média dos números é ${(dec_sum/counter).toFixed(2)}`)
    break
}

/* 8. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando
um loop for ou while. */
console.log(`\n----- EXERCICIO 8 --------\n`)

let fact_num = Number(Prompt("Digite um número: "))
let fact = fact_num
while(fact_num >= 2){
    fact = fact * --fact_num
}
console.log(fact)

/* 9. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for. */
console.log(`\n----- EXERCICIO 9 --------\n`)

let j = 0
let k = 1
for (let i = 0; i < 10; i++){
    let l = j + k
    console.log(l)
    j = k
    k = l
}

/* 10. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados. */
console.log(`\n----- EXERCICIO 10 --------\n`)

while (true) {
    let names = []
    do {
        if (names.length === 7){
            for (let i = 1; i <= names.length; i++) {
            console.log(names[(names.length-i)])
            }
            break
        }
        let name = Prompt("Digite um nome: ")
        names.push(name)
    }
    while (true)
    break
}

/* 11. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade. */
console.log(`\n----- EXERCICIO 11 --------\n`)

while(true){
    let names = []
    let ages = []
    do {
        if (names.length === 4) {
            for (person in ages){
                if (ages[person] < 18){
                    console.log(`${names[person]} tem ${ages[person]}`)
                }
            }
            break
        }
        let nome = Prompt("Digite um nome: ")
        names.push(nome)
        let idade = Prompt("Digite uma idade: ")
        ages.push(idade)
    } while (names.length < 5)
    break
}
/* 12. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa
eretorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso
ideal = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7 */
console.log(`\n----- EXERCICIO 12 --------\n`)

function weigth (h, t){
    let type = t.toLowerCase()
    let w
    if (type === "f"|| type === "fem" || type === "feminino"|| type === "mulher") {
        w = (62.1 * h) - 44.7
    } else if (type === "m" || type === "masc" ||type === "masculino" ||type === "homem") {
        w = (72.7 * h) - 58
    } else {
        console.log("Tipo não encontrado, informe se a pessoa é do sexo [M]asculino ou [F]eminino")
    }
    return w.toFixed(2)
}


/* 13. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada no
seguinte: existe uma tabela com os dados de cada funcionário: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
○ Matrícula:
○ Nome:
○ Salário bruto:
○ Dedução INSS:
○ Salário líquido:
○ (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a
redução do INSS). */

function contracheque (employees){
    if (Array.isArray(employees)) {
        for (let worker of employees) {
            console.log(` 
                ○ Matrícula: ${worker[0]}
                ○ Nome: ${worker[1]}
                ○ Salário bruto: ${worker[2]}
                ○ Dedução INSS: ${(worker[2]*0.12)}
                ○ Salário líquido: ${(worker[2]*0.88)}`)
        }
    } else {
        console.log(`Entrada de dados incorreta, uma tabela deve ser fornecida como parâmetro \ncom Matrícula, Nome e Salário Bruto. \nExemplo: [
            [1, 'Luiz', 1200],
            [2, "Ana", 2500],
            [3, "Carlos", 1800]
         ]`)
    }
    return
}

/* 14. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando dados
sobre salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a
média do número de filhos, o maior salário e o percentual de pessoas com salário até
R$350,00. */



/* 15. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da diagonal
principal são iguais a 1 e os demais são nulos.  */


/* 16. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M.  */


/* 17. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
nome e idade. */


/* 18. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays. */


/* 19. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
combinando as propriedades de ambos, onde as propriedades de obj2 têm
precedência sobre as do obj1 em caso de conflitos. */


/* 20. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é o
número de vezes que a string aparece no array. */


/* 21. Suponha que você tem um array de objetos onde cada objeto representa uma venda
com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
de vendas por vendedor. */