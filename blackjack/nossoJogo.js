/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    let cartasUsuario=[];
let cartasPC=[];

let iniciar = confirm("Bem-vindo ao jogo Blackjack! \n Deseja iniciar uma nova rodada?")
if(iniciar){
   let cartasIniciais=false;
   while(!cartasIniciais){
      cartasUsuario.push(comprarCarta())
      cartasUsuario.push(comprarCarta())
    cartasPC.push(comprarCarta())
    cartasPC.push(comprarCarta())
    if(cartasUsuario[0].valor==11 && cartasUsuario[1] == 11 || cartasPC[0].valor==11 && cartasPC[1].valor==11) { 
      cartasUsuario=[] 
       cartasPC=[] }
       else{ cartasIniciais=true}
    }}

    let comprar=true
while(comprar){
   let text=""
   let ponto=0;
   let comprarMais
   for(let cartas of let comprar=true
while(comprar){
   let text=""
   let ponto=0;
   let comprarMais
   for(let cartas of cartasUser ){
      text=cartas.texto+"";
      ponto=cartas.valor; 
   }
   ponto>21 ? comprar=false : comprarMais=confirm( `Suas cartas são ${text}. A carta revelada do computador é ${cartasPC[0].texto}.` +
   "\n"+ 
   "Deseja comprar mais uma carta?")
   comprarMais ? cartasUsuario.push(comprarCarta()) : comprar = false
}