/*
  Fuction constructor

  * expressão new
  * criar novo objeto
  * this keyword
*/

function Person(name) {
  this.name = name
  this.walk = function(){
    return this.name + " está andando"
  }
}

const henrique = new Person('Henrique')
const joao = new Person('João')
console.log(henrique.walk())
console.log(joao.walk())