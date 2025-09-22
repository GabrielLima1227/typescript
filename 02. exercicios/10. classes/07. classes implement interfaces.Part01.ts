interface Playable {
    play(): this;
    pause(): this;
}

class Video implements Playable {
    private isPlaying: boolean = false;

    play(): this {
        if (!this.isPlaying) {
            this.isPlaying = true;
            console.log("Playing Video");
        } else {
            console.log("Video is already playing");
        }
        return this;
    }

    pause(): this {
        if (this.isPlaying) {
            this.isPlaying = false;
            console.log("Paused Video!");
        } else {
            console.log("Video is already paused");
        }
        return this;
    }
}

class Song implements Playable {
    private isPlaying: boolean = false;

    play(): this {
        if (!this.isPlaying) {
            this.isPlaying = true;
            console.log("Playing Audio!");
        } else {
            console.log("Audio is already playing");
        }
        return this;
    }

    pause(): this {
        if (this.isPlaying) {
            this.isPlaying = false;
            console.log("Paused Audio!");
        } else {
            console.log("Audio is already paused");
        }
        return this;
    }
}

const myVideo = new Video();
myVideo.play().pause().play();

const mySong = new Song();
mySong.play().play().pause();
