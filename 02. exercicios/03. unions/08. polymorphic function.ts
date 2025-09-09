function AddOrConcatenate(value01: string | number, value02: string | number): number | string{
    if (typeof value01 === "number" && typeof value02 === "number"){
        return value01 + value02;
    }
    if (typeof value01 === "string" && typeof value02 == "string"){
        return `${value01}` + `${value02}`;
    }
    return `${value01} + ${value02}`;
}