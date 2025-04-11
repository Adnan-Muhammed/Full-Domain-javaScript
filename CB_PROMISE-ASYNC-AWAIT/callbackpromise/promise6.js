
[`Normally, resolve and reject take values like objects, strings, or numbers as their arguments. 
 However, in rare cases where you resolve a function, 
 it must be explicitly handled (i.e., called) in the .then() block to get the expected behavior.`]

 [` but its rare`]

 
let data = (obj)=>{
    
    return new Promise((resolve,reject)=>{

        
        if(obj && typeof obj ==='object'&& 9=='9'){
            // resolve/reject typically take values not function
            //incase it take function then   should handle it call in .then
        resolve(()=>{     
                if(obj.name ==""){
                     obj.name ="ASIF"
                     return obj
                }
            })
        }else{
            reject('error')
        }
    })
}

let object ={name:"",age:25};

data(object).then((val)=>{
   console.log(val,99);
   let s =val()
   console.log(s);
   
    
})
.catch((err)=>{
    console.log(err);
    
})

