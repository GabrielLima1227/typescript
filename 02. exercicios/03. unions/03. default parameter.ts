function calculateDiscount(value: number, discountRate: number = 0.1): number {
    return value - (value * discountRate);
}