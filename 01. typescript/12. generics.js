export function getFirst(arr) {
    if (arr.length > 0) {
        return arr[0];
    }
    return undefined;
}
// Multiple Type Parameters
export function pair(a, b) {
    const result = [];
    const minLength = Math.min(a.length, b.length);
    for (let i = 0; i < minLength; i++) {
        result.push([a[i], b[i]]);
    }
    return result;
}
// Generic Constraints
export function pluckEmails(arr) {
    return arr.map(obj => obj.email);
}
