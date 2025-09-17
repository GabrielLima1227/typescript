const enum StatusCode {
    Ok = 200,
    BadRequest = 400,
    NotFound = 404
}

function status(code: StatusCode): string {
    switch (code) {
        case StatusCode.Ok:
            return "Success! The request was successful.";
        case StatusCode.BadRequest:
            return "Error 400: Bad Request. The request could not be understood.";
        case StatusCode.NotFound:
            return "Error 404: Not Found. The resource could not be located.";
        default:
            return "Unknown status code.";
    }
}

console.log(status(StatusCode.Ok));        // ✅ Success
console.log(status(StatusCode.BadRequest)); // ❌ Error 400
console.log(status(StatusCode.NotFound));   // ❌ Error 404
