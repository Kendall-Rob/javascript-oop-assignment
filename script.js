// Write a Car class in Javascript that takes the following properties as parameters and sets them in a constructor:
// 1. Make
// 2. Model
// 3. Year
// 4. Color
// Finally, make sure to add 4 methods (getMake, getModel, getYear, and getColor) that return the car's respective properties
// (This is called a 'getter' in Object Oriented Programming)

// If you're stuck, take a look at the example class here for reference: https://www.geeksforgeeks.org/introduction-object-oriented-programming-javascript/#
 
class Car {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    getMake() {
        return this.make;
    }
    getModel() {
        return this.model;
    }
    getYear() {
        return this.year;
    }
    getColor() {
        return this.color;
    }

}


let car1 = new Car("Mercedes-Benz", "G63", 2022, "Gray");
let car2 = new Car("Rolls-Royce", "Ghost Base", 2023, "Black");
let car3 = new Car("Ferrari", "Roma Base", 2022, "White");
let car4 = new Car("Lamborghini", "Urus", 2022, "Mac White");

console.log(car1);
console.log(car2);
console.log(car3);
console.log(car4);