// Audio

const click_sound = document.getElementById ("repo_click");
const hover_sound = document.getElementById ("repo_hover");

const anchor = document.querySelectorAll ("a");
const mute_button = document.querySelector (".mute_switch");

const audios = document.querySelectorAll ("audio");

document.addEventListener ("DOMContentLoaded", function () { // ページを読み込んだ時
    const storageMute = localStorage.getItem ("isMuted");

    if (storageMute === "true") { // もしローカルストレージのmuteが真ならミュートにする
        audios.forEach (function (audio) {
            audio.volume = 0;
        });
    } else {
        audios.forEach ( function (audio) {
            audio.volume = 0.75;
            mute_button.classList.remove ("muted");
        });
    }

    click_sound.currentTime = 0;
    click_sound.play();
});

mute_button.addEventListener ("click", function() { // ミュートボタンをクリックした時
    mute_button.classList.toggle ("muted");
    const isMuted = mute_button.classList.contains ("muted");

    if (isMuted === true) {
        audios.forEach (function (audio) {
            audio.volume = 0;
        });
    } else {
        audios.forEach (function (audio) {
            audio.volume = 0.75;
        });
    }

    localStorage.setItem ("isMuted", isMuted)

    click_sound.currentTime = 0;
    click_sound.play();

    console.log ("ミュート状態：" + isMuted);
    console.log ("ローカルストレージ：" + localStorage.getItem ("isMuted"));
});

anchor.forEach (function (link) { // リンクにホバーした時
    link.addEventListener ("mouseenter", function() {
        hover_sound.currentTime = 0;
        hover_sound.play();
    });
});

mute_button.addEventListener ("mouseenter", function() { // ミュートボタンにホバーした時
        hover_sound.currentTime = 0;
        hover_sound.play();
});


// 敵の体力　武器の威力　貴重品の重さ moonとかレベル