/*const nomes = ["João", "Carlos", "Amanda", "Arthur", "Beatriz"];
const amanda = nomes.find(nome => nome == "Amanda");
console.log(amanda); // Deve retornar "Amanda"

/////////////////////////////////////////////////////////////////////////

//atividade basica 2
const listaDeUsuarios = [
    { id: 1, nome: "Alice" },
    { id: 2, nome: "Bruno" },
    { id: 3, nome: "Carla" }
  ];
  
  const idEncontrado = listaDeUsuarios.find(usuario => usuario.id == 2);
  const usuarioEncontrado = listaDeUsuarios.find(usuario => usuario.nome == bruno);
  
  console.log(`id: ${idEncontrado}, nome: ${usuarioEncontrado}`); 
  // Deve retornar { id: 2, nome: "Bruno" }
  
/////////////////////////////////////////////////////////////////////////

const numeros = [5, 8, 12, 15, 3, 20, 7];
const maioresQueDez = numeros.filter(numero => numero > 10);
console.log(maioresQueDez); // Deve retornar [12, 15, 20]

const nomes = ["Ana", "João", "Amanda", "Carlos", "Arthur", "Beatriz"];
const nomesComA = nomes.filter(nome => nome.startsWith("A"));
console.log(nomesComA); // Deve retornar ["Ana", "Amanda", "Arthur"]

// Documentação do startsWith em https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith

/////////////////////////////////////////////////////////////////////////
 

const produtos = [
    { nome: "Teclado", preco: 120 },
    { nome: "Mouse", preco: 40 },
    { nome: "Fone de ouvido", preco: 80 },
    { nome: "Caderno", preco: 30 }
  ];
  const produtoBuscado = produtos.find( n => n.nome== "Fone de ouvido" )
  const precoBuscado = produtos.find( p => p.preco == 80) // Use find aqui
  console.log(`nome: ${produtoBuscado} preço: ${precoBuscado} `); // Deve retornar { nome: "Fone de ouvido", preco: 80 }
  */
