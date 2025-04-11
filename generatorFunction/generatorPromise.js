

// let promise1 = new Promise((res,rej)=>setTimeout(()=>res(1),1000))
// let promise2 = new Promise((res,rej)=>setTimeout(()=>res(2),1000))

// async function* generateFunc(){

//     yield 'string'
//     let promiseOne = await  promise1
//     yield promiseOne;
//     yield 'string2'
//     let promiseTwo = await promise2
//     yield 'string3'
//     yield promiseTwo
// }


// (async ()=>{
//     for await (value of generateFunc()){
//         console.log(value);
//     }

// })()


// // let genFunc = generateFunc()

// // console.log(genFunc.next().value);



const firstPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 1000)
    })
}

const secondPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(2), 1000)
    })
}

async function* generator() {
    const firstPromiseResult = await firstPromise();
    yield firstPromiseResult;
    const secondPromiseResult = await secondPromise();
    yield secondPromiseResult;
}

(async () => {
    let it = generator();
    for await (let value of it) {
        console.log(value); // Outputs: 1 (after 5 seconds), 2 (3 seconds later)
    }
})();
