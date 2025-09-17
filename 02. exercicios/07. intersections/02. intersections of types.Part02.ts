type Gamer = {
    nickname: string,
}
type Streamer = {
    platform: string,
}

function showDisplay(influencer: Gamer & Streamer): void {
    console.log(`The influencer ${influencer.nickname} is live on ${influencer.platform}`);
}

showDisplay({ nickname: "ProGamer", platform: "Twitch" });