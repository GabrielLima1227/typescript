interface Device {
    brand: string;
    model: string;
}

interface SmartPhone extends Device{
    model: "Android" | "iOS";
}

let mySmartPhone: SmartPhone = {
    brand: "Samsung",
    model: "Android",
}