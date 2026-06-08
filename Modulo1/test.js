/** Variáveis globais */
const Prompt = require('prompt-sync')()

//Função para deixar a primeira letra Maíuscula da Palavra
function Normalize (t) {
    let text = t.at(0).toUpperCase()+t.substr(1)
    return text
}

//Função para gerar números aleatório com base no mínimo e máximo
function Random(min, max){
    let number = Math.floor(Math.random()* (max++ - min + 1 ) + min)
    return number
}
