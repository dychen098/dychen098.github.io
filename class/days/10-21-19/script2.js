class Person {
    constructor(firstName, LastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get firstName() {
        // return this._firstName;
        return this._firstName + '*';
    }

    get firstName(fName){
        // this._firstName = fName;
        this._firstName = fName + "!";
    }

  

    
}

me = new Person("Amy", "Smith");
    me.firstName = "bobby";
    console.log(me.firstName);