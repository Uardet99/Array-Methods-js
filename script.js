console.log("Array Methods");
let numeros = [1, 2, 3];

numeros.push(4);
console.log(numeros);

numeros.pop();
console.log(numeros);

numeros.shift();
console.log(numeros);

numeros.unshift(0);
console.log(numeros);

let letras = ["a", "b", "c"];

let array = letras.concat("d");
console.log(array);

array = array.join("-");
console.log(array);

let vocales = ["a", "e", "i"];

let a = vocales.slice(1);
console.log(a);

console.log(vocales.indexOf("i"));

console.log(vocales.includes("a"));

console.log([1, 3, 5, 6, 7, 8, 9].find((n) => n % 2 === 0));

console.log([2, 4, 6, 5].findIndex((n) => n % 2 !== 0));

console.log([1, 2, 3, 4, 5].map((n) => n * 2));

console.log([1, 2, 3, 4, 5].filter((n) => n % 2 === 0));

console.log([1, 2].reduce((acc, cur) => acc + cur));

console.log([1, 2, 3, 4, 5].every((n) => n < 6));

console.log([1, 2, 3, 4, 5, 8].some((n) => n > 6));

console.log([1, 2, 3, 4].reverse());

console.log([1, 2, 3, 4, 5].at(-1));
