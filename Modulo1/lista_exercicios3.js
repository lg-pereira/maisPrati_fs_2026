/* LlSTA DE TAREFAS 3 - T1/2026 */
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

/* 1. Crie um objeto representando um produto com as propriedades: nome, preço,
categoria e quantidade em estoque. Use for...in para percorrer e exibir todas as
propriedades e seus valores. Em seguida, adicione uma nova propriedade
desconto ao objeto e exiba o preço final calculado. */
console.log(`\n----- EXERCICIO 1 --------\n`)

let obj1 = {
    item: "Nike Shocks 950",
    price: 750,
    category: "Tenis",
    stock: 20
}

for (prop in obj1) {
    console.log(`${Normalize(prop)}: ${obj1[prop]}`)
}
obj1.discountPercent = 10
console.log("Preço final:",obj1.price*(1-(obj1.discountPercent/100)))

/* 2. Crie dois objetos representando personagens de um jogo, cada um com as
propriedades: nome, vida, ataque e defesa. Use for...in para exibir os atributos de
cada personagem lado a lado e determine qual deles tem maior Total Power
(soma de vida + ataque + defesa). */
console.log(`\n----- EXERCICIO 2 --------\n`)

let caracter1 = {
    name: "Big Mike",
    life: Random(350, 1500),
    attack: Random(20, 80),
    defense: Random(10, 40)
}

let caracter2 = {
    name: "Stuart Little",
    life: Random(350, 1500),
    attack: Random(20, 50),
    defense: Random(30, 100)
}

while (true){
    console.log(`${caracter1.name} vs ${caracter2.name}`)
    caracter1["Total Power"] = 0
    caracter2["Total Power"] = 0

    for (attribute in caracter1){
        if (attribute === "name") continue
        console.log(`${Normalize(attribute)}: ${caracter1[attribute]} ${caracter1[attribute] > caracter2[attribute] ? ">" : "<"} ${caracter2[attribute]}`)
        caracter1["Total Power"] += caracter1[attribute]
        caracter2["Total Power"] += caracter2[attribute]
    }
    let winner = caracter1["Total Power"]  > caracter2["Total Power"] ? caracter1.name : caracter2.name
    console.log(`O vencedor é ${winner}`)
    break
}

/* 3. Crie um objeto representando um funcionário com nome, cargo, salário e anos de
experiência. Use for...in para listar todos os dados. Com base nos anos de
experiência, calcule e exiba o bônus anual: até 2 anos = 5% do salário, de 3 a 5
anos = 10%, acima de 5 anos = 15%. */
console.log(`\n----- EXERCICIO 3 --------\n`)

let worker = {
    nome: "Francisco Camargo",
    cargo: "Supervisor",
    salario: Random(2220, 10550),
    anos: Random(1, 10)
}

while(true){
    for (prop in worker){
        if (prop === "anos"){
            console.log(`${Normalize(prop)}: ${worker[prop]}`)
            if (worker[prop] <= 2){
                console.log(`Bônus Anual: ${(worker.salario*0.05).toFixed(2)}`)
            } else if (worker[prop] > 2 && worker[prop] <= 5 ){
                console.log(`Bônus Anual: ${(worker.salario*0.10).toFixed(2)}`)
            } else {
                console.log(`Bônus Anual: ${(worker.salario*0.15).toFixed(2)}`)
            }
            continue
        }
        console.log(`${Normalize(prop)}: ${worker[prop]}`)
    }
    break
}

/* 4. Crie um objeto onde cada chave é o nome de um item e o valor é a quantidade
no inventário do jogador (ex: { espada: 1, poção: 5, escudo: 2 }). Use for...in para
listar o inventário completo. Permita que o usuário informe um item para usar:
reduza a quantidade em 1 ou exiba "item esgotado" se for zero. */
console.log(`\n----- EXERCICIO 4 --------\n`)

let bag = {
    sword: 2,
    shield: 3,
    hammer: 1,
    axe: 2,
    medkit: 5,
    juice: 4,
    barbecue: 1,
}

function useItem (t){
    let item = t.toLowerCase()
    if (bag[item] < 1) console.log("Item esgotado")
    else {
        bag[item]--
        console.log(`${Normalize(item)} restantes: ${bag[item]}`)
    }
}

while (true){
    console.log("Abrindo o inventário")
    for (item in bag){
        console.log(`${Normalize(item)}: ${bag[item]}`)
    }
    let itemChoose = Prompt("Digite o item deseja usar: ")
    useItem(itemChoose)
    break
}

/* 5. Crie um objeto representando o orçamento mensal de uma pessoa, com
categorias como alimentação, transporte, lazer e saúde, cada uma com valor
planejado e valor gasto. Use for...in para percorrer as categorias e exibir se cada
uma ficou dentro ou acima do orçamento, e calcule o saldo geral do mês. */
console.log(`\n----- EXERCICIO 5 --------\n`)

let budget = {
    "moradia": {
        plan: 2000,
        spent: 1750
    },
    "alimentação": {
        plan: 1500,
        spent: 1250
    },
    "saúde": {
        plan: 400,
        spent: 800
    },
    "combustível": {
        plan: 400,
        spent: 350
    },
    "recreação": {
        plan: 200,
        spent: 100
    }
}

do {
    let amount = 0
    for ( item in budget){
        let verify = budget[item]
        console.log(`${Normalize(item)}: ${verify.spent <= verify.plan ? "Dentro do orçamento" : "Acima do orçamento"}`)
        amount += (verify.plan-verify.spent)
    }
    console.log(`Saldo Geral do Mês: ${amount}`)
    break
} while (true)

/* 6. Crie um array de objetos representando músicas, cada uma com título, artista e
duração em segundos. Use for...of para exibir cada música no formato "Artista —
Título (mm:ss)". Ao final, use forEach para somar a duração total e exiba-a no
mesmo formato. */
console.log(`\n----- EXERCICIO 6 --------\n`)

let album = [
    {title: "Eu Sei", artist: "Charlie Brown Jr.", duration: 214},
    {title: "1 minuto para o fim do mundo", artist: "CPM 22", duration: 198},
    {title: "O Papa é Pop!", artist: "Engenheiros do Havaí", duration: 223},
    {title: "Admirável Chip Novo", artist: "Pitty", duration: 187},
    {title: "Amanhã Colorido", artist: "Cidadão Quem", duration: 241},
    {title: "Paz e Amor", artist: "Nenhum de Nós", duration: 205},
    {title: "Somewhere only we know", artist: "Lily Allen", duration: 217},
    {title: "Sound of Silence", artist: "Disturbed", duration: 193}
]

function NormalizeTime (time){
    let sec = Math.floor(time%60)
    if (sec < 10) sec = "0"+sec
    let min = Math.floor(time/60)
    if (min < 10) min = "0"+min
    return {m: min, s: sec}
}

while(true) {
    let totalTime = 0
    for (music of album){
        let time = NormalizeTime(music.duration)
        console.log(`${music.artist} — ${music.title} (${time.m}:${time.s})`)
    }
    album.forEach((music) => totalTime += music.duration)
    totalTime = NormalizeTime(totalTime)
    console.log(`Tempo total: ${totalTime.m}:${totalTime.s} min`)
    break
}

/* 7. Crie um array de objetos com nome e nota de 6 alunos. Use for...of para classificar
cada aluno (Aprovado, Recuperação ou Reprovado) e exibir o resultado. Use
forEach para calcular e exibir separadamente a média dos aprovados e a média
dos reprovados. */
console.log(`\n----- EXERCICIO 7 --------\n`)

let classe = [
    {nome: "Luizinho", nota: Random(3, 10)} ,
    {nome: "Juquinha", nota: Random(3, 10) },
    {nome: "Zézinho", nota: Random(3, 10) },
    {nome: "Floriano", nota: Random(3, 10) },
    {nome: "Policarpo", nota: Random(3, 10) },
    {nome: "Teresa", nota: Random(3, 10)}
]

do {
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

    console.log(`Média dos Aprovados: ${classe.aprovados.media()}`)
    console.log(`Média dos Reprovados: ${classe.reprovados.media()}`)
    break

} while(true)

/* 8. Crie um array de objetos representando produtos com nome, preço e quantidade.
Use forEach para calcular o valor total em estoque de cada produto (preço ×
quantidade) e exibir um relatório. Ao final, exiba o valor total geral de todo o
estoque. */
console.log(`\n----- EXERCICIO 8 --------\n`)

let stock = [
    {item: "Mouse Bluetooth", price: Random(50, 100), stock: Random(1, 50)},
    {item: "Mouse Gamer", price: Random(250, 750), stock: Random(1, 10)},
    {item: "Headphone", price: Random(150, 300), stock: Random(1, 30)},
    {item: "Teclado Gamer", price: Random(250, 750), stock: Random(1, 20)},
    {item: "Mouse Pad", price: Random(25, 50), stock: Random(1, 100)},
    {item: "Macbook Pro 14'", price: Random(6000, 10250), stock: Random(1, 10)},
    {item: "Hub USB-c", price: Random(150, 250), stock: Random(1, 10)},
    {item: "Fone Bluetooth", price: Random(10, 250), stock: Random(1, 50)},
    {item: "Cabo USB-c", price: Random(50, 70), stock: Random(1, 25)}
]

let totalStock = 0
stock.forEach((item) => {
    let itemValue = item.price*item.stock
    console.log(`${item.item}: R$ ${itemValue.toFixed(2)}`)
    totalStock += itemValue
})
console.log(`Valor Total dos Produtos: R$ ${totalStock.toFixed(2)}`)

/* 9. Crie um array de objetos onde cada objeto representa um contato com nome,
telefone e e-mail. Use forEach para listar todos os contatos formatados. Permita
buscar um contato pelo nome usando for...of e exiba os dados encontrados ou
uma mensagem de "não encontrado". */
console.log(`\n----- EXERCICIO 9 --------\n`)

let contacts= [
    {name: "Antonio", phone: 47987654321, email: "antonio.silva@gmail.com"},
    {name: "Maria", phone: 47988765432, email: "maria.santos@gmail.com"},
    {name: "Carlos", phone: 47989876543, email: "carlos.oliveira@gmail.com"},
    {name: "Juliana", phone: 47990987654, email: "juliana.pereira@gmail.com"},
    {name: "Fernando", phone: 47991098765, email: "fernando.costa@gmail.com"},
    {name: "Beatriz", phone: 47992109876, email: "beatriz.alves@gmail.com"},
    {name: "Roberto", phone: 47993210987, email: "roberto.ferreira@gmail.com"},
    {name: "Amanda", phone: 47994321098, email: "amanda.gomes@gmail.com"},
    {name: "Lucas", phone: 47995432109, email: "lucas.martins@gmail.com"},
    {name: "Sophia", phone: 47996543210, email: "sophia.rocha@gmail.com"}
]

contacts.forEach((contact) => {
    console.log(`Nome: ${contact.name}\nTelefone: ${contact.phone}\nE-mail: ${contact.email}\n----------`)
})

function searchContact (name) {
    for (contact of contacts) {
        if (contact.name === name) {
            return `Nome: ${contact.name}\nTelefone: ${contact.phone}\nE-mail: ${contact.email}`
        }
    }
    return "Contato não encontrado."
}

while (true) {
    contacts.forEach((contact) => {
    console.log(`Nome: ${contact.name}\nTelefone: ${contact.phone}\nE-mail: ${contact.email}\n----------`)
})
    let search = Prompt("Digite um nome para buscar na agenda: ")
    search = searchContact(search)
    console.log(search)
    break
}

/* 10. Implemente uma pilha usando um array para simular o histórico de um
navegador. Crie as funções visitar(pagina) (push), voltar() (pop) e paginaAtual()
(peek). Simule uma sessão: visite 4 páginas, volte 2 vezes e exiba a página atual a
cada operação. */
console.log(`\n----- EXERCICIO 10 --------\n`)

class Stack {
    constructor () {
        this.itens = []
    }

    visitar(page) {
        this.itens.push(page)
    }
    
    voltar() {
        if (!this.isEmpty()) {
            this.itens.pop()
        } else {
            console.log("Nenhuma página no Histórico")
        }
    }
    
    paginaAtual() {
        let last = this.itens.length-1
        console.log(`Página atual: ${this.itens[last]}`)
    }

    isEmpty(){
        return this.itens.length === 0
    }


}

let navegador = new Stack
navegador.visitar("Google")
navegador.paginaAtual()
navegador.visitar("Instagarm")
navegador.paginaAtual()
navegador.visitar("Facebook")
navegador.paginaAtual()
navegador.visitar("MDNdocs")
navegador.paginaAtual()
navegador.voltar()
navegador.paginaAtual()
navegador.voltar()
navegador.paginaAtual()


/* 11. Implemente uma fila usando um array para simular o atendimento de uma
clínica. Crie as funções chegarPaciente(nome) (enqueue), chamarProximo()
(dequeue) e exibirFila(). Simule a chegada de 5 pacientes e o atendimento de 3,
exibindo o estado da fila a cada operação. */
console.log(`\n----- EXERCICIO 11 --------\n`)

class Queue {
    constructor () {
        this.itens = []
    }

    chegarPaciente(name) {
        this.itens.push(name)
    }

    chamarProximo() {
        if (this.isEmpty()){
            console.log("Fila está vazia.")
        } else {
            let paciente = this.itens.shift()
            console.log(`Atendendo ${paciente}`)
        }
    }

    exibirFila() {
        console.log(this.itens.join(" <- "))
    }

    isEmpty() {
        return this.itens.length === 0
    }

}

let consultorio = new Queue

consultorio.chegarPaciente("Luiz")
consultorio.exibirFila()
consultorio.chegarPaciente("João")
consultorio.exibirFila()
consultorio.chegarPaciente("Jéssica")
consultorio.exibirFila()
consultorio.chegarPaciente("Rafael")
consultorio.exibirFila()
consultorio.chegarPaciente("Fernanda")
consultorio.exibirFila()
consultorio.chegarPaciente("Leo")
consultorio.exibirFila()
consultorio.chamarProximo()
consultorio.exibirFila()
consultorio.chamarProximo()
consultorio.exibirFila()
consultorio.chamarProximo()
consultorio.exibirFila()

/* 12. Implemente uma lista ligada simples usando nós ({ valor, proximo }). Crie as
funções adicionar(tarefa), remover(tarefa) e exibir() que percorre todos os nós.
Simule um gerenciador de tarefas: adicione 4 tarefas, remova uma pelo nome e
exiba a lista antes e depois.*/
console.log(`\n----- EXERCICIO 12 --------\n`)

class Node {
    constructor (value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor () {
        this.top = null
        this.size = 0
    }

    adicionar(task){
        let node = new Node(task)
        node.next = this.top
        this.top = node
        this.size++
    }

    remover(task){
        let previousItem = null
        let item = this.top
        for (let i = 0; i < this.size; i++){
            if (this.top.value === task) {
                this.top = this.top.next
                this.size--
                return
            } else if (item.value === task){
                previousItem.next = item.next
                this.size--
                return
            }
            previousItem = item
            item = item.next
            
        }
        console.log(`${task} não encontrada.`)
    }

    exibir() {
        let item = this.top
        let resultado = ""
        for (let i = 0; i < this.size; i++){
            if (item.next !== null){
                resultado += `Tarefa ${i+1}: ${item.value}\n`
                item = item.next
            } else if ( item.next === null){
                resultado += `Tarefa ${i+1}: ${item.value}`
            }
        }
        console.log(resultado)
    }

    peek(){
        return this.top ? this.top.value : null
    }

    size(){
        return this.size
    }

}

let gerenciador = new LinkedList
gerenciador.adicionar("Chrome")
gerenciador.adicionar("Mozilla")
gerenciador.adicionar("VS_Code")
gerenciador.adicionar("WhatsApp")
gerenciador.adicionar("Safari")
gerenciador.exibir()
console.log("---------")
gerenciador.remover("WhatsApp")
gerenciador.exibir()
console.log("---------")