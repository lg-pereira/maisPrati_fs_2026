const Prompt = require('prompt-sync')()


let table = [
    {seller: "Jhon", value: 1200},
    {seller: "Rose", value: 1300},
    {seller: "Mark", value: 100},
    {seller: "Lea", value: 500},
    {seller: "Jhon", value: 120},
    {seller: "Lea", value: 3500},
    {seller: "Jhon", value: 80},
    {seller: "Rose", value: 5000},
    {seller: "Mark", value: 320},
    {seller: "Lea", value: 4300},
    {seller: "Lea", value: 200},
    {seller: "Renan", value: 180},
    {seller: "Val", value: 450},
    {value: 109, seller:"Val"},
    {value: 109, seller:"Jhon"},
    {value: 109, seller:"Lea"},
    {value: 109, seller:"Mark"},
    {value: 109, seller:"Luiz"},
    {seller: "Rose", value: 980},
    {seller: "Mark", value: 3200}
]

let table2 = [
    {value: 100, seller:"Luiz"},
    {value: 100, seller:"Ana"},
    {value: 100, seller:"Joao"},
    {value: 100, seller:"Jeh"},
    {value: 100, seller:"Luiz"},
]

// function contabil(table){
//     let total = new Object()
//     for (let obj of table){
//         let temp
//         for (let key of Object.values(obj)){
//             if (isNaN(key)){
//                 temp = key
//                 if (total[key] === undefined){
//                     total[key] = 0
//                 }
//             } else {
//                 total[temp] += key
//             }
//         }
//     }
//     return total
// }

function contabil(table){
    let total = new Object()
    for (let obj of table){
        let temp_seller
        let temp_value
        for (let key of Object.values(obj)){
            if (isNaN(key)){
                temp_seller = key
                if (total[temp_seller] === undefined){
                    total[temp_seller] = 0
                    if (!isNaN(key) || temp_value !== (0 || undefined) && total[temp_seller] !== undefined){
                        total[temp_seller] += temp_value
                    }
                } else {
                    if (temp_value !== undefined){
                        total[temp_seller] += temp_value
                    }
                }
            } else {
                if (total[temp_seller] !== undefined){
                    total[temp_seller] += key
                } else {
                    temp_value = key
                }
            }
        }
    }
    return total
}

console.log(contabil(table))