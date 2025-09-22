type Status = "pending" | "in-progress" | "done";

const statusMessages: Record<Status, string[]> = {
    pending: [`Your request is pending`, `Your request is currently being processed.`],
    "in-progress": [`Your request is in-progress`,`Your request is currently being in-progress.`],
    done: [`Your request is done`, `Your request is currently being in-progress.`],
};