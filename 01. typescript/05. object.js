export function processMail(mail) {
    return `FROM: ${mail.from}
            TO: ${mail.to}
            SUBJECT: ${mail.urgent ? "[URGENT] " : ""}${mail.subject}
            BODY: ${mail.body}`;
}
export function processMail02(mail) {
    return `FROM: ${mail.from}
TO: ${mail.to}${!mail.cc ? "" : "\nCC: " + mail.cc}
SUBJECT: ${mail.urgent ? "[URGENT] " : ""}${mail.subject}
BODY: ${mail.body}`;
}
export function formatAddresses(addresses) {
    let formatted = "";
    for (const address of addresses) {
        if (address.kind === "internal") {
            formatted += `${address.firstName}.${address.lastName}@support.ai, `;
        }
        if (address.kind === "external") {
            formatted += `${address.username}@${address.domain}, `;
        }
    }
    return formatted.slice(0, -2);
}
// Sets
export function findNumUniqueLabels(formattedAddresses) {
    const uniqueLabels = new Set(formattedAddresses); // Or const uniqueLabels = new Set<string>();
    return uniqueLabels.size;
}
// Maps
export function getFileLength(files, filename) {
    const fileContents = files.get(filename);
    if (fileContents === undefined) {
        return 0;
    }
    const encoder = new TextEncoder();
    const encodedData = encoder.encode(fileContents);
    return encodedData.length;
}
export function setPreference(preferences, key, value) {
    const exists = key in preferences;
    preferences[key] = value;
    return exists;
}
export function canContact(preferences) {
    return !(preferences.doNotDisturb || preferences.outOfOffice);
}
// PropertyKey
export const TWO_FACTOR = Symbol("twoFactor");
export const BIOMETRIC_LOCK = Symbol("biometricLock");
export function isSecure(preferences) {
    return preferences[TWO_FACTOR] || preferences[BIOMETRIC_LOCK];
}
// “As Const” and Object.freeze
export const defaultPreferences = {
    name: "Kreese",
    doNotDisturb: false,
    outOfOffice: false,
};
// Satisfies
export const newMailPreferences = {
    doNotDisturb: false,
    outOfOffice: false,
    signature: "Boots, Support.ai Wizard Bear",
    theme: "dark",
};
export function configurePreferences(doNotDisturb, outOfOffice, useSystemTheme, theme) {
    if (typeof outOfOffice === "string") {
        return {
            doNotDisturb: false,
            outOfOffice: false,
            useSystemTheme: doNotDisturb,
            theme: outOfOffice,
        };
    }
    else if (useSystemTheme !== undefined && theme !== undefined) {
        return {
            doNotDisturb: doNotDisturb,
            outOfOffice: outOfOffice,
            useSystemTheme: useSystemTheme,
            theme: theme,
        };
    }
    else {
        return {
            doNotDisturb: doNotDisturb,
            outOfOffice: outOfOffice,
        };
    }
}
