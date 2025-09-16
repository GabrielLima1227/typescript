type Settings = { theme: string; darkMode: boolean };

function updateSettings(settings: Settings) {
    console.log(settings);
}

updateSettings({ theme: "White", darkMode: false, color:rgb(255,255,255)})