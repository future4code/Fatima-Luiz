// Exercícios de interpretação de código
// 1a. O que será impresso no console? 
// Resposta 1a: 
// Matheus Nachtergaele
// Virginia Cavendish
// Canal: Globo
// Horário: 14h

// 2a. O que vai ser impresso no console?
// Resposta 2a:
// Nome: Juca, idade: 3, raça: SRD
// idade: 3
// nome: Juca
// raça: SRD

// Nome: Juba, idade: 3, raça: SRD
// idade: 3
// nome: Juba
// raça: SRD

// Nome: Jubo, idade: 3, raça: SRD 
// idade: 3
// nome: Jubo
// raça: SRD

// 2b. O que faz a sintaxe dos três pontos antes do nome de um objeto?
// Resposta 2b:
// A sintaxe de três pontos, chama-se spread ou espelhamento e nos permite realizar uma cópia inteira de um objeto para outro.

// 3a. O que vai ser impresso no console? 
// Resposta 3a: 
// false
// undefined

// 3b. Explique o valor impresso no console. Você sabe por que isso aconteceu?
// Resposta 3b: 
// 

// Exercícios de escrita de código
// 1a. Crie um objeto. 
// Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). 
// Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 
// "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"

// Resposta 1a.
// const pessoa = {
//     nome: "Fátima",
//     apelidos: ["Fá",  "Fafá",  "Fati"]
// }

// function descricao(pessoa) {

// }
// console.log(`Eu sou a ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)

// 1b: Agora, usando o operador spread, 
// crie um novo objeto mantendo o valor da propriedade nome, 
//mas com uma nova lista de três apelidos.
// Depois, chame a função feita no item anterior passando como argumento o novo objeto.

// const pessoa = {
//         nome: "Fátima",
//         apelidos: ["Fatiminha",  "Fatili",  "Fat"]
//     }

// const novosApelidos = {
//     ...pessoa
// }

// console.log(pessoa)
// console.log(novosApelidos)

// 2. 
// A. Crie dois objetos diferentes com as seguintes propriedades:
// nome, idade e profissão.
// B. Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
// 1. O valor de `nome`
// 2. O numero de caracteres do valor `nome`
// 3. O valor de `idade`
// 4. O valor de `profissão`
// 5. O numero de caracteres do valor `profissão`

// const pessoa1 = {
//     nome1: "Fátima",
//     idade1: 29,
//     profissão1: "Analista"    
// }

// const pessoa2 = {
//     nome2: "Elisabete",
//     idade2: 34,
//     profissão2: "Jornalista"
// }
// function lista(pessoa1) {
//     const array = [pessoa1.nome1, pessoa1.nome1.length, pessoa1.idade1,
//     pessoa1.profissão1, pessoa1.profissão1,length]
//     return array 
// }
// console.log(lista(pessoa1))

// 3. a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
//b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
//c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 
// d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.** 

// const carrinho = [];

// const primeiraFruta = {
//     nome: ("banana"),
//     disponibilidade: true
// }

// const segundaFruta = {
//     nome: ("abacate"),
//     disponibilidade: true
// }

// const terceiraFruta = {
//     nome: ("maçã"),
//     disponibilidade: true
// }

// const recebeFrutas = (primeiraFruta, segundaFruta, terceiraFruta) => {
//     carrinho.push (primeiraFruta, segundaFruta, terceiraFruta);
//     console.log (carrinho);
// }

// recebeFrutas(primeiraFruta, segundaFruta, terceiraFruta);



// const auxiliaEstoqueSacolao = (segundaFruta) => {

//     const novaDisponibilidade = (!segundaFruta.disponibilidade);
//     segundaFruta.disponibilidade = novaDisponibilidade;
// }

// auxiliaEstoqueSacolao(segundaFruta)



