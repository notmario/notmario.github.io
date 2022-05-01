// document.getElementById("gamesButton").addEventListener("click", () => {
//     // transition intro and games
//     document.getElementById("intro").classList.remove("spinIn");
//     document.getElementById("intro").classList.add("spinOut");
//     document.getElementById("intro").classList.add("hidden");
//     document.getElementById("games").classList.remove("hidden");
//     document.getElementById("games").classList.remove("spinOutNormal");
//     document.getElementById("games").classList.add("spinInNormal");
// });

// document.getElementById("backFromGamesButton").addEventListener("click", () => {
//     // transition intro and games
//     document.getElementById("games").classList.remove("spinInNormal");
//     document.getElementById("games").classList.add("spinOutNormal");
//     document.getElementById("games").classList.add("hidden");
//     document.getElementById("intro").classList.remove("hidden");
//     document.getElementById("intro").classList.remove("spinOut");
//     document.getElementById("intro").classList.add("spinIn");
// });

// document.getElementById("otherStuffButton").addEventListener("click", () => {
//     // transition intro and games
//     document.getElementById("intro").classList.remove("spinIn");
//     document.getElementById("intro").classList.add("spinOut");
//     document.getElementById("intro").classList.add("hidden");
//     document.getElementById("otherStuff").classList.remove("hidden");
//     document.getElementById("otherStuff").classList.remove("spinOutNormal");
//     document.getElementById("otherStuff").classList.add("spinInNormal");
// });

// document.getElementById("backFromOtherStuffButton").addEventListener("click", () => {
//     // transition intro and games
//     document.getElementById("otherStuff").classList.remove("spinInNormal");
//     document.getElementById("otherStuff").classList.add("spinOutNormal");
//     document.getElementById("otherStuff").classList.add("hidden");
//     document.getElementById("intro").classList.remove("hidden");
//     document.getElementById("intro").classList.remove("spinOut");
//     document.getElementById("intro").classList.add("spinIn");
// });

let darkMode = localStorage.getItem("darkMode");
if (darkMode === null) {
    darkMode = false;
}

// add class to body
if (darkMode) {
    document.body.classList.add("dark");
}

document.getElementById("darkButton").addEventListener("click", () => {
    if (darkMode) {
        document.body.classList.remove("dark");
        darkMode = false;
    } else {
        document.body.classList.add("dark");
        darkMode = true;
    }
    localStorage.setItem("darkMode", darkMode);
});