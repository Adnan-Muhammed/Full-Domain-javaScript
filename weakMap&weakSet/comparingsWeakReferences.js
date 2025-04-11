let normalObject = { name: "Persistent Object" };
let objContainer = {};
objContainer[normalObject] = "Some value";

normalObject = null; // The object will not be garbage collected because it's still referenced by objContainer



//   through this way 
delete objContainer[normalObject]; // Remove reference
normalObject = null; // Now the object can be garbage collected

// -=-------------===========----------========


let map = new Map();
let keyObjMap = { name: "Key Object" };
map.set(keyObjMap, "Value");

key = null; // The key object is still held by the Map and won't be garbage collected


//   through this way 
map.delete(key); // Remove reference
key = null; // Now the object can be garbage collected

// -=-------------===========----------========


// ----BUT IN WEAKMAP---============-------==================----------=

let weakMap = new WeakMap();
let keyObjWeakMap = { name: "Weak Key" };
weakMap.set(keyObjWeakMap, "Value");

keyObjWeakMap = null; // The key can now be garbage collected, and the WeakMap entry will be automatically cleaned up



// ----BUT IN WEAKSET---============-------==================----------=

let weakSet = new WeakSet();
let keyObjWeakSet = { name: "WeakSet Object" };
weakSet.add(keyObjWeakSet);

keyObjWeakSet = null; // The object can now be garbage collected, and the WeakSet entry will be automatically removed
