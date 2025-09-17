interface MusicalInstrument {
    name: string;
    play(): void;
}
interface Guitar extends MusicalInstrument{
    ropes: number;
}

const fender: Guitar = {
    name: "Fender Stratocaster",
    ropes: 6,
    play(): void {
        console.log(`Playing the ${this.name} with its ${this.ropes} strings.`);
    },
};