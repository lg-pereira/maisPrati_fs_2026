/* 1. Desenhando um sistema de impressão (Fila de Impressão)
Instruções:
● Criar uma fila que simula o processo de uma fila de impressão;
● Adicionar tarefas de impressão (como "Imprimir Documento 1", "Imprimir Documento 2", etc.) na fila e, em seguida, desenfileirar as tarefas uma a uma, simulando a impressão;
● Imprimir no console o nome do documento sendo impresso a cada vez que uma tarefa for desenfileirar;
● Ao final, se a fila estiver vazia, imprimir uma mensagem indicando que não há mais tarefas na fila. */

class Printer {
    constructor(){
        this.spooler = []
    }

    //Adicionar tarefas de impressão
    addItem(e){
        this.spooler.push(e)
    }
    
    //Remover documento da fila de impressão
    removeItem(){
        if(this.isEmpty()){
            return "Spooler de impressão vazio."
        }
        return this.spooler.shift()
    }

    //Consumir fila de impressão
    activeSpooler(){
        do {
            const e = this.removeItem()
            console.log(`Imprimindo ${e}`)
        } while (!this.isEmpty())

        return "Spooler de impressão vazio."
    }

    //Verifica se está vazia
    isEmpty(){
        return this.spooler.length === 0
    }

}

const Spooler = new Printer()

Spooler.addItem("File 1")
Spooler.addItem("File 2")
Spooler.addItem("File 3")
Spooler.addItem("File 4")
Spooler.addItem("File 5")
Spooler.addItem("File 6")
console.log(Spooler.activeSpooler())


/* 2. Implementação de deque
Instruções:
● Implementar uma classe Deque que permita adicionar e remover elementos tanto na frente quanto no final da estrutura;
● A classe deve ter os métodos: addFront(element), addBack(element), removeFront(), removeBack(), peekFront(), peekBack(), isEmpty() e size();
● Criar um objeto da classe Deque e adicionar elementos em ambas as extremidades.

Após isso, remover elementos de ambas as extremidades e mostrar o estado da
estrutura após cada operação. */

class Deque {
    constructor(){
        this.items = []
    }

    //Add element at start
    addFront(e){
        this.items.unshift(e)
    }

    //Add element at the end
    addBack(e){
        this.items.push(e)
    }

    //Remove first element
    removeFront(){
        if(this.isEmpty()){
            return "The DEQ is empty"
        }
        return this.items.shift()
    }

    //Remove last element
    removeBack(){
        if(this.isEmpty()){
            return "The DEQ is empty"
        }
        return this.items.pop()
    }

    //Is empty
    isEmpty(){
        return this.items.length === 0
    }

    //Show first element
    peekFront(){
        if(this.isEmpty()){
            return "The DEQ is empty"
        }
        return this.items[0]
    }

    //Show last element
    peekLast(){
        if(this.isEmpty()){
            return "The DEQ is empty"
        }
        return this.items[this.items.length-1]
    }

    //Print DEQ
    check(){
        console.log(this.items.join(" <-> "))
    }
}

const deque = new Deque()

// deque.addFront("A")
// deque.addFront("AA")
// deque.addBack("Z")
// deque.addBack("ZZ")
// deque.addFront("AAA")
// deque.check()
// console.log(deque.removeFront())
// console.log(deque.peekFront())
// console.log(deque.peekLast())
// deque.check()
// console.log(deque.removeBack())
// deque.check()
