export function getFirst<T>(arr: T[]): T | undefined {
    if (arr.length > 0) {
        return arr[0];
    }
    return undefined;
}

// Multiple Type Parameters
export function pair<A, B>(a: A[], b: B[]): [A, B][] {
    const result: [A, B][] = [];
    const minLength = Math.min(a.length, b.length);

    for (let i = 0; i < minLength; i++) {
        result.push([a[i], b[i]]);
    }

    return result;
}

// Generic Constraints
export function pluckEmails<T extends { email: string }>(arr: T[]): string[] {
    return arr.map(obj => obj.email);
}