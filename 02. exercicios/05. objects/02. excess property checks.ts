type Settings = { theme: string; darkMode: boolean };

function updateSettings(setting: Settings) {
    console.log(setting);
}

updateSettings({theme: "White", darkMode: false, color:rgb(255,255,255)})