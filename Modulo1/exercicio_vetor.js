/*
1. Acumulando o valor de vendas: Usar o laço for para calcular o total de vendas de uma
loja, dado um array com os valores das transações.

Instruções:
● Criar um array com valores de vendas diárias (por exemplo: [100, 200, 150, 300]);
● Usar o laço for para somar todos os valores;
● No final, exibir o valor total acumulado de vendas no console.
*/
console.log(`\n----- EXERCICIO 1 --------\n`)
let vendas = []
//Gerar 10 vendas aleatórias no array com valor de 1-100
for (let i = 0; i < 10; i++){
    let vendaDia = Math.floor(Math.random()*100)
    vendas.push(vendaDia)
}
console.log("Vendas realizadas: "+vendas)
console.log(`Quantidade de vendas: ${vendas.length}\n`)

let totalVendas = 0
for (let i = 0; i < vendas.length; i++){   
    console.log(`Venda ${i+1}: R$ ${vendas[i]},00`)
    totalVendas = totalVendas + vendas[i]
}

console.log(`Valor total das vendas: R$ ${totalVendas},00`)

/*
2. Calculando a média de notas: Usar um laço for para calcular a média das notas de
um/a estudante.
Instruções:
● Criar um array com as notas de um/a estudante(por exemplo: [8, 7, 9, 10, 6]);
● Utilizar o laço for para somar as notas;
● Calcular a média das notas e exibir o resultado no console.
*/
console.log(`\n----- EXERCICIO 2 --------\n`)
let notas = []
for (let i = 0; i < 5; i++) {
    //mínimo da nota será 5 e o máximo será 10
    let notaProva = Math.floor(Math.random()*(10-5+1)+5)
    notas.push(notaProva)
    console.log(`Nota ${i+1}: ${notas[i]}`)
}
let media = 0
for (let i = 0; i < notas.length; i++) {
    media = media + notas[i]
}
    console.log(`Soma das notas: ${media}`)
console.log(`Média do Aluno: ${media/notas.length}`)


/*
3. Procurando um valor no array: Usar um laço for para procurar um número específico em
um array e verificar se ele existe.
Instruções:
● Criar um array com vários números (ex: [10, 15, 20, 25, 30]);
● Definir um número que deseja procurar no array (ex: let numeroProcurado = 20);
● Utilizar um laço for para verificar se o número existe no array e exiba a mensagem
"Número encontrado" ou "Número não encontrado".

Contagem de números pares: Usar o laço for para contar quantos números pares
existem em um array de números.
Instruções:
● Criar um array com alguns números (por exemplo: [1, 2, 3, 4, 5, 6]);
● Utilizar o laço for para contar quantos números pares existem nesse array;
● Ao final, exiba a quantidade de números pares no console.
*/
console.log(`\n----- EXERCICIO 3.1 --------\n`)

const PROMPT = require("prompt-sync")()
let numeros = []
for (let i = 0; i < 50; i++) { //Gerar 50 números aleatórios no array de 1-100
    let numero = Math.floor((Math.random() * (100 - 1 +1) + 1))
    numeros.push(numero)
}
console.table(numeros)
let numeroProcurado = parseInt(PROMPT("Digite o número que deseja encontrar (1-100): "))
while (isNaN(numeroProcurado)){
    console.log("Por favor, digite um número.")
    numeroProcurado = parseInt(PROMPT("Digite o número que deseja encontrar (1-100): "))
}

let encontrado = false
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === numeroProcurado) {
        encontrado = true
        break
    }
}
console.log(`${encontrado ? "Número encontrado.": "Número não encontrado."}`)

console.log(`\n----- EXERCICIO 3.2 --------\n`)
let pares = []
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares.push(numeros[i])
    }
}
console.log(`Quantidade de números pares: ${pares.length}`)