function* generator(){
    yield 1;
    yield 2;
    yield 3;
}



for (value of generator()){
    console.log(value);
}



let genFunc = generator()






[`you can only use one of these approaches,`]


///////////////////////////
for (value of genFunc){  //
    console.log(value);  //
}                        // 
///////////////////////////


/////////////////////////////////////////
                                       //
console.log(genFunc.next().value);     //
console.log(genFunc.next().value);     //
console.log(genFunc.next().value);     //
                                       //
/////////////////////////////////////////

