export function getTicketInfo(id: string | number) {
    if(typeof id === "string"){
        const parsedId = id.split("-")[1];
        const numberId = parseInt(parsedId);
        return `Processing ticket: ${numberId}`
    }

    return `Processing ticket: ${id}`
}

// Optional Parameters
export function calculateApiCost(numReqs: number, tier?: string) {
    if(tier == null){
        return numReqs * 0.1;
    }

    if(tier == "pro"){
        return numReqs * 0.05;
    }

    if(tier == "enterprise"){
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

// Value Unions
export type Priority = 'low' | 'medium' | 'high' | 'critical';

export function setPriority(level: Priority): number {
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

// Super Set Unions
export type EmploymentStatus = "employed" | "unemployed" | "student" | string;

export function updateEmploymentStatus(status: EmploymentStatus) {
    return `Employment status updated: ${status}`;
}

// Template Literal Types
export type LogLevel = "info" | "warn" | "error";
export type LogSourceType = "api" | "database" | "auth";

export type LogMessage = `${LogLevel}: ${string}`;
export type LogSource = `${LogSourceType}_${number}`;

export function createLogEntry(message: LogMessage, source: LogSource): string {
    return `[${source}] LOG - ${message}`;
}
