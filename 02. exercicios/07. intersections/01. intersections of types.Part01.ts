type Author = {
    name: string,
    books: string[],
}

type Speaker = {
    topic: string,
    event: string,
}

type Influencer = Author & Speaker;
