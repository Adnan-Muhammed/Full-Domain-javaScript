let map = new Map();

let key = { key: "keyValue" };

map.set(key, { obj: "objValue" });

key = null;
console.log(map.get(key));

//  {"obj":"objValue"};

// its not in GC' d  still alive in memory  but it is unreachable
// unless you stored the key somewhere else before setting it to null  


// like
let map2 = new Map();

let key2 = { key2: "keyValue" };
let backupKey = key2; // Save the key for later

map.set(key2, { obj: "objValue" });

key = null;

console.log(map.get(backupKey)); // ✅ Still works: { obj: "objValue" }
