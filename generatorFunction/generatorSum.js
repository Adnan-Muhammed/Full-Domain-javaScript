function* generator(_,limit){
    for(i=0;i<=limit;i++){
        yield i;
    }
}


let generateFunc = generator(1,10)

let sum =0
for( value of generateFunc){
    sum =sum+value
}

console.log(sum);

// sum of 1 to 10
