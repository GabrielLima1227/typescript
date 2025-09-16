type Email = {kind: "email", address: string};
type SMS = {kind: "sms", phone: string};
type Push = {kind: "push", deviceId: string};
type Notification = Email | SMS | Push;

function sendNotification(notify: Notification): void {
    switch (notify.kind) {
        case "email":
            console.log(`Kind: ${notify.kind} \n Address: ${notify.address}`);
            break;
        case "sms":
            console.log(`Kind: ${notify.kind} \n Phone: ${notify.phone}`);
            break;
        case "push":
            console.log(`Kind: ${notify.kind} \n Device ID: ${notify.deviceId}`);
            break;
        default:
            const _exhaustiveCheck: never = notify;
            return _exhaustiveCheck;
    }
}
