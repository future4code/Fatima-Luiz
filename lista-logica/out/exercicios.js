// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo(altura, largura) {
  // escreva seu código aqui
  const multiplicacao = altura * largura

  
}


// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  const nomeDoUsuario = prompt('Digite o seu nome')
  const idadeDoUsuario = Number(prompt('Digite a sua idade'))
  const emailDoUsuario = prompt('Digite o seu email')

  console.log (`Meu nome é ${nomeDoUsuario}, tenho ${idadeDoUsuario} anos, e o meu email é ${emailDoUsuario}.`)
 
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  const cor1 = prompt('Digite sua cor favorita')
  const cor2 = prompt('Digite sua segunda cor favorita')
  const cor3 = prompt('Digite sua terceira cor favorita')

  const frasecompleta = [ cor1, cor2, cor3 ]
  console.log (frasecompleta)
  
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui

}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  let anoAtual =  prompt("qual ano atual")
  let nascimento = prompt("sua data de nascimento")
  let anoEmissao = prompt("ano da emissao da carteira")
  let idade = anoAtual - nascimento
  let anoRG = anoAtual - anoEmissao 
  console.log((idade <= 20 && anoRG >= 5 ) || ((idade > 20 && idade < 50) && anoRG >= 10) || (idade >= 50 && anoRG >= 15))
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  let anoBissexto = prompt("informe o ano")
  console.log(anoBissexto % 4 == 0 && anoBissexto % 100 != 0 || anoBissexto % 400 == 0)
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  let idade = prompt("Você tem mais de 18 anos?")
  let ensino = prompt("Você possui ensino médio completo?")
  let horario = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
  console.log(idade ==="sim" && ensino ==="sim"&& horario ==="sim")
}