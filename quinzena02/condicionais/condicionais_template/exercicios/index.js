// Exercícios de interpretação de código


// 1a) Explique o que o código faz. Qual o teste que ele realiza? 
// b) Para que tipos de números ele imprime no console "Passou no teste"? 
// c) Para que tipos de números a mensagem é "Não passou no teste"?

// Respostas 1: O código pede para digitar um número para teste. Ele imprime "passou no teste" para números acima de 2 e também quando digito o número 0, 
// e exibe a mensagem "não passou no teste para o número 1.

// 2a. Para que serve o código? 
// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// c) Considere que um usuário queira comprar uma `Pêra`, 
// qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` 
// (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

// Respostas 2:
// Para consultar preço. 
// O preço da fruta  Maçã  é  R$  2.25.
// O console exibe apenas o preço correspondente a fruta Pêra quando retiro o 'break' que está acima de 'default'.

// 3a) O que a primeira linha está fazendo?
// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

// Respostas 3:
// Está solicitando pelo prompt o número para o usuário.
// Esse número passou no teste.
// Mensagem não definida para números abaixo de 0. 


// Exercícios de escrita de código
// 1. 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    // a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    // b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    // c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
    // Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."

    
    // const qualSuaIdade = Number(prompt("Qual a sua idade?"))
    
    // if (qualSuaIdade>=18){
    //     console.log("Você pode dirigir!")
    // }else{
    //     console.log("Você não pode dirigir!")
    // }

    // 2. Agora faça um programa que verifica que turno do dia um aluno estuda. 
    // Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
    // Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else.


// const qualOsEuTurno = prompt("Informe o turno em que estuda: M para Matutino, V para Vespertino e N para Noturno.")
//     if (qualOsEuTurno === "M"){
//         console.log("Bom dia!")
//     }else if (qualOsEuTurno === "V"){
//         console.log("Boa tarde!")
//     }else if (qualOsEuTurno === "N"){
//         console.log("Boa noite!")
//     }

// 3. Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora.

// const qualOsEuTurno = prompt("Informe o turno em que estuda: M para Matutino, V para Vespertino e N para Noturno.")

// switch (qualOsEuTurno){
// case ("M"):
// console.log("Bom dia!")
// break
// case ("V"):
// console.log("Boa tarde!");
// break
// case ("N"):
// console.log("Boa noite!");
// break
// default:
// console.log("Tente novamente digitando M para Matutino, V para Vespertino e N para Noturno.")
// }

// 4. Considere a situação: 
// você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia
// e se o ingresso está abaixo de 15 reais. 
// Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir 
// e outra pergunta sobre o preço do ingresso, 
// então verifique se seu amigo ou amiga vai topar assistir o filme. 
// Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

// let generoFilme = prompt("Digite o gênero do filme: Fantasia, Ação, Romance ou Terror?")
// let valorIngresso = Number(prompt("Qual o valor do ingresso, 10, 15 ou 20 reais"))

//     if (generoFilme === "Fantasia" && valorIngresso <= 15)
//         {
//             let vaiAssistir = confirm("Vai assistir?")
//                 if (vaiAssistir === true)
//                 {
//                     console.log("Bom filme!")

//                 } else if (vaiAssistir === false)
//                 {
//                     console.log("Escolha outro filme!")
//                 }
//         }   else if (generoFilme === "Fantasia" && valorIngresso > 15){
//                     console.log(`Escolha outro filme de ${generoFilme}, e com valor menor ou igual a 15 reais.`)
//                 } if (generoFilme !== "Fantasia")
//                 {
//                 console.log("Por favor, escolha outro filme.")
//                 }