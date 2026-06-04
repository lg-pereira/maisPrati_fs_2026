/** Variáveis globais */
const Prompt = require('prompt-sync')()

//Função para deixar a primeira letra Maíuscula da Palavra
function Normalize (t) {
    let text = t.at(0).toUpperCase()+t.substr(1)
    return text
}

let classe = [
    {nome: "Luizinho", nota: 6} ,
    {nome: "Juquinha", nota: 7 },
    {nome: "Zézinho", nota: 8 },
    {nome: "Floriano", nota: 10 },
    {nome: "Policarpo", nota: 3 },
    {nome: "Quaresma", nota: 10}
]

for (aluno of classe) {
    let status = aluno.nota >= 7 ? "Aprovado" : aluno.nota <= 4 ? "Reprovado" : "Recuperação"
    aluno.status = status
    console.log(`${aluno.nome}: ${status}`)
}
classe.aprovados = {notas: 0, alunos: 0, media () { return (this.notas/this.alunos).toFixed(2)}}
classe.reprovados = {notas: 0, alunos: 0, media () {return (this.notas/this.alunos).toFixed(2)}}

classe.forEach((aluno) => {
    if(aluno.status === "Aprovado"){
        classe.aprovados.notas += aluno.nota
        classe.aprovados.alunos++
    } else if (aluno.status === "Reprovado") {
        classe.reprovados.notas += aluno.nota
        classe.reprovados.alunos++
    }     
})
console.log(classe.aprovados.media())
console.log(classe.reprovados.media())