// audio

const click_sound = document.getElementById ("repo_click");
const hover_sound = document.getElementById ("repo_hover");

const anchor = document.querySelectorAll ("a");

anchor.forEach (function (link) {
    link.addEventListener ("mouseenter", function() {
        hover_sound.currentTime = 0;
        hover_sound.volume = 0.75;
        hover_sound.play();
    });
});

document.addEventListener ("DOMContentLoaded", function() {
    click_sound.volume = 0.75;
    click_sound.play();
})