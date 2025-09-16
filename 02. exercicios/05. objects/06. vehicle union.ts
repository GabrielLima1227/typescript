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