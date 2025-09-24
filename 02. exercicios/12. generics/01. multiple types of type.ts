function combine<T extends {id: number}, U extends {name: string}>(obj01: T, obj02: U): T & U{
    return  {...obj01, ...obj02};
}

const result = combine({ id: 1 }, { name: "Alice", age: 30 });
console.log(result);