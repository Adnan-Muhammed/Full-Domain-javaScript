function* generator(){
    let num =0;
    while(num>10 ?false:true){
        num+=2;
        yield num
    }
}


let generateFunc =generator()

console.log(generateFunc.next().value);
console.log(generateFunc.next().value);
console.log(generateFunc.next().value);


