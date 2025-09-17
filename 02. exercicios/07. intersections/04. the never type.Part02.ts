type DarkTheme = {
    theme: "dark";
}
type LightTheme = {
    theme: "light";
}
type DarkAndLight = DarkTheme & LightTheme;

let test: DarkAndLight;