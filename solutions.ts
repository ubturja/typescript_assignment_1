//solution of problem-1
function multiplyValue(value: number, multiplier: number = 2) : number
{
    return value * multiplier;
}
//(for testing purposes of problem-1)
//console.log(multiplyValue(10));       
//console.log(multiplyValue(10, 5));    
//console.log(multiplyValue(7, 0)); 

//solution of problem-2
function processInput(input: string | number | boolean) : string | number
{
    if(typeof input === "number")
    {
        return input * 10;
    }
    else if(typeof input === "string")
    {
        return input.trim().toLowerCase();
    }
    else
    {
        return input ? "Active" : "Inactive";
    }       
}
//(for testing purposes of problem-2)
//console.log(processInput(" TypeScript ")); 
//console.log(processInput(7));              
//console.log(processInput(true));           
//console.log(processInput(false));

//solution of problem-3
function formatCoordinate(coordinate : readonly [number, number, string]) : string
{
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} (${latitude}, ${longitude})`;

}
//(for testing purposes of problem-3)
//console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
//console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));

//solution of problem-4
function concatenateArrays<T>(...arrays:T[][]) : T[]
{
    const combinedArray : T[] = [];
    
    for (const array of arrays)
    {
        combinedArray.push(...array);
    }
    return combinedArray;
}
//(for testing purposes of problem-4)
//console.log(concatenateArrays(["a", "b"], ["c", "d"])); 
//console.log(concatenateArrays([1, 2], [3, 4], [5]));

//solution of problem-5
interface Course
{
    title : string;
    students : number;
    isPublished : boolean;

}

function getPopularCourses(courses : Course[], minStudents: number) : Course[]
{
    return courses.filter(course => course.isPublished === true && course.students >= minStudents);

}
//(for testing purposes of problem-5)
/*const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];

console.log(getPopularCourses(courses, 40));
*/

//solution of problem - 6
function pluckValues<T, K extends keyof T>(items : T[], key : K) : T[K][]
{
    
    return items.map(item => item[key]);


}
//(for testing purposes of problem- 6)
/*
const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" }
];
console.log(pluckValues(users, "name"));
console.log(pluckValues(users, "role"));
console.log(pluckValues(users, "id"));
*/

