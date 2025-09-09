export function updateUser(user) {
    if (user.id) {
        return "can't update id";
    }
    if (user.email) {
        return `updating email to ${user.email}`;
    }
    return "nothing to update";
}
export function addBillingInfo(info) {
    return `billing info: ${info.email}, ${info.phoneNumber}`;
}
export function importConfig(config) {
    return config;
}
const waitingMessage = "Awaiting prompt";
const thinkingMessage = "Cooking";
const respondingMessage = "Sending response";
export function getStatusMessage(status) {
    const map = {
        waiting: waitingMessage,
        thinking: thinkingMessage,
        responding: respondingMessage,
    };
    return map[status];
}
export function stripID(user) {
    const { id, ...userWithoutId } = user;
    return userWithoutId;
}
