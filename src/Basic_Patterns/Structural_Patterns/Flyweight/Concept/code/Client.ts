import {FlyweightFactory} from "src/Basic_Patterns/Structural_Patterns/Flyweight/Concept/code/FlyweightFactory";

const factory = new FlyweightFactory([
    ['Chevrolet', 'Camaro2018', 'pink'],
    ['Mercedes Benz', 'C300', 'black'],
    ['Mercedes Benz', 'C500', 'red'],
    ['BMW', 'M5', 'red'],
    ['BMW', 'X6', 'white'],
    ['Tesla', 'Model Y', 'white']
]);
factory.listFlyweights();

function addCarToPoliceDatabase(
    ff: FlyweightFactory, plates: string, owner: string,
    brand: string, model: string, color: string
) {
    console.log(`\nClient: Adding a car to database.`);
    const flyweight = ff.getFlyweight([brand, model, color]);

    flyweight.operation([plates, owner]);
}

addCarToPoliceDatabase(factory, 'CL234IR', 'James Doe', 'BMW', 'M5', 'red');
addCarToPoliceDatabase(factory, 'CL234IR', 'James Doe', 'BMW', 'X1', 'red');
addCarToPoliceDatabase(factory, 'MK20035', 'Antonio Madrid', 'Tesla', 'Model 3', 'white');

factory.listFlyweights();

