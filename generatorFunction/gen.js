let array = ['a', 'b', 'c'];
function* generator(arr) {
    let i = 0;
    while (i < arr.length) {
        yield arr[i++]
    }
}

const it = generator(array);

// We can do it.return() to finish the generator

// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);

// ------------------+-+++_+_+_+_+-=_+_+_+__+_+_+----------------
// ------------------+-+++_+_+_+_+-=_+_+_+__+_+_+----------------
// ------------------+-+++_+_+_+_+-=_+_+_+__+_+_+----------------



const arr2 = ['a', 'b', 'c'];

function* generator2(arr2) {
    yield 1;
    yield* arr2;
    yield 2;
    yield* [10,20,30,40]
}

// for (let value of generator2(arr2)) {
//     console.log(value);
// }


let genFunc=  generator2(arr2)

console.log(genFunc.next().value);
console.log(genFunc.next().value);
console.log(genFunc.next().value);





