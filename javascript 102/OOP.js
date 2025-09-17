// إنشاء كائن جديد من الفئة
const car = {
    name : 'Toyota',
    color : 'Red',
    year : 2020,
    move : function(speed){
            return `${this.name} is moving at ${speed} km/h`;
        },
    stop : function(){
            return `${this.name} has stopped.`;
        }
    };
console.log(car.move(100)); // Toyota is moving at 100 km/h
console.log(car.stop()); // Toyota has stopped.
console.log(car.year); // 2020
console.log(car['color']); // Red



// إنشاء الكلاس 
class Car{
    static category = 'Vehicle'; // خاصية ثابتة

    constructor(name, color, year,currentSpeed){
        this.name = name;
        this.color = color;
        this.year = year;
        this.currentSpeed = currentSpeed;
    }
    move(speed){
        this.currentSpeed = speed;
        return `The ${this.name} is moving at ${this.currentSpeed} km/h`;
    }
    stop(){
        this.currentSpeed = 0;
        return `The ${this.name} has stopped.`;
    }
    static info(){
        return `All cars are categorized as ${this.category}.`;
    }
}
const car1 = new Car('Sonata', 'Blue', 2018, 120);
const car2 = new Car('Sunny', 'Black', 2021, 80);
const car3 = new Car('Accent','white',2025, 100);
console.log(car1.move(120)); // Sonata is moving at 140 km/h

console.log(car1.stop()); // Sonata has stopped.

console.log(car2.move(80)); // Sunny is moving at 80 km/h

console.log(car2.stop()); // Sunny has stopped.

console.log(car3.move(100)); // Accent is moving at 100 km/h

console.log(car3.stop()); // Accent has stopped.
console.log(Car.info()); // All cars are categorized as Vehicle.


class Animal {
    constructor(name,color){
        this.name = name
        this.color = color
        this.speed = 0
    }
    run(speed){
        this.speed = speed
        return`${this.name}runs with speed ${this.speed} km/h`
    }
}
class Cat extends Animal{
    makesound(){
        return`meow...`
    }
}
class Fox extends Animal{
    makesound(){
        return`bark...`
    }
}
const fox = new Fox('Mango','orange',30)
console.log(fox.run(30))