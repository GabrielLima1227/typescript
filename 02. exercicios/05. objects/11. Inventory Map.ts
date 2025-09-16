let inventory = new Map<string, number>();

inventory.set("Water", 7);
inventory.set("Bean", 5);
inventory.set("Rice", 6);
inventory.set("Chocolate", 3);

inventory.set("Chocolate", 2);

inventory.forEach((quantity, product) => {
    console.log(`${product}: ${quantity}`);
});