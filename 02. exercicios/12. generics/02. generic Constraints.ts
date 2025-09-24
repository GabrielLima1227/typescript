function getLast<T extends { length: number }>(list: T): number {
    return list.length - 1;
}