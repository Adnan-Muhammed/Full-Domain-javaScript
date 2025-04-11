function print(result){
    console.log(result)
}

function sum(num1,num2,callback){
    sum = num1+num2
    callback(sum)
}
sum(1,2,print)


// print is callback function
// sum is higher order function