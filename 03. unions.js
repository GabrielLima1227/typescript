export function getTicketInfo(id) {
    if (typeof id === "string") {
        const parsedId = id.split("-")[1];
        const numberId = parseInt(parsedId);
        return `Processing ticket: ${numberId}`;
    }
    return `Processing ticket: ${id}`;
}
// Optional Parameters
export function calculateApiCost(numReqs, tier) {
    if (tier == null) {
        return numReqs * 0.1;
    }
    if (tier == "pro") {
        return numReqs * 0.05;
    }
    if (tier == "enterprise") {
        return numReqs * 0.03;
    }
    return numReqs * 1;
}
// Default Parameters
export function estimateResponseTime(promptLength = 100, modelType = 'text') {
    let time;
    switch (modelType) {
        case 'text':
            time = 2 + (0.01 * promptLength);
            break;
        case 'image':
            time = 5 + (0.02 * promptLength);
            break;
        case 'code':
            time = 3 + (0.05 * promptLength);
            break;
        default:
            time = 0;
    }
    return Math.round(time);
}
export function setPriority(level) {
    switch (level) {
        case 'low':
            return 0;
        case 'medium':
            return 1;
        case 'high':
            return 2;
        case 'critical':
            return 3;
        default:
            return 0;
    }
}
export function updateEmploymentStatus(status) {
    return `Employment status updated: ${status}`;
}
export function createLogEntry(message, source) {
    return `[${source}] LOG - ${message}`;
}
