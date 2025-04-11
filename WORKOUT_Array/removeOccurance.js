// let arr = [1,4,5,4,4,2,6,3,4,2,8,6,5,];


let removeOccurance =(arr)=>{
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                arr.splice(j,1)
                j--;
            }
        }
    }
}

// let res = removeOccurance(arr)

console.log( 2 )
