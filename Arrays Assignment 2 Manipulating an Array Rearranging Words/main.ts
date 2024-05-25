/*Modify the Array:
• Use methods like split(), join(), push(), pop(), shift(), and unshift() to: 
o Convert non-strings (booleans, numbers) to strings if needed.
o Split elements into character arrays (optional).
o Rearrange characters or elements in the desired order (modify original array or 
create temporary arrays).*/


const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"]

//using methods

scrambledArray.splice(3,1);//This removes 123 from the array.

scrambledArray.splice(2,1);//This removes true from the array. 

scrambledArray.unshift("I");//This adds "I" to the start of the array. 

scrambledArray.splice(1,1);//This removes "student" from the array.

scrambledArray.splice(1,1);//This removes "of" from the array.

scrambledArray.splice(3,2,"Student","of");//This replaces "GIAIC" and "I" at index 3 and 4 with "student" and "of"

scrambledArray.push("Giaic");//This adds "Giaic" to the end of the array

let result = scrambledArray.join(' ');//This combines all elements of the array into a single string with each element separated by a space. 

console.log(result);//The result is:
            // "I am a student of Giaic"

