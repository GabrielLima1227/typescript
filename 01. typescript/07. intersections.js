const greetMessage = "Hello! How can I assist you?";
const infoMessage = "Sure! Here’s a list of things I can do...";
const helpMessage = "I can help you with that!";
export function handleSlashCommand(command) {
    if (command === "greet") {
        return greetMessage;
    }
    if (command === "info") {
        return infoMessage;
    }
    if (command === "help") {
        return helpMessage;
    }
    const err = command;
    return err;
}
export function getReviewMethod(metadata) {
    const needsReview = metadata.sentiment.flagged ||
        !metadata.channel.verified ||
        metadata.channel.type === "phone";
    return needsReview ? "manual_review" : "auto_process";
}
