function checkAuthentication(isAuthenticated: boolean): [boolean, string] {
    if (isAuthenticated) {
        return [true, "User is authenticated. Access granted."];
    } else {
        return [false, "User is not authenticated. Access denied."];
    }
}

const [isAuthenticated, statusMessage] = checkAuthentication(true);
console.log(`Authentication Status: ${isAuthenticated}`);
console.log(`Message: ${statusMessage}`);