const level_button = document.querySelector (".level_toggle");
const level_wrap = document.querySelector (".level_wrap");
const level_state = document.querySelector (".level_state");
const level_number = document.querySelector (".level_number");

level_button.addEventListener ("click", () => {
    level_wrap.classList.toggle ("next");
    level_number.classList.toggle ("next");

    if (level_wrap.classList.contains ("next")) {
        level_state.textContent = "next";
    } else {
        level_state.textContent ="current";
    }

    console.log ("click");
});