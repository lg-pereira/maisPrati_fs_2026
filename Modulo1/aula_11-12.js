/** Filas - Queue */

class Fila {
    constructor(){
        this.itens = []
    }

    //Adicionar um elemento ao final da fila
    enfileirar(e){
        this.itens.push(e)
    }

    //Remover elemento ao fim da fila
    desenfileirar(){
        if(this.isEmpty()){
            return "A fila está vazia"
        }
        return this.itens.shift()
    }

    //Verifica se a fila está vazia
    isEmpty() {
        return this.itens.length === 0
    }

    //Imprime os elementos da fila
    imprimir(){
        console.log(this.itens.join(' <- '))
    }

    //Retorna o primeiro da fila, sem remover
    proximo(){
        if(this.isEmpty()){
            return "A fila está vazia"
        }
        return this.itens[0]
    }

}

const fila = new Fila()

// fila.enfileirar("Abacaxi")
// fila.enfileirar("Laranja")
// fila.enfileirar("Maçã")
// fila.enfileirar("Morango")
// fila.enfileirar("Pessêgo")
// fila.imprimir()
// console.log(fila.desenfileirar())
// console.log(fila.desenfileirar())
// console.log(fila.desenfileirar())
// console.log(fila.desenfileirar())
// console.log(fila.desenfileirar())

/** Deques - Double Ended Queue */

class Deque {
    constructor(){
        this.items = []
    }

    //Add element at start
    addFront(e){
        this.items.unshift(e)
    }

    //Add element at the end
    addEnd(e){
        this.items.push(e)
    }

    //Remove first element
    removeFirst(){
        if(this.isEmpty()){
            return "The DEQ is empty"
        }
        return this.items.shift()
    }

    //Remove last element
    removeLast(){
        if(this.isEmpty()){
            return "The DEQ is empty"
        }
        return this.items.pop()
    }

    //Is empty
    isEmpty(){
        return this.items.length === 0
    }

    //Print DEQ
    check(){
        console.log(this.items.join(" <-> "))
    }
}

const deque = new Deque()

// deque.addFront("A")
// deque.addFront("AA")
// deque.addEnd("Z")
// deque.addEnd("ZZ")
// deque.addFront("AAA")
// deque.check()
// console.log(deque.removeFirst())
// deque.check()
// console.log(deque.removeLast())
// deque.check()
// console.log(deque.removeFirst())
// deque.check()
// console.log(deque.removeLast())
// deque.check()
// console.log(deque.removeFirst())
// deque.check()
// console.log(deque.removeLast())
// deque.check()
// console.log(deque.removeFirst())
// deque.check()


/** Linked List */

// =============================================================
// NÓ — bloco de construção da LinkedList
// =============================================================
// O mesmo Node serve tanto para a Pilha quanto para a Fila.
// Cada nó carrega seu valor e um ponteiro para o próximo nó.

class Node {
    constructor (value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor (){
        this.top = null // topo da pilha (primeiro nó da lista)
        this.size = 0   // contador de elementos — evita percurso O(n) para tamanho
    }

    // Insere um novo valor no TOPO — O(1).
        // Passos:
        //   1. Cria o novo nó com o valor
        //   2. Faz o novo nó apontar para o atual topo
        //   3. Atualiza `top` para o novo nó

    push(value){
        let newNode = new Node(value)
        newNode.next = this.top // novo nó aponta para quem era o topo
        this.top = newNode      // topo agora é o novo nó
        this.size++
    }

    // Remove e retorna o valor do TOPO — O(1).
        // Passos:
        //   1. Salva o valor do topo atual
        //   2. Move `top` para o próximo nó (descarta o topo antigo)
        //   3. O nó removido perde todas as referências → coletado pelo GC
    
    pop() {
        if (!this.top) return null
        let poppedValue = this.top.value
        this.top = this.top.next
        this.size--
        return poppedValue
    }

    peek(){
        return this.top ? this.top.value : null
    }

    size(){
        return this.size
    }

    // Exibe a pilha do topo à base, separada por " → ".
    // "null" ao final indica o fim da lista encadeada.
    print() {
        let atual = this.top
        let resultado = "topo → "
        while (atual) {
        resultado += `${atual.value} → `
        atual = atual.next
        }
        console.log(resultado + "null")
    }

}

/**Queue - LinkedList */

class QueueLinked {
    constructor(){
        this.front = null   //Inicio da Fila
        this.rear = null    //Fim da fila
        this.size = 0       // Tamanho da fila
    }

    enqueue(value){
        let newNode = new Node(value)
        if (this.rear){
            this.rear.next = newNode
        }
        this.rear = newNode
        if (!this.front){
            this.front = newNode
        }
        this.size++
    }

    dequeue(){
        if (!this.front) return null
        let dequeueValue = this.front.value
        this.front = this.front.next
        if (!this.front){
            this.rear = null
        }
        this.size--
        return dequeueValue
    }

    size(){
        return this.size
    }

    print(){
        let resultado = "Frente -> "
        let atual = this.front
        do {
            if(atual === this.rear) {
                resultado += `${atual.value} <- Fundo`
                break
            }
            resultado += `${atual.value} -> `
            atual = atual.next
        } while(atual) 
        console.log(resultado)
    }


}

let queue = new QueueLinked()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.enqueue(60)
queue.enqueue(70)
queue.enqueue(80)
queue.print()
console.log(queue)

