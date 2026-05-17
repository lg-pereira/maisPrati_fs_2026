/* Objetos -  */

let aluno = {
    nome: "Luiz Pereira",
    idade: "31",
    matriculado: true,
    notas: [],
    calc_media () {
        let sum = 0
        for (let i = 0; i < this.notas.length; i++){
            sum += this.notas[i]
        }
        return sum/this.notas.length
    },
    nova_prova (nota) {
        this.notas.push(nota)
    }
}

// aluno.nova_prova(10)
// aluno.nova_prova(8)
// aluno.nova_prova(6)
// aluno.nova_prova(4)
// aluno.nova_prova(8)
// console.log(aluno.notas)
// console.log(aluno.calc_media())

/* Classes - Modelos de objetos com parâmetros e métodos (funções próprias reutilizáves) */

class Aluno {
    constructor(){
        this.nome
        this.idade
        this.matriculado = true
        this.notas = []
        this.endereco = {
            rua: this.rua,
            numero: this.numero,
            cidade: this.cidade,
            estado: this.estado,
            cep: this.cep
        }
    }

    media () {
        let sum = 0
        for (let i = 0; i < this.notas.length; i++){
            sum += this.notas[i]
        }
        return sum/this.notas.length
    }

    nova_prova (nota) {
        this.notas.push(nota)
    }

}

const Luiz = new Aluno()
Luiz.nome = "Luiz"
Luiz.idade = 31
Luiz.nova_prova(10)
Luiz.nova_prova(8)
Luiz.endereco.rua = "José Bianchini"
Luiz.endereco.numero = 715
Luiz.endereco.cidade = "Veco"
// console.log(Luiz.media())
// const entradas = Object.entries(Luiz)
// console.log(entradas)
console.log(Luiz.endereco)




/* Pilhas - Estruturas do tipo FILO (First in - Last out) */

// const pilha = []

// pilha.push("Livro 1")
// pilha.push("Livro 2")
// pilha.push("Livro 3")
// pilha.push("Livro 4")

// console.log(`Topo: ${pilha[pilha.length - 1]}`)
// console.log(`Removido: ${pilha.pop()}`)
// console.log(`Agora o topo é: ${pilha[pilha.length - 1]}`)

class Pilha{
    constructor() {
        this.itens = []
    }

    push(elemento){
        this.itens.push(elemento)
    }

    print(){
        console.log(this.itens)
    }

    pop(){
        if (this.isEmpty()){
            console.log("A pilha está vazia.")
        } else {
        this.itens.pop()
        }
    }

    isEmpty(){
        return this.itens.length === 0
    }

}

const pilha = new Pilha()
pilha.push("Item 1")
pilha.push("Item 2")
pilha.push("Item 3")
pilha.print() // 3
pilha.pop()
pilha.print() // 2
pilha.pop()
pilha.print() // 1
pilha.pop()
pilha.print() // 0
pilha.pop()
pilha.print() // 0
pilha.pop()