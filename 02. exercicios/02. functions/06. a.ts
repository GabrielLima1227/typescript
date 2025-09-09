type TextConverter = (text: string) => string;

const toUppercase: TextConverter = (text) => text.toUpperCase();
const toLowercase: TextConverter = (text) => text.toLowerCase();