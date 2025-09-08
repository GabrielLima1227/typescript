export function getSessionDuration(session) {
    return session.endedAt - session.startedAt;
}
export function getEmailDescription(email) {
    return `[EMAIL] ${email.subject}: ${email.body}`;
}
export function getTextMessageDescription(text) {
    return `[TEXT] ${text.text}` + ` - Sent via ${text.carrier}`;
}
export function getHighPriorityEvents(events) {
    return events.filter((event) => event.severity === "high" || event.severity === "critical");
}
