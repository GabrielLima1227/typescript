type PersonInfo = {
    [key: string]: string;
};

function selectPersonInfo(person: PersonInfo, keys: string[]): string[] {
    const selectedValues: string[] = [];
    for (const key of keys) {
        if (person.hasOwnProperty(key)) {
            selectedValues.push(person[key]);
        }
    }
    return selectedValues;
}
