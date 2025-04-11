let weakMap = new WeakMap();

let key = { key: "keyValue" };

weakMap.set(key, { weakValue: "weakValue" });

key = null;

console.log(weakMap.get(key));




// ==========---------==========-=============----
let map2 = new Map();
let weakMap2 = new WeakMap();

let obj2 = { id: 1 };

map2.set(obj2, "Map Value");
weakMap2.set(obj2, "WeakMap Value");

obj2 = null;

// In Map: key is still alive, but inaccessible unless you kept a reference.
// In WeakMap: key-value may be garbage collected, fully cleaned from memory.



//=========--------=====--=====-//-----=====-//=--=-