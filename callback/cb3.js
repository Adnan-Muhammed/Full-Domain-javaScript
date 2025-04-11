

console.log(1);

let getData =(cb)=>{
    console.log(2);
    setTimeout(()=>{
        cb(3)
    },1000)
    
}



getData((value)=>{
    console.log(value);
})
console.log(4);
