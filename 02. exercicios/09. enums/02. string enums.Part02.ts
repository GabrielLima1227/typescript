enum OrderStatus {
    PENDING = "PENDING",
    SHIPPED = "SHIPPED",
    DELIVERED = "DELIVERED",
    CANCELLED = "CANCELLED",
}

function checkDelivery(status: OrderStatus): boolean {
    return status === OrderStatus.PENDING || status === OrderStatus.SHIPPED;
}

console.log(checkDelivery(OrderStatus.PENDING));
console.log(checkDelivery(OrderStatus.SHIPPED));
console.log(checkDelivery(OrderStatus.DELIVERED));
console.log(checkDelivery(OrderStatus.CANCELLED));
