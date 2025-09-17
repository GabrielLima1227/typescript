enum UserRole {
    ADMIN = "ADMIN",
    EDITOR = "EDITOR",
    VIEWER = "VIEWER"
}

function getRoleMessage(role: UserRole): void {
    switch (role) {
        case UserRole.ADMIN:
            console.log("You have full access to the system.");
            break;
        case UserRole.EDITOR:
            console.log("You can edit content, but you cannot manage users.");
            break;
        case UserRole.VIEWER:
            console.log("You can only view content.");
            break;
        default:
            console.log("Unknown role.");
    }
}

getRoleMessage(UserRole.ADMIN);  
getRoleMessage(UserRole.EDITOR);  
getRoleMessage(UserRole.VIEWER);
