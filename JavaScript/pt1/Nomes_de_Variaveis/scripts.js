//Devemos lembrar que o JavaScript é case-sensitive, ou seja, ele diferencia letras maiúsculas de minúsculas. Portanto, "nome" e "Nome" seriam considerados variáveis diferentes.
let username = 'João'
let userName = 'Maria'

console.log(username) // Saída: João
console.log(userName) // Saída: Maria

//Podemos iniciar o nome de uma variável com letras especiais como $ ou _, mas não podemos iniciar com números ou outros caracteres especiais.
let $preco = 19.99
let _quantidade = 10

console.log($preco) // Saída: 19.99
console.log(_quantidade) // Saída: 10

//Podemos usar também letras acentuadas e caracteres especiais, mas é recomendado evitar isso para garantir a compatibilidade e legibilidade do código.
let preço = 50.0
let usuário = 'Carlos'

console.log(preço) // Saída: 29.99
console.log(usuário) // Saída: Carlos

//NÃO PODEMOS
let 1username = 'João' // Isso causará um erro de sintaxe, pois não podemos iniciar o nome de uma variável com um número.
let @userName = 'Maria' // Isso também causará um erro de sintaxe, pois não podemos usar o caractere "@" no início do nome de uma variável.
let nome-completo = 'Ana Silva' // Isso causará um erro de sintaxe, pois não podemos usar o caractere "-" no nome de uma variável.
let nome completo = 'Ana Silva' // Isso causará um erro de sintaxe, pois não podemos usar espaços no nome de uma variável.

//RECOMENDAÇÕES
//1.Utilizar nomes em inglês, pois é a língua mais comum na programação e facilita a compreensão do código por outros desenvolvedores.
//2.Evitar usar acentos e caracteres especiais, mesmo que sejam permitidos, para garantir a compatibilidade e legibilidade do código.
//3.Evitar usar apenas uma letra para nomear uma variável, pois isso pode dificultar a compreensão do código. É recomendado usar nomes mais descritivos e significativos.
let n = 10 // Isso pode ser confuso, pois não sabemos o que "n" representa.
let nomeDoUsuario = 'João' // Isso é mais claro, pois indica que a variável armazena o nome do usuário.
//4.Usar camelCase para nomear variáveis, onde a primeira palavra é escrita em minúscula e as palavras subsequentes começam com letra maiúscula. Isso é uma convenção comum em JavaScript e ajuda a melhorar a legibilidade do código.
let nomeDoProduto = 'Notebook' // Isso segue a convenção camelCase e é fácil de ler.

//5.Snake_case é outra convenção de nomenclatura onde as palavras são separadas por underscores (_). Embora seja mais comum em outras linguagens, como Python, também pode ser usado em JavaScript, mas é menos recomendado.
let nome_do_produto = 'Notebook' // Isso é válido, mas não segue a convenção camelCase, que é mais comum em JavaScript.
