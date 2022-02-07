# Variáveis

* Nomes simbólicos para receber algum valor
* Atalhos de código
* Identificadores
* 3 palavras reservadas para criar uma variável:
  * var
  * let
  * const

O JS é uma linguagem fracamente tipada e dinâmica
- Variáveis não precisão ter um tipo previamente definido
- Podemos mudar o conteúdo da variável

# Scope e var
* Escopo determina a visibilidade de alguma variável no JS

## Block statement
```JS
// Vamos iniciar um bloco
{
  // aqui dentro é um bloco e posso colocar qualquer coisa
} // aqui fechamos o bloco
```

O bloco também criará um novo bloco. Chamamos de `block-scoped`

## Var
```js
// var é global e pode ser usado fora do escopo de bloco
console.log('> existe x antes do bloco?', x)

{
  var x = 0
}

console.log('> existe x antes do bloco?', x)
```

## Let e const
```js
// cons e let são locais e só funcionam onde foram criadas
console.log('> existe y antes do bloco?', y)

{
  let y = 0
}

console.log('> existe y antes do bloco?', y)
```

## Para criar nomes

* O JS é case-sensitive (sensível ao caso)
* O JS aceita a cadeia de caracteres Unicode

- Posso:
  * Iniciar com esses caracters especiais: $ _
  * Iniciar com letras
  * Com acentos
  * Letas maíusculas e minúsculas fazem a diferença

- Não posso:
  * Iniciar com números
  * Colocar espaços vazios no nome

- Ideal:
  * Criar nomes que fazem sentido
  * Que explique o que a variável é e faz
  * camelCase
  * snake_case
  * Escrever em inglês