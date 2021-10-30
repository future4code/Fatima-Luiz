<!-- ## **Parte 1 -  Resumos e  Checklist** 

Funções em JavaScript: São blocos de construção fundamentais em JS. É um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usa-la, você deve defini-la em algum lugar no escopo do qual você quer chamá-la. -->

<!-- Objeto em JavaScript ⇒ Sintaxe, o que é e como usar: são estruturas de sintaxe que nos permitem representar dados mais complexos de maneira mais organizada. Com eles conseguimos criar modelos do mundo real de forma mais humanizada. Por exemplo, na cozinha as variáveis string, number e boolean seriam pequenas gavetas e os objetos seriam uma gaveta maior com um organizador de talheres, onde cada separação possuirá uma etiqueta de fácil identificação. A sintaxe seria: 

    const estudante = {
    nome: 'Fátima Lemes', 
    idade: 29,
    email: 'fatimalemess@gmail.com'
} o estudante é o objeto, nome, idade e e-mail são as chaves e as informações alimentadas nas chaves são os valores. -->

Array  ⇒ Sintaxe, o que é e como usar: arrays são listas de elementos, por exemplo: lista de compras, lista telefônica, lista de números... No JS usamos colchetes para agrupar os itens de uma lista. 
Exemplo: 
    const listaDeCompras = ["cenoura", "banana", "tomate"]
    const listaNumeroTelefone = [91710929, 95757688, 95157176]
    Podemos também colocar elementos de qualquer tipo dentro de um array - números, strings e booleanos, assim como podemos ter elementos de diferentes tipos dentro do mesmo array. Por exemplo: string, number e boolean. 

    Map  ⇒ Sintaxe, o que é e como usar: map é a função de um array, significa mapear, o utilizo quando quero criar um novo array baseado em informações do array original.
    const pokemons = [
        {nome: "Bulbasaur", tipo: "grama"},
        {nome: "Psyduck", tipo: "água"},
        {nome: "Slowbro", tipo: "água"},
        {nome: "Charmander", tipo: "fogo"}
    ]
    const nomeDosPokemons = pokemons.map((pokemon, indice, array) => {return pokemon.nome
    })

    Filter  ⇒ Sintaxe, o que é e como usar: filter significa filtrar, o utilizo quando quero criar um novo array retirando ou não alguns itens do array original.
     const pokemons = [
        {nome: "Bulbasaur", tipo: "grama"},
        {nome: "Psyduck", tipo: "água"},
        {nome: "Slowbro", tipo: "água"},
        {nome: "Charmander", tipo: "fogo"}
    ]
    const apenasPokemeonsDeGrama = pokemons.filter((pokemon, indice, array) => {
        return pokemon.tipo === "grama"
    })

    Diferenças entre Map e Filter: map executa uma função em todos os itens de um array
filter aplica a condição em todos os itens do array e aqueles que se enquadrarem na condição serão retornados e adicionados ao novov array de saída, diferente de map ele irá sempre retornar true ou false.

Diferença entre os métodos push e pop e como usá-los: o método pop() remove u último elemento de um array e retorna aquele valor. Se chamar pop() em um array vazio, ele retorna o valor undefined.
Já o método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array. 

Método slice do array  ⇒ Sintaxe, o que é e como usar: 
o método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim de um array original. O array original não é modificado.

arr.slice([início[,fim]])

Método splice do array  ⇒ Sintaxe, o que é e como usar: o método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
array.splice(indice[, deleteCount[, elemento1[, ...[, elementoN]]])

array.splice(indice) // SpiderMonkey/Firefox extension

