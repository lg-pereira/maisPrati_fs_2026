console.log(`\n----- EXERCICIO 7 --------\n`)

console.log("Digite números decimais, digite 0 para parar e recebar a média.")
let dec_sum = 0
let counter = 0
do{
    let dec_num = parseFloat(Prompt())
    dec_sum += dec_num
    counter++
} while (dec_num != 0)
console.log(`A média dos números é ${(dec_sum/counter).toFidex(2)}`)