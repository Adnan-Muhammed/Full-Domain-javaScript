
let str ="adnan";


let name = str.split('')



    

    for(i=0;i< name.length;i++){
        for(j=0;j<name.length;j++){
            if(i==j){
                name.splice(j,i+1)
            }
        }
    }


    console.log(name);
    




