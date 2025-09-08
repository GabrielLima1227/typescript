// Partial Utility Types
export interface User {
    id: string;
    email: string;
}

export function updateUser(user: Partial<User>) {
    if (user.id) {
        return "can't update id";
    }
    if (user.email) {
        return `updating email to ${user.email}`;
    }
    return "nothing to update";
}

// Required Utility Types
export interface ContactInfo {
    email?: string;
    phoneNumber?: string;
}

export function addBillingInfo(info: Required<ContactInfo>): string {
    return `billing info: ${info.email}, ${info.phoneNumber}`;
}

// Readonly Utility Types
export interface Config {
    apiUrl: string;
    timeout: number;
    debug: boolean;
}

export function importConfig(config: Config): Readonly<Config> {
    return config;
}

// Record Utility Types
export type ModelStatus = "waiting" | "thinking" | "responding";

const waitingMessage = "Awaiting prompt";
const thinkingMessage = "Cooking";
const respondingMessage = "Sending response";

export function getStatusMessage(status: ModelStatus) {
    const map: Record<ModelStatus, string> = {
        waiting: waitingMessage,
        thinking: thinkingMessage,
        responding: respondingMessage,
    };
    return map[status];
}

// Pick Utility Types
export interface User {
    id: string;
    name: string;
    email: string;
    age: number;
}

export type UserWithoutID = Omit<User, "id">;

export function stripID(user: User): UserWithoutID {
    const { id, ...userWithoutId } = user;
    return userWithoutId;
}