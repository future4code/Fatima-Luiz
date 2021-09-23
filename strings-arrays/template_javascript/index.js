// // Exercícios de interpretação de código
// 1. a. undefined
// b. null
// c. 11
// d. 3
// (e. 11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// 0: 3
// 1: 19
// 2: 5
// 3: 6
// 4: 7
// 5: 8
// 6: 9
// 7: 10
// 8: 11
// 9: 12
// 10: 13
// length: 11
// f. 9

// 2. 27
_____________________________________________________________________________________________________________________

// Exercícios de escrita de código

// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail.
// Em seguida, imprima na tela a seguinte mensagem: O email emailDoUsuario foi cadastrado com sucesso. Seja bem vinda, nomeDoUsuario!

// Resultado: let nomeDoUsuario = prompt("Digite o seu nome:")
// let emailDoUsuario = prompt("Digite seu e-mail:")
//  let frase = prompt ("O email do usuário " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem vinda: " + nomeDoUsuario)

// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
// a) Imprima na tela o array completo
// b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
// c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista

// 2. let comidasPreferidas = [`Lasanha` , `Lanche` , `Macarrão a bolognesa`, `Panquecas`, `Baião de dois`];

// A. 
// console.log(comidasPreferidas);

// // B. 
// console.log(`Essas são minhas comidas preferidas:
// ${comidasPreferidas}`);


// C.
// const comidaUsuario = prompt("Qual sua comida preferida?")
// const NovaArray = comidasPreferidas.splice(1,1, comidaUsuario)
// console.log(comidasPreferidas)


// console.log(`Minhas novas comidas favoritas são:
// ${comidasPreferidas}`);

// 3.
// a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

// b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

// c) Imprima o array na tela

// d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

// e) Remova da lista o item de índice que o usuário escolheu.

// f) Imprima o array na tela

// let NovaListaDeTarefas = prompt("Digite o índice da tarefa já realizada: 0, 1, ou 2")

// E.
// NovaListaDeTarefas = 
// listaDeTarefas.splice(NovaListaDeTarefas,1)

// F.
// console.log(listaDeTarefas)

