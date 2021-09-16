// Exercícios de interpretação de código
// 1a. Ler o código e informar o que será impresso no console.
// Resposta 1a: 10 e 50

// 1b. O que aconteceria se retirasse os dois console.log 
// e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(1)?
// O que apareceria no console? 
// Resposta 1b: nada.

// 2a. Leia o código e explique o que a função faz e qual sua utilidade.
// Resposta 2a: Pediu ao usuário para que inserisse um texto, 
// se o usuário digitar qualquer frase contendo a palavra CENOURA, 
// irá retornar no console TRUE, pois a palavra cenoura foi invocada na função 
// **const outraFuncao = function(texto) {
// return texto.toLowerCase().includes("cenoura")}**

// 2b. Explique o que a função faz e qual sua utilidade.
// Resposta 2b: Todas as saídas serão **true**, mesmo que a palavra seja escrita no plural ou em caixa alta.

// Exercícios de escrita de código
// 1a. Escreva as funções explicadas abaixo:
// A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:
// "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
// Resposta 1a.
// function imprimeDados(){
//     const texto = "Eu sou Fátima, tenho 29 anos, moro em São Paulo e sou estudante."
//     console.log(texto)
// }
// imprimeDados()

// 1b. 
// function imprimeDadosNovos(nome, idade, cidade, profissao){
//     const string = (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou estudante.`)
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou estudante.`)
// }
// imprimeDadosNovos('Fátima', '29', 'São Paulo')

// 2a. Escreva uma função que receba 2 números como parâmetros, 
// e, dentro da função, faça a soma das duas entradas e retorne o resultado.
// Invoque a função e imprima no console o resultado.
// Resposta 2a:
// function imprimeDoisNumeros(numero1, numero2){
//     const soma =numero1 + numero2
//     return soma
// }
// console.log(imprimeDoisNumeros(2, 4))

// 2b. Faça uma função que recebe 2 números
// e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.
// Resposta 2b:


// 2c. Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não. 
// Resposta 2c: 
// function parOuNao(numeroPar) {
//     const divisao = numeroPar % 2 === 0 
//     return divisao
//     }
//     console.log("O número escolhido é par?", parOuNao(9))

// 2d. Faça uma função que recebe uma mensagem (string) como parâmetro
// e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
// Resposta 2d:
// let textoEntrada = "Fátima Lemes"
// function tamanhoTexto(texto){
//      const textoTeste = textoEntrada.toUpperCase()
//      return textoTeste
// }
// const resultado = tamanhoTexto()
// const tamanho = resultado.length
// console.log("Usando o Return: "+ resultado + ", tamanho: "+ tamanho)

// 3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. 
// Por fim, mostre no console o resultado das operações:
// Números inseridos: 30 e 3
// Soma: 33
// Diferença: 27
// Multiplicação: 90
// Divisão: 10
// Resposta 3:
// let numero1 = 1
// let numero2 = 3
// function operacao() {
//     let soma = numero1 + numero2
//     let subs = numero1 - numero2
//     let mult = numero1 * numero2
//     let div = numero1 / numero2
    
//     return [ soma, mult, div,  subs ]
//     }
//     let [soma, mult, div, subs] = operacao()

//   console.log(numeros: "+ ${numero1} " e " ${numero2})
//   console.log(Soma: ${soma})
//   console.log(Diferença:${divisao})
//   console.log(Multiplicação: ${multiplicacao} )
//   console.log(Divisão: ${subtracao})