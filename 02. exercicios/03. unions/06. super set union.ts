function processInput(data: string | number | boolean | null | undefined): void {
    if (data === null) {
        console.log("The data is null.");
    } else if (typeof data === "string") {
        console.log("The data is a string:", data.toUpperCase());
    } else if (typeof data === "number") {
        console.log("The data is a number:", data);
    } else if (typeof data === "boolean") {
        console.log("The data is a boolean:", data ? "True" : "False");
    } else if (typeof data === "undefined") {
        console.log("The data is undefined.");
    } else {
        console.log("Unrecognized data type.");
    }
}

processInput("hello world");
processInput(123.45);
processInput(true);
processInput(false);
processInput(null);
processInput(undefined);