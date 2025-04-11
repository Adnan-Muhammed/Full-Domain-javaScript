let arr = [1,2,3,4]


let removeOccurance =(arr)=>{
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                arr.splice(j,1)
                j--;
            }
        }
    }
    return arr
}

let res = removeOccurance(arr) 
console.log(res);
