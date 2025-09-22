interface Settings{
    theme?: string
    language?: string
    notificationsEnabled?: boolean
}

const defaultSettings: Required<Settings> = {
    theme: "Dark",
    language: "Pt-Br",
    notificationsEnabled: true,
}