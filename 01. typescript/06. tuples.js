export function createTicket(prevTicket, comment) {
    const newTicket = prevTicket + 1;
    const isCritical = comment.toLowerCase().includes('critical');
    return [newTicket, comment, isCritical];
}
