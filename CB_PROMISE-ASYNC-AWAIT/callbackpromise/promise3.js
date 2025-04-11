let sumArray = (arr) => {
  return new Promise((resolve, reject) => {
    if (Array.isArray(arr) && arr.every((elem) => typeof elem === "number")) {
      let square = arr.map((elem) => elem * 2);
      resolve(square);
    } else {
      reject({ message: "should number array" });
    }
  });
};



let arr = [1, 2, 3, 4];
let arr2 = [1, 2, "3", 4, 5];

sumArray(arr2)
  .then((val) => console.log(val))
  .catch((err) => console.log(err.message));
