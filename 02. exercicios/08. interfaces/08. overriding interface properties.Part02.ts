interface Account {
    id: number;
    status: string;
}

interface PremiumAccount extends Account {
    status: "active" | "suspended";
}

const vip1: PremiumAccount = {
    id: 101,
    status: "active",
};

console.log(vip1);