const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('hello');
        }, 1000);
    });
};

const fetchData2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('adnan');
        }, 1000);
    });
};

const fetchData3 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('!');
        }, 1000);
    });
};

const fetchAllData = async () => {
    const val = await fetchData();
    const val2 = await fetchData2();
    const val3 = await fetchData3();
    return `${val} ${val2} ${val3}`;
};

fetchAllData().then(result => {
    console.log(result); // Output: hello adnan !
});



// let res = fetchAllData()
// console.log(res);  // Promise { <pending> }

