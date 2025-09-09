function calculateDiscount(value: number, tax: number = 0.1): number {
    return value + (value * tax)
}