// &
export type SupportBot = {
    id: string;
    name: string;
    status: string;
    language: string;
};

export type TextBot = SupportBot & {
    messageLog: string[];
    sendMessage: (message: string) => string;
};

export type VoiceBot = SupportBot & {
    callLog: string[];
    phoneNumber: string;
    dialNumber: (phoneNumber: string) => string;
};

// Never
type slashCommands = "greet" | "info" | "help";

const greetMessage = "Hello! How can I assist you?";
const infoMessage = "Sure! Here’s a list of things I can do...";
const helpMessage = "I can help you with that!";

// don't touch above this line

export function handleSlashCommand(command: slashCommands) {
    if (command === "greet") {
        return greetMessage;
    }
    if (command === "info") {
        return infoMessage;
    }
    if (command === "help") {
        return helpMessage;
    }
    const err: never = command;
    return err;
}

// Intersecting Incompatible Types
export type SentimentTag = {
    type: "positive" | "neutral" | "negative";
    score: number;
    flagged: boolean;
};

export type ChannelTag = {
    type: "chat" | "email" | "phone";
    receivedAt: string;
    verified: boolean;
};

export type ReviewMethod = "manual_review" | "auto_process";

export type TicketMetadata = {
    sentiment: SentimentTag;
    channel: ChannelTag;
};

export function getReviewMethod(metadata: TicketMetadata): ReviewMethod {
    const needsReview =
        metadata.sentiment.flagged ||
        !metadata.channel.verified ||
        metadata.channel.type === "phone";

    return needsReview ? "manual_review" : "auto_process";
}