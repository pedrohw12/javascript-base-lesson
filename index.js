// document.getElementById("myApp").innerHTML = myFunction(4, 2);

// 1 - escrever um console.log e mostrar isso no browser

// 2 - falar sobre como fazer comentário e o que se deve escrever nesses comentários

// 3 - falar sobre variáveis, diferença entre var, let, const

// let myName = 'Fulano';
// myName = 'Ciclano';
// console.log(myName);

// const myAge = 99;
// myAge = 76;
// console.log(myAge);

// 4 - Tipos de variáveis:
// Primitivos:
// string, number, boolean, undefined, null;
// undefined - se declarar uma variável e não iniciá-la, por padrão
// ela receberá o valor de undefined
// Ex.: let firstName;
// O valor de null é usado para limpar variáveis.
// Por exemplo, se um usuário não tem idade, podemos dar o valor de null

// 5 - javascript é uma linguagem de variáveis dinâmicas
// ao declarar uma variável e colocar o valor de string,
// posteriormente podemos colocar valores de números
// Ex.: no console - typeOf name
//
// Explicar a ela que para isso, temos formas de assegurar que os valores
// sejam sempre do mesmo tipo em uma variável, usando proptypes ou
// criando condicionais
// Ex.:
// let myCar = undefined;
// typeOf myCar
//
// Explicar que undefined é tanto o valor da variável, quando o tipo da
// variável, por isso é chamado de variável do tipo referência
// Ex.: let cars = null;
// typeOf cars -> object -> isso significa que o valor é null, mas a variável
// é do tipo object;
// Explicar o que são objetos

// 6 - Reference Types:
// objetc
// array
// function
// Ex.:
// let name = 'Carlos'
// let age = 230
//
// let person = {
//    name: 'Carlos',
//    age: 230
//}
// console.log(person)
//
// Para mudar uma propriedade do objeto
// person.name = 'Ricardo';
// console.log(person.name);
//
// Pode mudar também com colchetes
// person['name'] = 'Mary'
// console.log(person.name);
//
// Usando colchetes, tem a possibilidade de acessar valores
// de forma dinâmica
// Ex.:
// let selection = 'name';
// person[selection] = 'Mary';
//
// AQUI -----------------------------------------
// 7 - arrays
// let selectedColors = ['vermelho', 'azul'];
// console.log(selectedColors);
//
// Para acessar um elemento específico do array
// console.log(selectedColors[0]);
//
// Podemos adicionar elementos a este array
// selectedColors[2] = 'verde';
// console.log(selectedColors);
//
// propriedade length
// console.log(selectedColors.length)

// 8 - funções
//
// function boasVindas() {
//    console.log('Hello World');
// }
//
// boasVindas();
//
// function boasVindas(name) {
//    console.log('Hello ' + name);
// }
//
// boasVindas('John');
//
// usando template string
//

// fuction boasVindas(name) {
//   console.log(`Hello ${name}`);
// }

// boasVindas('pedro')

// function quadrado(number) {
//   return number * number;
// }
//
// let number = quadrado(2);
// console.log(number);
//
//
//
// REVER
// OPERADORES
//  *
// /
// % (o que resta)
//
// Tipos de dados
//  number -> var length = 16
// string -> var lastName = 'john'
// object -> var fruta = { name: 'manga', peso: 3000 }
//
// funções
//
// var txt = 'hellow ordl';
// var x = txt.length;
// alert(x)
//
// concatenar 2 strings
// var str1 = 'hello';
// var str2 = 'world';
// alert(str1+str2);
//
// métodos de strings
//
// achar a posição de 1 elemento na string
// var txt = "abcdefghijklm";
// var pos = txt.indexOf("h")
//
//
// slice
// var txt = 'i can eat bananas all day'
// var x = txt.slice(10, 17);
//
// replace
// var txt = 'hello world';
// txt = txt.replace('hello', 'welcome');
//
// converter valores para maisculo
// var txt = 'hello world';
// txt = txt.toUpperCase();
//
// pegar valores do array
// var cars = ['saab', 'volvo', 'bmw'];
// var x = cars[1];
//
// mudar o valor de um item do array
// var cars = ['volvo', 'jeep', 'mercedes'];
// cars[0] = 'Ford';
//
// saber o cumpriento de um array
// cars.length;
//
// remover o ultimo item de um array
// cars.pop();
//
// adicionar um item ao array
// cars.push('celta')
//
// remover items do array
// var fruits = ['banana', 'laranja', 'maçã', 'kiwi'];
// fruits.splice(1,2);
//
// arrumar o array em ordem alfabética
// fruits.sort();
//
// condição ternária
// var age = n;
// var voteable = (age <18) ?"Too young" :"Old enough";
// alert(voteable);
//
// for loop
// var i;
// for(i=  0;i< 10;i++) {
//   console.log(i);
// }
//
// var fruits = ['maçã', 'banana', 'laranaj'];
// for(x of fruits) {
//   console.log(x);
// }

// EXERCICOS
// let pessoas = [];

// function criarPessoa(name, age, nacionality, sex) {
//   const pessoa = { name, age, nacionality, sex };

//   if (pessoas.find((item) => item.name === pessoa.name)) {
//     alert("essa pessoa já foi criada");
//   } else {
//     pessoas.push(pessoa);
//   }
// }

// const teste = criarPessoa("pedro", 23, "brasileiro", "masculino");

// function verifyPerson(teste) {
//   if (teste.nacionality === "brasileiro") {
//     alert("é brasileiro");
//   } else {
//     alert("é estrangeiro");
//   }
// }

// const lista = [1, 2];

// const create_person_for_each_item = lista.map((item) =>
//   criarPessoa(
//     (name = `pedro${item}`),
//     (age = item * 10),
//     (nacionality = "brasileiro"),
//     (sex = "masculino")
//   )
// );

// function deletarPessoa(name) {
//   const filtered = pessoas.filter((item) => item.name !== name);

//   pessoas = filtered;
//   return pessoas;
// }

function handleClick() {
  document.getElementById('myApp').innerHTML = 'um novo parágrafo'
}
