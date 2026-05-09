const promptSync = require("prompt-sync")();
let number = parseInt(promptSync("Digite um numero: "))
let counter = 1
while (counter <= 10){
    console.log(`${counter} * ${number} = ${counter * number}`)
    counter++
}

