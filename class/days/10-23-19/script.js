
// all different ways to make objects
// let person = new Object();
// let person = {};
let person = { //things in light blue(firstName,lastName,age, etc) are the keys
    firstName: "amy",
    lastName: "smith",
    age:20,
    hobbies:["reading", "learning", "studying"],

    sayHello(){
        console.log("Hello "+ this.firstName);
    },
}
//console.log(person.firstName + " "+ person.lastName);

// //get a key from the user and dispay the value
// let key = "firstName";
// console.log(person[key]);
// console.log(person["lastName"]);

// //loop through the keys
// for(key in person){
//     //console.log(key);
//     console.log(key+ ": "+person[key]);
// }

person.sayHello();

//loop through the items and double the total
let MenuItem= {
    cheese: 3,
    banana: 2,
    oj: 5,
}

let total=0
for(let item in MenuItem){
    MenuItem[item] *=2;
    total+=MenuItem[item]
}
console.log("total is:"+total);