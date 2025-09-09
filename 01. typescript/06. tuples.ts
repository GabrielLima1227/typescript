export function createTicket(
    prevTicket: number,
    comment: string,
    ): [number, string, boolean] {
    const newTicket = prevTicket + 1;
    const isCritical = comment.toLowerCase().includes('critical');
    return [newTicket, comment, isCritical];
}