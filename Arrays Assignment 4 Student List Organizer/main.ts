/*Learning Objective: Get comfortable with data structures (objects and arrays) and basic 
functions in TypeScript.
Tasks:
1. Student Data: The provided code defines an interface named Student that describes 
student information like name, senior status (true/false), and whether they've completed 
their assignments (true/false).
o Imagine this as a template for organizing student details.
2. Student List:
o An array named students stores information about several students using the 
Student template. Think of this array as your class list!
3. Find Senior Students with Assignments (Optional):
o The code (not shown here) has a function that might find students who are seniors 
and have completed their assignments.
o Can you guess why this information might be helpful?
4. Class List Update:
o Imagine you need to update your class list! The code (not shown here) might have 
a function that removes students who haven't completed their assignments 
(assuming only seniors are responsible).
o Can you think of any reasons why this might be useful (consider limitations)*/

interface Student{
    name:string;
    seniorStatus:boolean;
    completedAssignment:boolean;
}

let students:Student[] = [
{
    name:"Ahmed",
    seniorStatus:true,
    completedAssignment:true,
},
{
    name:"Ashad",
    seniorStatus:false,
    completedAssignment:false,
},
{
    name:"Abrar",
    seniorStatus:false,
    completedAssignment:false,
},
{
    name:"Rehman",
    seniorStatus:true,
    completedAssignment:true,
},
{
    name:"Ali",
    seniorStatus:true,
    completedAssignment:true,
},
]

// students who have completed thier assignments and are seniors
function findSeniorStudentswithCompletedAssignment(students:Student[]):Student[] {
    return students.filter((students) => students.seniorStatus && students.completedAssignment)
}

let SeniorStudentswithCompletedAssignment = findSeniorStudentswithCompletedAssignment(students);

console.log("SeniorStudentswithCompletedAssignment", SeniorStudentswithCompletedAssignment);

// updating the student list=================
function updateClassList(students:Student[]):Student[] {
    return students.filter((students) => students.seniorStatus && students.completedAssignment);
}

let updatedClassList = updateClassList;

console.log("Updated Class List:", updatedClassList(students));

