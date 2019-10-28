
class Person {
    constructor(fName, lName) {
        this._firstName = fName;
        this._lastName = lName;
    }


    getFirstName(){
            return this._firstName
    }
    getLastName(){
        return this._lastName
    }
    setFirstNme(fName){
        this._firstName = fName;
    }
}

me = new Person("Amy", "Bob")
me.setFirstNme("Hairry")
console.log(me.getFirstName())
console.log(me.getLastName())
console.log(typeof(Person));


class MyDate {
    constructor(Hour, Minute, Second) {
        this._hour = Hour;
        this.minute = Minute;
        this.second = Second;
    }


    getHour(){
        return this._hour
    }
    getMinute(){
        return this._minute
    }
    getSecond(){
        return this._second;
    }
    setHour(Hour){
        this._hour = Hour;
    //     if(Hour < 10){
    //         return `0`+Hour
    //    }
    //      return Hour;
    }
    setMinute(Minute){
        this._minute = Minute;
    }
    setSecond(Second){
        this._second = Second;
    }

    GetFormattedDate(){
        // return `${this._hour}:${this._minute}:${this._second}`;
        return `${this.prependZero(this._hour)}:${this.prependZero(this._minute)}:${this.prependZero(this._second)}`;
    }

    prependZero(data){
        if(data <10){
            return `0`+data;
        }
        return data;
    }
}

date = new MyDate(2,53,12)
console.log(date.GetFormattedDate());