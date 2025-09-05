export type Mail = {
    from: string;
    to: string[];
    subject: string;
    body: string;
    urgent: boolean;
};

export function processMail(mail: Mail) {
    return `FROM: ${mail.from}
            TO: ${mail.to}
            SUBJECT: ${mail.urgent ? "[URGENT] " : ""}${mail.subject}
            BODY: ${mail.body}`;
}

// Optional Object Properties
export type Mail02 = {
    from: string;
    to: string[];
    subject: string;
    body: string;
    urgent: boolean;
    cc?: string[]; //Optional Object Properties
};

export function processMail02(mail: Mail02) {
    return `FROM: ${mail.from}
TO: ${mail.to}${!mail.cc ? "" : "\nCC: " + mail.cc}
SUBJECT: ${mail.urgent ? "[URGENT] " : ""}${mail.subject}
BODY: ${mail.body}`;
}

// Discriminated Unions
export type InternalAddress = {
    kind: "internal";
    firstName: string;
    lastName: string;
};

export type ExternalAddress = {
    kind: "external";
    username: string;
    domain: string;
};

export type Address = InternalAddress | ExternalAddress;

export function formatAddresses(addresses: Address[]) {
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
export function findNumUniqueLabels(formattedAddresses: string[]) {
    const uniqueLabels = new Set(formattedAddresses); // Or const uniqueLabels = new Set<string>();
    return uniqueLabels.size;
}

// Maps
export function getFileLength(files: Map<string, string>, filename: string) {
    const fileContents = files.get(filename);
    if (fileContents === undefined) {
        return 0;
    }
    const encoder = new TextEncoder();
    const encodedData = encoder.encode(fileContents);
    return encodedData.length;
}

// Dynamic Keys
export type MailPreferences = {
    [key: string]: boolean;
};

export function setPreference(
    preferences: MailPreferences,
    key: string,
    value: boolean,
    ) {
    const exists = key in preferences;
    preferences[key] = value;
    return exists;
}

// Dynamic Default Properties
export type MailPreferences02 = {
    [key: string]: boolean | string;
    doNotDisturb: boolean;
    outOfOffice: boolean;
};
export function canContact(preferences: MailPreferences02): boolean {
    return !(preferences.doNotDisturb || preferences.outOfOffice);
}

// PropertyKey
export const TWO_FACTOR = Symbol("twoFactor");
export const BIOMETRIC_LOCK = Symbol("biometricLock");

export type MailPreferences03 = {
    [key: PropertyKey]: boolean | string;
    doNotDisturb: boolean;
    outOfOffice: boolean;
    [TWO_FACTOR]: boolean;
    [BIOMETRIC_LOCK]: boolean;
};

export function isSecure(preferences: MailPreferences03) {
    return preferences[TWO_FACTOR] || preferences[BIOMETRIC_LOCK];
}

// Readonly Modifier
export type MailPreferences04 = {
    [key: PropertyKey]: boolean | string;
    readonly doNotDisturb: boolean;
    readonly outOfOffice: boolean;
};

// “As Const” and Object.freeze

export const defaultPreferences = {
    name: "Kreese",
    doNotDisturb: false,
    outOfOffice: false,
} as const;

// Satisfies
export const newMailPreferences = {
    doNotDisturb: false,
    outOfOffice: false,
    signature: "Boots, Support.ai Wizard Bear",
    theme: "dark",
} satisfies MailPreferences;

// Function Overloads
export type MailPreferences05 = {
    [key: PropertyKey]: boolean | string;
    doNotDisturb: boolean;
    outOfOffice: boolean;
};

export function configurePreferences(
    doNotDisturb: boolean,
    outOfOffice: boolean | string,
): MailPreferences;

export function configurePreferences(
    doNotDisturb: boolean,
    outOfOffice: boolean | string,
    useSystemTheme?: boolean,
    theme?: string,
    ): MailPreferences {
    if (typeof outOfOffice === "string") {
        return {
        doNotDisturb: false,
        outOfOffice: false,
        useSystemTheme: doNotDisturb,
        theme: outOfOffice,
        };
    } else if (useSystemTheme !== undefined && theme !== undefined) {
        return {
        doNotDisturb: doNotDisturb,
        outOfOffice: outOfOffice,
        useSystemTheme: useSystemTheme,
        theme: theme,
        };
    } else {
        return {
        doNotDisturb: doNotDisturb,
        outOfOffice: outOfOffice,
        };
    }
}
