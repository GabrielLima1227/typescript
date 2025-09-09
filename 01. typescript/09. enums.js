export var RequestSeverity;
(function (RequestSeverity) {
    RequestSeverity[RequestSeverity["Low"] = 0] = "Low";
    RequestSeverity[RequestSeverity["Medium"] = 1] = "Medium";
    RequestSeverity[RequestSeverity["High"] = 2] = "High";
    RequestSeverity[RequestSeverity["Critical"] = 3] = "Critical";
})(RequestSeverity || (RequestSeverity = {}));
export function isCritical(request) {
    return request.severity === RequestSeverity.Critical;
}
(function (RequestSeverity) {
    RequestSeverity["Low2"] = "LOW";
    RequestSeverity["Medium2"] = "MEDIUM";
    RequestSeverity["High2"] = "HIGH";
    RequestSeverity["Critical2"] = "CRITICAL";
})(RequestSeverity || (RequestSeverity = {}));
export function convertSeverityToLabel(severity) {
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
