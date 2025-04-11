





function* generatorFunction() {
    yield 1;
    yield new Promise((resolve) => setTimeout(() => resolve(2), 1000));
    yield new Promise((resolve) => setTimeout(() => resolve(3), 1000));
    yield 4;
    yield 5;
}

let genFunc = generatorFunction();

console.log(genFunc.next().value); // 1
genFunc.next().value.then(console.log);  //   both are promise    
genFunc.next().value.then((data)=>console.log(data)); //but consoling style different
console.log(genFunc.next().value); // 4
console.log(genFunc.next().value); // 5
