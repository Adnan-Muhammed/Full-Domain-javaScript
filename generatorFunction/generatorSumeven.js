function* evenSumGenerator(limit){
    for(i=0;i<=limit;i++){
        if(i%2==0){
            yield i
        }
    }
}

let evenSum = evenSumGenerator(10)


let sum =0
for( value of evenSum){
    sum =sum+value
}

console.log(sum);
