type Car = {kind: "car", doors: number};
type Bike = {kind: "bike", gears: number};
type Vehicle = Car | Bike;

function describeVehicle(vehicle: Vehicle): void {
    switch (vehicle.kind){
        case "car":
            console.log(`Kind: ${vehicle.kind} \n Doors: ${vehicle.doors}`);
            break;
        case "bike":
            console.log(`Kind: ${vehicle.kind} \n Gears: ${vehicle.gears}`);
            break;
        default:
            const _exhaustiveCheck: never = vehicle;
            return _exhaustiveCheck;
    }
}

//Other Example

interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
        return Math.PI * shape.radius ** 2;
        case "square":
        return shape.sideLength * shape.sideLength;
    }
}

const myCircle: Shape = { kind: "circle", radius: 10 };
const mySquare: Shape = { kind: "square", sideLength: 5 };

console.log(getArea(myCircle));
console.log(getArea(mySquare)); 