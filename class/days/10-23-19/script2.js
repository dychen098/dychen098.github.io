function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;

    this.sayHello = function(){
        //console.log("hello "+ this.firstName+ " " + this.lastName);
        alert("hello "+ this.firstName+ " " + this.lastName);
    }
}

let fName = prompt("ebnter first name")
let lName = prompt("enter last name")


let me = new Person(fName, lName);
//console.log("Person is " + me.firstName);
me.sayHello();