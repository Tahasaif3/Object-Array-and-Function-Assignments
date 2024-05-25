var students = [
    {
        name: "Ahmed",
        seniorStatus: true,
        completedAssignment: true,
    },
    {
        name: "Ashad",
        seniorStatus: false,
        completedAssignment: false,
    },
    {
        name: "Abrar",
        seniorStatus: false,
        completedAssignment: false,
    },
    {
        name: "Rehman",
        seniorStatus: true,
        completedAssignment: true,
    },
    {
        name: "Ali",
        seniorStatus: true,
        completedAssignment: true,
    },
];
function findSeniorStudentswithCompletedAssignment(students) {
    return students.filter(function (students) { return students.seniorStatus && students.completedAssignment; });
}
var SeniorStudentswithCompletedAssignment = findSeniorStudentswithCompletedAssignment(students);
console.log("SeniorStudentswithCompletedAssignment", SeniorStudentswithCompletedAssignment);
function updateClassList(students) {
    return students.filter(function (students) { return students.seniorStatus && students.completedAssignment; });
}
var updatedClassList = updateClassList;
console.log("Updated Class List:", updatedClassList(students));
