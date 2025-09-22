class Product {
    constructor (public name: string, public price: number, public inStock: boolean) {}

    applyDiscount(percent: number): number {
        this.price = this.price * (1 - percent / 100);
        return this.price;
    }
}
