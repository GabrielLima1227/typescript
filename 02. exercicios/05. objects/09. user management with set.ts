let userNames = new Set<string>();

userNames.add("Rick");
userNames.add("Morty");
userNames.add("Summer");
userNames.add("Jerry");

console.log(userNames.has("Rick"));

userNames.delete("Jerry");

console.log(userNames.size);