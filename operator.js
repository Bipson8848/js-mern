let abc;
// console.log(abc); // undefined
if (!abc) {
    // console.log("abc is not defined or is falsy");
}
let userName= "John";
let notificationCount = 10;
let emailTemplate =`Hello ${userName}, you have ${notificationCount} new notifications. Please check your inbox.`;
// console.log(emailTemplate);

//struture and destructuring
let person=['Bipson','Shrestha',18]
let [name, surname, age] = person;
console.log(name, surname, age); 

let user={
    uName: 'Bipson',
    uSurname: 'Shrestha',
    uAge: 18,
    uEmail: 'bipson490@gmail.com',
    uPhone: '9847620049'
}
let newUser=user
console.log(user.uName); // Both will show 'Bipson Shrestha'
newUser.uName='Bipson Shrestha';
console.log(user.uName); // Both will show 'Bipson Shrestha'

// let {uName,uPhone}=user
// console.log(`userName:${uName}, phone:${uPhone}`)