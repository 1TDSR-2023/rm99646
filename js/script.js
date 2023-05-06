

var nome1 = "Petroni";

if(nome1 != ""){
    let nome1 = "Geovana";
}

console.log(nome1);

//Declarar um Array
let frutas = ["banana","maçã","pêssego","laranja","limão","melancia","kiwi"]
console.log(frutas);
console.table(frutas);
console.log(frutas[0]);
console.log(frutas[6]);

//Inserir um item ao final do array com o método push(nomeDoItem)
frutas.push("manga");
console.log(frutas);

//Inserir um item ao final do array com o método push(nomeDoItem)
frutas.push("pitaya");
console.log(frutas);

//Remover um item no final do array com o método shift();
frutas.shift();
console.log(frutas);

//Remover um item no ínicio do array com o método pop();
frutas.pop();
console.log(frutas);

//Localizar um item no array utilizando o método indexOf(nomeDoItem);
//Obs: Este método retorna o índice do item encontrado.
//let indice = frutas.indexOf("laranja");
//console.log(`O índice encontrado foi : $(índice)`);
//console.log(`O item buscado foi : ${frutas[indice]}`);

//let indice = frutas.indexOf("melancia");
//console.log(`O item encontrado no ímdice antes da remoção foi : ${ frutas[indice]}`);
//frutas.splice(indice,1);
//console.log(frutas);
//console.log(`O item encontrado do índice depois da correção foi : ${ frutas[indice]}`)

