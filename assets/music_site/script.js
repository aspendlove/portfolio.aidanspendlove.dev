class Song {
    constructor(songFilePath, albumFilePath, gradient, description, genre, title) {
        this.songFilePath = songFilePath;
        this.albumFilePath = albumFilePath;
        this.gradient = gradient;
        this.description = description;
        this.genre = genre;
        this.title = title;
    }
}

class Gradient {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}

const songs = [
    new Song("./assets/audio/songs/ashtray.mp3",
        "./assets/images/albumart/LP3.jpg",
        new Gradient("#F4E4E2", "#624CA8"),
        "description", "Indie",
        "LP3 - Ashtray"),

    new Song("./assets/audio/songs/bambi.mp3",
        "./assets/images/albumart/bambi.jpg",
        new Gradient("#1d2238", "#f3b3aa"),
        "description", "Indie",
        "Bambi - Bambi"),

    new Song("./assets/audio/songs/not_around.mp3",
        "./assets/images/albumart/sunny boy.jpg",
        new Gradient("#873E5A", "#D77B3F"),
        "description", "Indie",
        "Sunny Boy - Not Around"),

    new Song("./assets/audio/songs/sinking_ship.mp3",
        "./assets/images/albumart/when we were friends.jpg",
        new Gradient("#7A7476", "#3C5046"),
        "description", "Indie",
        "When We Were Friends - Sinking Ship"),

    new Song("./assets/audio/songs/words_I_used.mp3",
        "./assets/images/albumart/waiting to spill.jpg",
        new Gradient("#823E19", "#B72E29"),
        "description", "Indie",
        "Waiting to Spill - Words I Used"),

    new Song("./assets/audio/songs/blue.mp3",
        "./assets/images/albumart/In Transit.jpg",
        new Gradient("#416D86", "#AE3968"),
        "description", "Indie",
        "In Transit - Blue"),

    new Song("./assets/audio/songs/silly.mp3",
        "./assets/images/albumart/doomscroller.jpg",
        new Gradient("#f16a1b", "#349feb"),
        "description", "Indie",
        "Doomscroller - Silly"),

    new Song("./assets/audio/songs/deadweight.mp3",
        "./assets/images/albumart/emotional creature.jpg",
        new Gradient("#bea9ec", "#1951c0"),
        "description", "Indie",
        "Emotional Creature - Deadweight"),

    new Song("./assets/audio/songs/melting_vibes.mp3",
        "./assets/images/albumart/head space.jpg",
        new Gradient("#48557F", "#D6CEB0"),
        "description", "Indie",
        "Head Space - Melting Vibes"),

    new Song("./assets/audio/songs/we_are_sex_bobomb.mp3",
        "./assets/images/albumart/scott.jpg",
        new Gradient("#B93215", "#C3B2C5"),
        "description", "Indie",
        "Scott Pilgrim Original Soundtrack - We are Sex Bob-Omb"),

    new Song("./assets/audio/songs/so_what.mp3",
        "./assets/images/albumart/kind of blue.jpg",
        new Gradient("#181511", "#3E6678"),
        "description", "Jazz",
        "Kind of Blue - So What"),

    new Song("./assets/audio/songs/locomotion.mp3",
        "./assets/images/albumart/blue train.jpg",
        new Gradient("#010413", "#029dbb"),
        "description", "Jazz",
        "Blue Train - Locomotion"),

    new Song("./assets/audio/songs/high_above_the_land.mp3",
        "./assets/images/albumart/shovel knight.jpg",
        new Gradient("#69A4BF", "#2A2B50"),
        "description", "Electronic",
        "Shovel Knight OST - High Above the Land"),

    new Song("./assets/audio/songs/overdose.mp3",
        "./assets/images/albumart/katana.jpg",
        new Gradient("#D33AD5", "#3FDDD0"),
        "description", "Electronic",
        "Katana Zero OST - Overdose"),

    new Song("./assets/audio/songs/norwegian_wood.mp3",
        "./assets/images/albumart/rubber soul.jpg",
        new Gradient("#AF5D2A", "#2A6157"),
        "description", "Rock",
        "Rubber Soul - Norwegian Wood"),

    new Song("./assets/audio/songs/yoshimi.mp3",
        "./assets/images/albumart/yoshimi.jpg",
        new Gradient("#EBB174", "#D53E19"),
        "description", "Rock",
        "Yoshimi Battles the Pink Robots")
];

let currentMusicIndex = 0;

function changeDescription() {
    for (let i = 0; i < songs.length; i++) {
        document.getElementById("review-" + i).hidden = (i !== currentMusicIndex);
    }
}

function playPause() {
    if (document.getElementById("audio-player").paused) {
        document.getElementById("audio-player").play();
        document.getElementById("icon-play").src = "./assets/images/icons/pause-outline.svg";
    } else {
        document.getElementById("audio-player").pause();
        document.getElementById("icon-play").src = "./assets/images/icons/play-outline.svg";
    }
}

function checkPlayState() {
    if (document.getElementById("audio-player").paused) {
        document.getElementById("icon-play").src = "./assets/images/icons/play-outline.svg";
    } else {
        document.getElementById("icon-play").src = "./assets/images/icons/pause-outline.svg";
    }
}

function nextSong() {
    let playing = true;
    if (document.getElementById("audio-player").paused) {
        playing = false;
    }
    if (currentMusicIndex !== (songs.length - 1)) {
        currentMusicIndex++;
    }

    changeSong(playing);

}

function previousSong() {
    let playing = true;
    if (document.getElementById("audio-player").paused) {
        playing = false;
    }
    if (currentMusicIndex !== 0) {
        currentMusicIndex--;
    }

    changeSong(playing);

}

function changeSong(playing) {
    changeDescription()

    document.getElementById("body-music-page").style.background = "linear-gradient(120deg, " +
        songs[currentMusicIndex].gradient.start + ", " + songs[currentMusicIndex].gradient.end + ")";

    // document.getElementById("album-review").innerText = songs[currentMusicIndex].description;

    document.getElementById("genre").innerText = songs[currentMusicIndex].genre;
    if (songs[currentMusicIndex].genre === "Electronic") {
        document.getElementById("genre").style.textIndent = "1em";
    } else {
        document.getElementById("genre").style.textIndent = "3.5em";
    }

    document.getElementById("title").innerText = songs[currentMusicIndex].title;

    document.getElementById("album-art").src = songs[currentMusicIndex].albumFilePath;

    document.getElementById("audio-player").src = songs[currentMusicIndex].songFilePath;
    document.getElementById("audio-player").load();
    if (playing) {
        document.getElementById("audio-player").play();
        document.getElementById("icon-play").src = "./assets/images/icons/pause-outline.svg";
    } else {
        document.getElementById("icon-play").src = "./assets/images/icons/play-outline.svg";
    }
    pause = true;
    pauseTimes = 0;
    document.getElementById("title").scroll(0, 0);
}

function redirectToGenre() {
    const urlParams = new URLSearchParams(window.location.search)
    // Example: music_page.html?genre=Rock
    if (urlParams.has("genre")) {
        switch (urlParams.get("genre")) {
            case "Indie":
                currentMusicIndex = 0;
                break;
            case "Jazz":
                currentMusicIndex = 10;
                break;
            case "Electronic":
                currentMusicIndex = 12;
                break;
            case "Rock":
                currentMusicIndex = 14;
        }
    }
}

function redirectToGenreManual(genre) {
    switch (genre) {
        case "Indie":
            currentMusicIndex = 0;
            break;
        case "Jazz":
            currentMusicIndex = 10;
            break;
        case "Electronic":
            currentMusicIndex = 12;
            break;
        case "Rock":
            currentMusicIndex = 14;
    }
    changeSong(false);
}

//DOMContentLoaded - it fires when initial HTML document has been completely loaded
document.addEventListener('DOMContentLoaded', function () {
    // querySelector - it returns the element within the document that matches the specified selector
    let dropdown = document.querySelector('.dropdown');

    //addEventListener - attaches an event handler to the specified element.
    dropdown.addEventListener('click', function (event) {

        //event.stopPropagation() - it stops the bubbling of an event to parent elements, by preventing parent event handlers from being executed
        event.stopPropagation();

        //classList.toggle - it toggles between adding and removing a class name from an element
        dropdown.classList.toggle('is-active');
    });
});

let timer;

function startScroll() {
    // check if an interval has already been set up
    if (!timer) {
        timer = setInterval(scrollText, 100);
    }
}

let scrolled = 0;
let pause = true;
let pauseTimes = 0;

function scrollText() {
    let title = document.getElementById("title");
    if (!(title.scrollWidth > title.clientWidth)) {
        //cannot scroll, text fits container
        return;
    }
    if (pause) {
        if (pauseTimes > 25) {
            pause = false;
            pauseTimes = 0;
        } else if (pauseTimes === 20) {
            title.scroll(0, 0);
            scrolled = 1;
            pauseTimes++;
        } else {
            pauseTimes++;
        }
    } else {
        title.scrollBy(2, 0);
        if (title.scrollLeft === scrolled) {
            pause = true;
        } else {
            scrolled = title.scrollLeft;
        }
    }
}
