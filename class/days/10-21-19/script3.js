class Food {
    constructor(foodName, callories, ) {
        this._foodName = foodName;
        this._callories = callories;

    }

    getFoodName(){
        return this._foodName
    }
    getCallories(){
        return this._callories
    }
    setFoodName(foodName){
        this._foodName = foodName;
    }
    setCallories(callories){
        this._callories = callories;
    }

    getTableRow(){
        let trElem= document.createElement("tr");
        let tdNameElem= document.createElement("td");
        let tdCalElem = document.createElement("td");
        tdNameElem.innerHTML = this._foodName;
        tdCalElem.innerHTML = this._callories;
        trElem.append(tdNameElem);
        trElem.append(tdCalElem);
        return trElem;
    }
}

//create array

foods=[];
foods.push(new Food("popcorn", 5));
foods.push(new Food("chesse", 20));
foods.push(new Food("butter", 45));
foods.push(new Food("sprinkles", 10));

//created table
let tableElem = document.createElement("table");
// body.append(tableElem);
let contentDiv = document.getElementById("content");
contentDiv.append(tableElem);

// loop through names
let totalCalories = 0;
for(food of foods){
    console.log(food.getFoodName())
    totalCalories += food.getCallories();
    tableElem.append(food.getTableRow());
}

//displays total callories
console.log("callories: " + totalCalories);