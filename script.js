console.log("Hello JS");
let num = 1;
const pi = 3.141595;
var num2 = 2; // hoisting
num = 2;

let text = 'hello world';
text = `hello world!
and pi is ${pi}`;
console.log(text);

let bool = true;
bool = false;
console.log(bool);

let undef;
console.log(undef);

let nil = null;
console.log(nil);

nil = undefined;
console.log(nil);

num = 1 / 0;
console.log(num);

num = Math.sqrt(-1);
console.log(num);

num = -1 * 0;
console.log(num);

num = 0.1 + 0.2;
console.log(num);

let array = [1, 2, 3, 'asdasd', true];
array.push('mnhhhh');
console.log(array);
console.log(array[0]);

let obj = {
    name: 'Paul',
    age: 30,
    cats: ['Kiisu', 'Miisu', 'Nahhui'],
    aadress: {
        city: 'Tallinn',
        street: 'Vilde tee'
    }
}
console.log(obj);
console.log(obj.name);

let func = function (){
    console.log('hello world');
}
console.log(func);
function func2() {
    console.log('hello world');
}
let func3 = () => console.log('hello world');
let func4 = () => {
    console.log('hello world');
}