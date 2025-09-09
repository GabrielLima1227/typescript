export function calculateTotal(price, quantity, discount) {
    return price * quantity * (1 - discount);
}
export function combinePrompts(systemPrompt, userPrompt) {
    return `${systemPrompt}\n${userPrompt}`;
}
export function greetCustomer(name) {
    return `Hello ${name}, welcome to Support.ai! How can I assist you today?`;
}
export function farewellCustomer(name) {
    return `Goodbye ${name}, have a great day!`;
}
