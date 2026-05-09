/* Estruturaas condicionais
IF = Se
ELSE = Senão
ELSE IF = Senão se
SWITCH = Caso
*/

/*Crie um programa com a idade do aluno e se ele possui autorizacao (responda com
sim ou nao).
O sistema deve mostrar:
- Acesso permitido, se o aluno tiver 14 anos ou mais e autorizacao = sim.
- Acesso permitido com responsavel, se o aluno tiver 12 ou 13 anos and autorizacao = sim.
- Acesso negado, se o aluno tiver menos de 12 anos or se nao tiver autorizacao
*/
const promptSync = require("prompt-sync")();
let idade = parseInt(promptSync("Digite a idade do aluno: "))
let autorizacao = promptSync("O aluno possui autorizacao? (sim ou nao): ")

if (idade >= 14 && autorizacao == "sim"){
    console.log("Acesso permitido")
} else if ((idade >= 12 && idade <= 13) && autorizacao == "sim"){
    console.log("Acesso permitido com responsavel")
} else if (idade < 12 || autorizacao != "sim"){
    console.log("Acesso negado")
}

/* Estruturas de repetição
FOR = Para
WHILE = Enquanto
DO = Faça
*/

//for(inicialização; codição; incremento ou decremento)

//Cria uma repição de x vezes. Nesse caso eu sei quantas vezes vai repitir
for(let i = 5; i >= 0; i--){
    console.log(i)
}

//while(condição){função} - condição é verificada ANTES da execução

let i = 0
while(i < 5){
    console.log(i)
    i++
}

/* 
    do{
        ação a ser executada
    }while(condição) - Ação é executada PELO MENOS uma vez
*/
let j = 0
do{
    console.log(j)
    j++
}while(j < 5)