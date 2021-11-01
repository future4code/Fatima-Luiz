## Parte 2- Exercícios de Fixação de Javascript ##

Uma revendedora de carros usados paga a seus vendedores um salário fixo de R$2000,00 por mês. Os vendedores recebem uma comissão para cada carro vendido, no valor de R$100 + 5% do valor do carro.

Crie uma função que leia o número de carros vendidos por uma pessoa (qtdeCarrosVendidos, um número inteiro) e o valor total de suas vendas do mês (valorTotalVendas, também um número, correspondente ao valor total recebido por todas as vendas efetuadas).

Retorne o salário final do mês do funcionário com base nesses valores.


function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 const salario=2000
 const carrosVendidos=100*qtdeCarrosVendidos
 const venda = valorTotalVendas * 0.05
 const comissao=carrosVendidos+venda
 const novoSalario=salario+comissao

  return novoSalario
}


2. As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia e R$ 1,00 se forem compradas pelo menos 12.

Escreva uma função receba o número de maçãs compradas, calcule e retorne o custo total da compra.


function calculaPrecoTotal(quantidade) {
	 if (quantidade < 12) {
      return quantidade * 1.3
   } else {
      return quantidade * 1
   }
}

3.  



4. 

   function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
	let quantidade = 0

  for (let number of arrayDeNumeros){
    if (number === numeroEscolhido){
      quantidade++
    }
  }

  if(quantidade === 0){
		return "Número não encontrado"
  } else {
    return `O número ${numeroEscolhido} aparece ${quantidade}x`
  }
}



5. 

function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]

 const nomesAnimais= animais.map(item=>item.nome);
 return nomesAnimais

} 

6.

