function searchName(names: string[], term: string): boolean {
    return names.some(name => name.toLowerCase() === term.toLowerCase());
}
