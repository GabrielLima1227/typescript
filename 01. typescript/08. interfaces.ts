export interface UserFeedback {
    rating: number;
    comment: string;
}

export interface SupportSession {
    id: string;
    startedAt: number; 
    endedAt: number; 
    feedback: UserFeedback;
}

export function getSessionDuration(session: SupportSession) {
    return session.endedAt - session.startedAt;
}

// Extends
export interface Message {
    id: string;
    sender: string;
    recipient: string;
    timestamp: number;
}

export interface TextMessage extends Message {
    text: string;
    carrier: string;
}

export interface EmailMessage extends Message {
    subject: string;
    body: string;
}

export function getEmailDescription(email: EmailMessage): string {
    return `[EMAIL] ${email.subject}: ${email.body}`;
}

export function getTextMessageDescription(text: TextMessage): string {
    return `[TEXT] ${text.text}` + ` - Sent via ${text.carrier}`;
}

// Overriding Interface Properties
export interface SystemEvent {
    type: string;
    timestamp: number;
    payload: string | object;
    affectedService: string;
    severity: "low" | "medium" | "high" | "critical";
}

export interface ErrorEvent extends SystemEvent {
    type: "error";
    payload: string;
    code: number;
}

export interface OutageEvent extends SystemEvent {
    type: "outage";
    severity: "critical";
    durationSeconds: number;
}

export function getHighPriorityEvents(events: SystemEvent[]) {
    return events.filter(
        (event) => event.severity === "high" || event.severity === "critical"
    );
}