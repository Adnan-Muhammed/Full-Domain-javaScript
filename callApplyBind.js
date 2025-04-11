

let obj ={
    name:"asdf",
    age:25,
    func :function( second,third){
        console.log(this.name,second,third)
    }
}

obj.func(5,6)


let obj2 = {
    name:" qwerty",
    age:21,
}

let binded =obj.func.bind(obj2,['second','third'])

binded()