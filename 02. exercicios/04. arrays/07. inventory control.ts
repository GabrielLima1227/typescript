type inventory = (string | number)[];  
let stock: inventory = [];

stock.push("Rice");
stock.push(10);
stock.push("Bean");
stock.push(25);

function displayInventory(stock: inventory): void {
    if (!stock.length) {
        console.log(`There are no products in stock!`);
        return;
    }

    stock.forEach((item, index) => {
        if (index % 2 === 0) {
            const product = item as string;
            const amount = stock[index + 1] as number;
            console.log(`Product name: ${product}\nProduct amount: ${amount}`);
        }
    });
}
