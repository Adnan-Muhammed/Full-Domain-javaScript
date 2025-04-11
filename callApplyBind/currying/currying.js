
function sum (x){
return function (y){
    return function(z){
        return x+y+z
    }
}
}

let res = sum(10)(10)(10)

console.log(res);

