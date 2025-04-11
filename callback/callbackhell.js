

console.log('first');

function getData1(cb1){
    setTimeout(()=>{
        cb1(1)
    },1000)
}


function getData2(cb3){
    setTimeout(()=>{
        cb2(2)
    },1000)
}



function getData3(cb3){
    setTimeout(()=>{
        cb2(3)
    },1000)
}



const pass2=(val,pass3)=>{
    return pass3
}

const pass1 =(val,pass2)=>{
return pass2
}

getData1(pass1)
