let arr = [1,2,3,4,5,6,7,8]


let findLargest = (arr)=>{
    let largest = -Infinity
    for(i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest = arr[i];
        }
    }
    return largest
}

let res = findLargest(arr)

console.log(res);
