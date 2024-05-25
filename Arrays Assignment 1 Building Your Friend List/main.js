/*
Task: Create a program that manages a simple friend list.
1. Define an object named people containing an empty array called friends.
2. Create three separate objects, each representing a friend, with properties like firstName,
lastName, and optionally id.
3. Add these friend objects to the friends array within the people object.
4. Output the entire people object to the console, displaying your information and your
friend list
*/
var people = {
    friends: []
};
var friend1 = {
    firstName: "Taha",
    lastName: "Saif",
    id: 89910,
};
var friend2 = {
    firstName: "Ahmed",
    lastName: "Riaz",
    id: 89008,
};
var friend3 = {
    firstName: "Ashad",
    lastName: "Ali",
    id: 786564,
};
people.friends.push(friend1, friend2, friend3);
console.log(people);
