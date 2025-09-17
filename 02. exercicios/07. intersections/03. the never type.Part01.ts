type NumericID = {
    id: number,
}
type StringID = {
    id: string,
}
type ImpossibleID = NumericID & StringID;

let test: ImpossibleID;

console.log(`It's impossible to create an intersection between types that don't have a logically possible intersection.`);