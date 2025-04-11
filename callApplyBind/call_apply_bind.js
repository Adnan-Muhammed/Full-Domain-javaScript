const obj ={
    name:'one',
    age:10,
}

const obj2 ={
    name:'two',
    age:15,
}
const obj3 ={
    name:'three',
    age:20,
}

function greeting(job,location){
    console.log(`${this.name} ${this.age} ${job} ${location}`);
}


greeting.call(obj3,'developer','kochi')
greeting.apply(obj3,['developer','kochi'])
const display =greeting.bind(obj3,'accountant','kochi')

display()


