export enum RequestSeverity {
    Low,
    Medium,
    High,
    Critical,
}

export type SupportRequest = {
    id: string;
    severity: RequestSeverity;
    description: string;
};


export function isCritical(request: SupportRequest) {
    return request.severity === RequestSeverity.Critical;
}

// String Enums
export type SupportRequest2 = {
    id: string;
    severity: RequestSeverity;
    description: string;
};

export enum RequestSeverity {
    Low2 = "LOW",
    Medium2 = "MEDIUM",
    High2 = "HIGH",
    Critical2 = "CRITICAL",
}

export function convertSeverityToLabel(severity: number) {
    switch (severity) {
        case 0:
        return RequestSeverity.Low2;
        case 1:
        return RequestSeverity.Medium2;
        case 2:
        return RequestSeverity.High2;
        case 3:
        return RequestSeverity.Critical2;
        default:
        throw new Error("Unknown severity");
    }
}