function format(value: string | number | boolean): string {
    if (typeof value === "string") {
        return value.toUpperCase();
    } else if (typeof value === "number") {
        return value.toFixed(2);
    } else {
        return value ? "Yes" : "No";
    }
}