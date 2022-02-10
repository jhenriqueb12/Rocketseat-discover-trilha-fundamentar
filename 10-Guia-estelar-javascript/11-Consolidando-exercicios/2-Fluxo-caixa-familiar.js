/*
Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.
*/

let familia = {
  receitas: [3000, 2000, 150.68, 267.25, 1347],
  despesas: [600.67, 1200, 859.56, 450, 1658.89]
}

function soma(lista) {
  let total = 0;

  for(let valor of lista){
    total += valor
  }

  return total
}

function fluxo() {
  const receitasTotal = soma(familia.receitas)
  const despesasTotal = soma(familia.despesas)

  const saldo = receitasTotal - despesasTotal

  let positivo = saldo >= 0

  let mensagemFinal = "Negativo"

  if (positivo){
    mensagemFinal = "Positivo"
  }

  console.log(`Seu saldo é ${mensagemFinal}: R$${saldo.toFixed(2)}`)
}

fluxo()