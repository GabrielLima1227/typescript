interface Runner {
    run(): void;
}

interface Cyclist {
    pedal(): void;
}

interface Triathlete extends Runner, Cyclist {
    swim(): void;
}

const athlete1: Triathlete = {
    run(): void {
        console.log("The triathlete is running.");
    },
    pedal(): void {
        console.log("The triathlete is pedaling.");
    },
    swim(): void {
        console.log("The triathlete is swimming.");
    },
};

athlete1.run();
athlete1.pedal();
athlete1.swim();