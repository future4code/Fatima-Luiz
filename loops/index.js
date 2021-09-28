// // **Exercícios de interpretação de código!**
// // 1. O que o código abaixo está fazendo? Qual o resultado impresso no console? 
// // let valor = 0
// // for(let i = 0; i < 5; i++) {
// //   valor += i
// // }
// // console.log(valor)

// // Resposta 1: O código está declarando uma variável valor como 0, criando um for para incrementar seu valor 
// // enquanto o valor de i for menor que 5. O console irá mostrar 4.

// // 2. Leia o código abaixo:
// // a) O que vai ser impresso no console?
// // b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se não, o que poderia ser usado para fazer isso?

// // const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// // for (let numero of lista) {
// //   if (numero > 18) {
// // 		console.log(numero)
// // 	}
// // }
// // Resposta 2a. Será impresso os números maiores que 18: 19,21,23,25,27,30

// // 2b. 

// // 3- Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
// // const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// // let quantidadeAtual = 0
// // while(quantidadeAtual < quantidadeTotal){
// //   let linha = ""
// //   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
// //     linha += "*"
// //   }
// //   console.log(linha)
// //   quantidadeAtual++
// // }


// // **Exercícios de escrita de código**

// // Resposta 1.

// let pets=[]
// const qtdPet=Number(prompt("Quantos pets você tem?"))
// if(qtdPet==0) console.log("Que pena! Você pode adotar um pet!")
// else{for (i=0;i<qtdPet;i++) {
// 	const nomes=prompt("Digite o nome do seu "+(i+1)+"º pet")
// 	pets.push(nomes)
// }
// }

// console.log(pets)

// //Resposta 2a.

// let arrayOriginal=[1,2,3,4,5,6,7,8,9,10]
// const imprimeArray=(array)=>{
// 	for (const numero of array) {
// 		console.log(numero)
// 	}
// }
// imprimeArray(arrayOriginal)

// // 2b.
// const imprimeDivididosPorDez=(array)=>{
// 	for (const numero of array) {
// 		console.log(numero/10)
// 	}
// }
// imprimeDivididosPorDez(arrayOriginal)

// // 2c.
// const criaNovoArray=(array)=>{
// 	let novoArray=[]
// 	for (let i = 0; i < array.length; i++) {
// 		if(array[i]%2==0)	
// 			novoArray[i]=array[i]
// 	}
// 	console.log(novoArray) 
// }
// criaNovoArray(arrayOriginal)

// // 2d.
// const criaArrayString=(arrayOriginal)=>{
// 	let arrayString=[];
// 	for (let i = 0; i < arrayOriginal.length; i++) {
// 		arrayString[i] = arrayOriginal[i];
// 		console.log("O elemento do índex "+ i +" é: "+ arrayString[i])
// 	}
// }
// criaArrayString(arrayOriginal)

// // 2e.
// const imprimeMaiorEMenor=(array)=>{
	
// 	let maior=0;
// 	let menor=Infinity;
// 	for (let i = 0; i < array.length; i++) {
// 		if (array[i]>maior) {
// 		maior=array[i]
// 		}
// 		if(array[i]<menor){
// 			menor=array[i]
// 		}
// 	}
// 	console.log("O maior elemento é "+maior+" e o menor é "+menor)
// }
// imprimeMaiorEMenor(arrayOriginal)


