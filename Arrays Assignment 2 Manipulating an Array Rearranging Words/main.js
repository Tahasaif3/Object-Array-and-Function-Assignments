/*Modify the Array:
• Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
o Convert non-strings (booleans, numbers) to strings if needed.
o Split elements into character arrays (optional).
o Rearrange characters or elements in the desired order (modify original array or
create temporary arrays).*/
var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
//using methods
// scrambledArray.splice(3,1);
// scrambledArray.splice(2,1);
// scrambledArray.unshift("I");
// scrambledArray.splice(1,1);
// scrambledArray.splice(1,1);
// scrambledArray.splice(3,2,"Student","of");
// scrambledArray.push("Giaic");
// const result = scrambledArray.join(' ');
// console.log(result);
scrambledArray.splice(3, 1);
scrambledArray.splice(2, 1);
scrambledArray.unshift('I');
scrambledArray.splice(1, 1);
scrambledArray.splice(1, 1);
scrambledArray.splice(3, 2, "Student", "of");
scrambledArray.push("Giaic");
var result = scrambledArray.join(' ');
console.log(result);
