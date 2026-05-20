const Prompt = require('prompt-sync')()

let table = [
  [1, "Luiz", 1200],
  [2, "Ana", 2500],
  [3, "Carlos", 1800],
  [4, "Maria", 3200],
  [5, "João", 1500],
  [6, "Fernanda", 2700],
  [7, "Pedro", 2100],
  [8, "Juliana", 3500],
  [9, "Lucas", 1300],
  [10, "Beatriz", 2900]
];

function contracheque (employees){
    if (Array.isArray(employees)) {
        for (let worker of employees) {
            console.log(` 
                ○ Matrícula: ${worker[0]}
                ○ Nome: ${worker[1]}
                ○ Salário bruto: ${worker[2]}
                ○ Dedução INSS: ${(worker[2]*0.12)}
                ○ Salário líquido: ${(worker[2]*0.88)}
            `)
        }
    } else {
        console.log("Entrada de dados incorreta, a tabela deve ser fornecida como parâmetro.")
    }
    return
}

console.log(contracheque(table))
