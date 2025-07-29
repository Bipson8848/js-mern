let users=[
    ["Alice", 25, "Engineer"],
    ["Bob", 30, "Designer"],
    ["Charlie", 35, "Teacher"],
    ["Diana", 28, "Artist"],
    ["Ethan", 22, "Developer"],
    ["Fiona", 27, "Manager"],
    ["George", 32, "Analyst"],
    ["Hannah", 29, "Consultant"],
    ["Ian", 31, "Salesperson"],
    ["Judy", 26, "Marketer"]
]
users.forEach(user => {
    // console.log(user[0], user[1], user[2]);
})
let obj={
    name: "John",
    age: 30,
    occupation: "Developer"
}
// console.log(obj.name,obj.age,obj.occupation);

let arrobj=[
    {name: "Alice", age: 25, occupation: "Engineer"},
    {name: "Bob", age: 30, occupation: "Designer"},
    {name: "Charlie", age: 35, occupation: "Teacher"},
    {name: "Diana", age: 28, occupation: "Artist"},
    {name: "Ethan", age: 22, occupation: "Developer"},
    {name: "Bipson", age:17, occupation: "Student"}
]
arrobj.forEach((e)=>{
    console.log(`Hello ${e.name}`);
})

