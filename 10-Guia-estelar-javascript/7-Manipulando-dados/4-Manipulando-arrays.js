// Manipulando arrays

// Transformar uma cadeia de caracteres em elementos de um array

// let word = "manipulação"
// console.log(Array.from(word))

let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("nodejs")
// adicionar no começo
techs.unshift("sql")
// remover do fim
techs.pop()
// remover do começo
techs.shift()
// pegar somente alguns elementos do array
console.log(techs.slice(1, 3))
// remover um ou mais itens em qualquer posição do array
techs.splace(1, 2)
// encontrar a posição de um elemento no array
let index = techs.indexOf('css')
techs.splace(index, 1)

console.log(techs)