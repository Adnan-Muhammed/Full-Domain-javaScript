let str = "how are you";

let str2 =  str.split(" ").map(word=>word.split("").reverse().join("")).join( " ")


// .split(" ")         // Split into words: ["how", "are", "you"]
// .map(word => word.split("").reverse().join("")) // Reverse each word
// .join(" ");         // Join back into a string

console.log(str2);
