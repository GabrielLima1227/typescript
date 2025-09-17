interface Singer {
    sing(): void;
}

interface Dancer {
    dance(): void;
}

interface Artist extends Singer, Dancer {
    name: string;
}

const singerDancer: Artist = {
    name: "Joji",
    sing(): void {
        console.log(`${this.name} is singing an amazing song!`);
    },
    dance(): void {
        console.log(`${this.name} is dancing on the stage.`);
    },
};

singerDancer.sing();
singerDancer.dance();