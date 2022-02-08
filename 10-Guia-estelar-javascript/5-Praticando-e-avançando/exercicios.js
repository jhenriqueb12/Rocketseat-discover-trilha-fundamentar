// 1. Declare uma variável de nome weight
// Var weight;

// 2. Que tipo de dado é a variável acima?
undefined
/*
  3. Declare uma variável e atribua valores para cada um dos dados:
    * name: String
    * age: Number (Interge)
    * stars: Number (float)
    * isSubscribed: Boolean

*/ 
var name = 'Henrique'
var age = 25
var stars = 12.5
var isSubscribed = true

/*
  4. A variável student abaixo é de que tipo de dado?
    objects

  4.1 Atribua a ela as mesmas propriedades e valores do exercício 3

  4.2 Mostre no console a seguinte mensagem:

    <name> de idade <age> pesa <weight> kgs.

    Atenção substitua <name>, <age> e <weight> pelos valores de cada propriedade do objeto

*/ 

let student = {
  name: 'Henrique',
  age: 25,
  stars: 12.5,
  weight: 62.4,
  isSubscribed: true
};

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kgs`);

/*
  5. Declare uma variável do tipo Array, de nome studants e atribua a ela nenhum valor, ou seja, somente array vázio

*/ 

let students = [];

/*
  6. Retribua valor para a variável acima, colocando dentro dela o objeto student quetão 4. (não copiar e colar o objeto, mas usar o objeto criado e inserir ele no array)

*/ 

students = [
  student
]
/*
  7. Coloque no console o valor da posição zero do Array acima

*/ 

console.log(students[0]);

/*
  8. Crie um novo student e coloque na posição 1 do Array students

*/ 

const joao = {
  name: 'Joao',
  age = 30,
  weight = 90.6,
  isSubscribed = false
}

students = [
  student,
  joao
]

console.log(students);

/*
  9. Sem rodar o códico responda qual a respota do códico a baixo e por que? Após sua resposta, rode o código e veja se você acertou.

  console.log(a)
  var a = 1

  undefined // a variável foi declarada depois do console.log

*/ 
