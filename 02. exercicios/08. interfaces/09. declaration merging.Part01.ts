interface Address {
    street: string;
    number: number;
}

interface Address {
    city: string;
    state: string;
}

const completeAddress: Address = {
    street: "Main Street",
    number: 123,
    city: "Anytown",
    state: "State",
};

console.log(completeAddress);