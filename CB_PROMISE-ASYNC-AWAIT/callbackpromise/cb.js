let sum = (num1, num2, cb) => {
  cb(num1, num2);
};

sum(10, 20, (num1, num2) => {
  total = num1 + num2;
console.log(total);
});
