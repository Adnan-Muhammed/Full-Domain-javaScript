let arr = [1,2,3,4,5,6,7,8,9,10]



let newArr = arr.reduce((acc,elem)=>{
    if(elem>3){
        acc.push(elem)
    }
    return acc
},[])

console.log(newArr);
