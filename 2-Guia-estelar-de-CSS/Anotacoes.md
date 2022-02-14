# O guia estelar do CSS

## Conhecendo o CSS
Começaremos nossa introdução pelo que exatamente quer dizer CSS, que é um acrônimo para Cascading Style Sheet, uma forma de escrever uma folha de estilos em cascata, mas ainda precisamos saber o que exatamente é uma folha de estilos e uma cascata, mas falaremos disso mais pra frente.

O CSS é um código para criar estilos no HTML, que como vimos, é a estrutura de todo o documento, já o CSS seria a beleza, a parte bonita.

CSS não é uma linguagem de programação, é uma linguagem style sheet, pois mesmo não sendo de programação, ainda possui uma ideia de sintaxe, e assim, precisamos aprender a forma correta de se escrever.

## Anatomia
h1 {
	color: blue;
	font-size: 60px;
	background: gray;
}

Os elementos do CSS são então:
Selectors: Nesse caso o h1, que vai buscar no HTML a tag h1 e aplicar as mudanças.

Declaration: As chaves e tudo dentro delas.

Properties: As coisas a serem alteradas.

Property values: Os novos valores que estamos atribuindo a tais propriedades.

## Seletores
HTML
<div id="container" class="m-40">
	<h1>Título</h1>
	<h2>Subtitulo</h2>
</div>

CSS
/* ID selector */
#container {
	width: 200px;
}

/* Class selector */
.m-40 {
	margin: 40px;
}

/* Element/Type selector + Agrupamento de seletores */
h1, h2 {
	color: blue;
	font-size: 60px;
	background: gray;
}

## Box Model
Nesta aula falaremos sobre o conceito de caixas, já que o CSS trabalha com essa ideia de caixas, ou seja, o box model. Mas o quê exatamente é esse box model?

É uma caixa retangular. Essa caixa possui as mesmas propriedades de uma caixa 2D, e tem como propriedades:

* Tamanho (largura x altura width e height, respectivamente
* Conteúdo: o content
* Bordas: o border
* Preenchimento interno: o padding
* Espaços fora da caixa: a margin

Quase todo elemento de uma página é considerado uma caixa: Posicionamentos, tamanhos, espaçamentos, bordas, cores, então, em suma, elementos HTML são caixas, assim como quase tudo no CSS.

## A cascata
A escolha do browser de qual regra aplicar, caso haja muitas regras para o mesmo elemento.

Seu estilo é lido de cima para baixo, ou seja, caso haja algum selector com informações conflitantes, o mais embaixo é o que será atribuído.
São levados em consideração 3 fatores:

* A origem do estilo;
* A especificidade;
* A importância;

## Especificidade
É um cálculo matemático, onde cada tipo de seletor e origem do estilo possuem valores a serem considerados.

Os mais fracos são universal selector, combinators e negation pseudo-class, com o valor de 0. Em seguida, com valor de 1, são os element type selector e pseudo-elements.

Também temos os classes e attribute selectors, com valor de 10, ou seja, são mais fortes que os anteriores.

O segundo mais forte, ID selector, com um valor de 100, vence todos os selectors anteriores.

Por fim, temos o inline, com o valor 1000, quaisquer desses selectors anteriormente citado

## At rules
São regras relacionadas ao comportamento do CSS, começa com um sinal de @ seguido do identificador e do valor.

São as seguintes:
* @import serve para incluir um CSS externo.
* @media são regras condicionais para vários dispositivos.
* @font-face é para colocar fontes externas.
* @keyframes serve para as animations do CSS.

## Shorthand
É basicamente a ideia de junção de propriedades, para que fiquem de forma resumida e legível.

Abaixo um exemplo de propriedades com e sem o shorthand:

{
    /* background properties */
    background-color: #000;
    background-image: url(images/bg.gif);
    background-repeat: no-repeat;
    background-position: left top;

    /* background shorthand*/
    background: #000 url(images/bg.gif) no-repeat left top;

    /* font properties */
    font-style: italic;
    font-weight: bold;
    font-size: .8em;
    line-height: 1.2;
    font-family: Arial, sans-serif;

    /* font shorthand */ 
    font: bold italic .8em/1.2 Arial, sans-serif;
}