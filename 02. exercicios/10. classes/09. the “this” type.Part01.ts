class StringBuilder {
    private data: string = "";

    append(text: string): this {
        this.data += text;
        return this;
    }

    clear(): this {
        this.data = "";
        return this;
    }

    show(): void {
        console.log(this.data);
    }
}

const builder = new StringBuilder();

builder
    .append("Hello ")
    .append("World")
    .show();

builder
    .clear()
    .append("TypeScript ")
    .append("is awesome!")
    .show();