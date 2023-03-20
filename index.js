// open window function
let currently_open_windows = []

let open_window = (title, content, icon, id, closable = true)=>{
    // add window div
    let window_div = document.createElement("div");
    window_div.classList.add("window");
    if (currently_open_windows.includes(id)) {
        return;
    }
    currently_open_windows.push(id);
    document.querySelector('.windows').appendChild(window_div);
    // title
    let title_div = document.createElement("div");
    title_div.classList.add("title");
    title_div.innerHTML = title;
    window_div.appendChild(title_div);
    // icon
    let icon_img = document.createElement("img");
    icon_img.classList.add("icon");
    icon_img.src = icon;
    title_div.insertBefore(icon_img, title_div.firstChild);
    if (closable) {

        let close_button = document.createElement("button");
        close_button.classList.add("close");
        close_button.innerHTML = "X";
        close_button.addEventListener("click", ()=>{
            window_div.remove();
            taskbar_button.remove();
            currently_open_windows = currently_open_windows.filter((item) => item !== id);
        });

        title_div.appendChild(close_button);

    }

    // content
    let content_div = document.createElement("div");
    content_div.classList.add("content");
    content_div.innerHTML = content;
    window_div.appendChild(content_div);

    // position
    window_div.style.transform = "translate(1rem,1rem)";

    // can drag using title bar
    let drag = false;
    let drag_start = {x: 0, y: 0};
    let drag_offset = {x: 0, y: 0};
    title_div.addEventListener("mousedown", (e) => {
        drag = true;
        // get current transform
        let transform = window_div.style.transform;
        // get x and y
        let x = transform.split(",")[0].split("(")[1];
        let y = transform.split(",")[1].split(")")[0];

        drag_start.x = parseFloat(x);
        drag_start.y = parseFloat(y);
        drag_offset.x = window_div.offsetLeft - e.clientX;
        drag_offset.y = window_div.offsetTop - e.clientY;

        console.log("drag start");
    });

    document.addEventListener("mouseup", (e) => {
        drag = false;

        console.log("drag end");
    });

    document.addEventListener("mousemove", (e) => {
        if (drag) {
            // keep on screen
            let x = e.clientX + drag_offset.x + drag_start.x;
            let y = e.clientY + drag_offset.y + drag_start.y;
            if (x < 0) {
                x = 0;
            }
            if (y < 0) {
                y = 0;
            }
            if (x + window_div.offsetWidth > window.innerWidth) {
                x = window.innerWidth - window_div.offsetWidth;
            }
            if (y + window_div.offsetHeight > window.innerHeight) {
                y = window.innerHeight - window_div.offsetHeight;
            }
            window_div.style.transform = `translate(${x}px,${y}px)`;
        }
    });

    let bring_to_front = () => {
        // bring to front
        let windows = document.querySelectorAll(".window");
        if (window_div.classList.contains("active")) return;
        for (let i = 0; i < windows.length; i++) {
            if (windows[i] === window_div) continue;
            windows[i].style.zIndex = 0;
            windows[i].classList.remove("active");
        }
        window_div.style.zIndex = 1;
        window_div.classList.add("active");
    }

    // bring to front on click
    window_div.addEventListener("mousedown", (e) => {
        bring_to_front();
    });

    // bring to front
    bring_to_front();

    // taskbar button
    let taskbar_button = document.createElement("div");
    taskbar_button.classList.add("taskbar-button");
    // image
    let taskbar_button_img = document.createElement("img");
    taskbar_button_img.src = icon;
    taskbar_button.appendChild(taskbar_button_img);

    // add to taskbar
    document.querySelector(".taskbar").appendChild(taskbar_button);
    
    // bring to front on click
    taskbar_button.addEventListener("click", (e) => {
        bring_to_front();
    });

    return window_div;
}

open_window("Hello!","<textarea>Hey! Here's a bunch of things I made.\nMost of them are pretty lazy, but oh well.\nHave fun!</textarea>", "thumbsup.jpg", "intro");

// desktop icons
let add_desktop_icon = (name, icon, onclick) => {
    let desktop_icon = document.createElement("div");
    desktop_icon.classList.add("desktop-icon");
    // image
    let desktop_icon_img = document.createElement("img");
    desktop_icon_img.src = icon;
    desktop_icon.appendChild(desktop_icon_img);
    // text
    let desktop_icon_text = document.createElement("div");
    desktop_icon_text.classList.add("desktop-icon-text");
    desktop_icon_text.innerText = name;
    desktop_icon.appendChild(desktop_icon_text);
    // add to desktop
    document.querySelector(".desktop").appendChild(desktop_icon);

    // on click
    desktop_icon.addEventListener("click", (e) => {
        onclick();
    });
}

let add_stuff_to_folder = (div, stuff) => {
    let icons = document.createElement("div");
    icons.classList.add("icons");
    for (let i = 0; i < stuff.length; i++) {
        let item = stuff[i];
        let icon = document.createElement("div");
        icon.classList.add("icon");
        // image
        let icon_img = document.createElement("img");
        icon_img.src = item.icon;
        icon.appendChild(icon_img);
        // text
        let icon_text = document.createElement("div");
        icon_text.classList.add("icon-text");
        icon_text.innerText = item.name;
        icon.appendChild(icon_text);
        // add to icons
        icons.appendChild(icon);
        // on click
        icon.addEventListener("click", (e) => {
            item.onclick();
        });
    }
    div.appendChild(icons);
}


add_desktop_icon("Stuff", "folder.png", () => {
    let wd = open_window("Stuff", "I've made a bunch of stuff (because i was bored). Here are some of them.", "folder.png", "stuff-folder");

    let stuff = [
        {
            "name": "among dash",
            "url": "https://notmario.github.io/amongdash/",
            "icon": "new/amongdash.png",
        },
        {
            "name": "Crame",
            "url": "https://notmario.github.io/crame/",
            "icon": "new/crame.png",
        },
        {
            "name": "Wardle",
            "url": "https://notmario.github.io/wardle/",
            "icon": "new/wardle.png",
        },
        {
            "name": "Choos",
            "url": "https://notmario.github.io/choos/",
            "icon": "choos.png",
        },
        {
            "name": "Donut Clicker Deluxe",
            "url": "https://donut-clicker-deluxe.web.app/",
            "icon": "new/donutclickerdeluxe.png",
        }, 
        {
            "name": "Start Page",
            "url": "https://notmario.github.io/StartPage/",
            "icon": "new/startpage.png",
        },
        {
            "name": "Dam Builder Simulator",
            "url": "https://notmario.github.io/dambuildersimulator/",
            "icon": "dambuildersimulator.png",
        },
        {
            "name": "Other",
            "icon": "folder.png",
            "onclick": () => {
                // open other folder
                let wd = open_window("Other Things", "More things. These ones are lower quality / less funny.", "folder.png", "other-things");
                let stuff = [
                    {
                        "name": "kindachess",
                        "url": "https://notmario.github.io/kindachess/",
                        "icon": "kindachess.png",
                    },
                    {
                        "name": "Donut Clicker",
                        "url": "https://notmario.github.io/DonutClicker/",
                        "icon": "donutclicker.png",
                    },
                    {
                        "name": "breakformer",
                        "url": "https://notmario.github.io/breakformer/",
                        "icon": "breakformer.png",
                    },
                    {
                        "name": "platformer",
                        "url": "https://notmario.github.io/platformer/",
                        "icon": "platformer.png",
                    },
                    {
                        "name": "Falling",
                        "url": "https://notmario.github.io/falling/",
                        "icon": "falling.png",
                    },
                        {
                        "name": "Walling",
                        "url": "https://notmario.github.io/walling/",
                        "icon": "walling.png",
                        },
                    {
                        "name": "among clicker",
                        "url": "https://among-clicker.web.app/",
                        "icon": "amongclicker.png",
                    },
                    {
                        "name": "TVLSOCTT",
                        "url": "https://notmario.github.io/tvlsoctt/",
                        "icon": "christmas.png",
                    },
                    {
                        "name": "twonote",
                        "url": "https://notmario.github.io/twonote/",
                        "icon": "twonote.png",
                    },
                    {
                        "name": "todo",
                        "url": "https://notmario.github.io/todo/",
                        "icon": "todo.png",
                    },
                ]
                // map stuff with url to onclick
                stuff = stuff.map((item) => {
                    if (!item.url) return item;
                    return {
                        ...item,
                        "onclick": () => {
                            window.open(item.url);
                        }
                    }
                });

                add_stuff_to_folder(wd, stuff);

            }

        }
    ]
    // map stuff with url to onclick
    stuff = stuff.map((item) => {
        if (!item.url) return item;
        return {
            ...item,
            "onclick": () => {
                window.open(item.url);
            }
        }
    });

    add_stuff_to_folder(wd, stuff);
});

add_desktop_icon("README", "notepad.png", () => {
    open_window("README", "<textarea>among us!!!</textarea>", "notepad.png", "readme", true);
})

// document.querySelector(".tandc").addEventListener("click", (e) => {
//     if (!e.shiftKey || !e.ctrlKey) return;

//     document.querySelectorAll(".hidden").forEach((element) => {
//         element.classList.remove("hidden");
//     });
// })

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

// let darkMode = localStorage.getItem("darkMode");
// if (darkMode === null) {
//     darkMode = false;
// }

// // add class to body
// if (darkMode) {
//     document.body.classList.add("dark");
// }

// document.getElementById("darkButton").addEventListener("click", () => {
//     if (darkMode) {
//         document.body.classList.remove("dark");
//         darkMode = false;
//     } else {
//         document.body.classList.add("dark");
//         darkMode = true;
//     }
//     localStorage.setItem("darkMode", darkMode);
// });


{/* <div class="game">
    <a href="https://www.notmario.net/amongdash/">
        <img src="amongdash.png" alt="among dash">
        <h2>among dash</h2>
        <p>A thrilling endless runner where you control an among us. <br> <br>Deluxe update out now!</p>
    </a>
</div>
<div class="game">
    <a href="https://www.notmario.net/crame/">
        <img src="crame.png" alt="Crame">
        <h2>Crame</h2>
        <p>An engaging game where you kill the waves of <s>among us</s> dragons.</p>
    </a>
</div>
<div class="game">
    <a href="https://www.notmario.net/wardle/">
        <img src="wardle.png" alt="Wardle">
        <h2>wardle</h2>
        <p>A totally original word game yes.</p>
    </a>
</div>
<div class="game">
    <a href="https://donut-clicker-deluxe.web.app/">
        <img src="donutclickerdeluxe.png" alt="Donut Clicker">
        <h2>donut clicker deluxe</h2>
        <p>A game about making donuts, probably.<br>Collab with StilltheSmartie</p>
    </a>
</div>
<div class="game">
    <a href="https://www.notmario.net/StartPage/">
        <img src="startpage.png" alt="start page">
        <h2>start page</h2>
        <p>A feature-rich start page.</p>
    </a>
</div>
<div class="game">
    <a href="https://www.notmario.net/DonutClicker/">
        <img src="donutclicker.png" alt="Donut Clicker">
        <h2>donut clicker</h2>
        <p>A game about making as many donuts as possible.</p>
    </a>
</div>
<div class="game">
    <a href="https://www.notmario.net/breakformer/">
        <img src="breakformer.png" alt="breakformer">
        <h2>breakformer</h2>
        <p>A classic game, but with a new twist.</p>
    </a>
</div>
<div class="game">
    <a href="https://www.notmario.net/platformer/">
        <img src="platformer.png" alt="platformer">
        <h2>platformer</h2>
        <p>A simple game about jumping around.</p>
    </a>
</div>
<div class="game">
    <a href="https://www.notmario.net/dambuildersimulator/">
        <img src="dambuildersimulator.png" alt="Dam Builder Simulator">
        <h2>Dam Builder Simulator</h2>
        <p>Build dams. Profit.</p>
    </a>
</div>
<div class="game">
    <a href="https://www.notmario.net/falling/">
        <img src="falling.png" alt="Falling">
        <h2>Falling</h2>
        <p>Do you fall?</p>
    </a>
</div>
<div class="game">
    <a href="https://www.notmario.net/walling/">
        <img src="walling.png" alt="Walling">
        <h2>Walling</h2>
        <p>Do you wall?</p>
    </a>
</div>
<div class="game">
    <a href="https://www.notmario.net/kindachess/">
        <img src="kindachess.png" alt="kindachess">
        <h2>kindachess</h2>
        <p>A version of Chess with infinite possibilities.</p>
    </a>
</div>
<div class="game">
    <a href="https://among-clicker.web.app/">
        <img src="amongclicker.png" alt="among clicker">
        <h2>among clicker</h2>
        <p>A clicker game based on Among Us. (external website)</p>
    </a>
</div>
<div class="game">
    <a href="https://www.notmario.net/twonote/">
        <img src="twonote.png" alt="twonote">
        <h2>TwoNote</h2>
        <p>Take notes, and that's it.</p>
    </a>
</div>

<div class="game">
    <a href="https://www.notmario.net/btd6randomiser/">
        <img src="bloonsrandomiser.png" alt="btd6 randomiser">
        <h2>btd6 randomiser</h2>
        <p>A challenge randomiser for Bloons Tower Defense 6.</p>
    </a>
</div>
<div class="game">
    <a href="https://www.notmario.net/todo/">
        <img src="todo.png" alt="todo">
        <h2>todo</h2>
        <p>A todo application</p>
    </a>
</div> */}


// let mainthings = [
//   {
//     "name": "among dash",
//     "url": "https://www.notmario.net/amongdash/",
//     "img": "amongdash.png",
//     "desc": "A thrilling endless runner where you control an among us.",
//     tags: ["good","funny","game","nonexternal"]
//   },
//   {
//     "name": "Crame",
//     "url": "https://www.notmario.net/crame/",
//     "img": "crame.png",
//     "desc": "An engaging game where you kill the waves of dragons.",
//     tags: ["good","game","nonexternal"]
//   },
//   {
//     "name": "Wardle",
//     "url": "https://www.notmario.net/wardle/",
//     "img": "wardle.png",
//     "desc": "A totally original word game yes.",
//     tags: ["good","game","nonexternal"]
//   },
//   {
//     "name": "Donut Clicker Deluxe",
//     "url": "https://donut-clicker-deluxe.web.app/",
//     "img": "donutclickerdeluxe.png",
//     "desc": "A game about making donuts, probably.\nCollab with StilltheSmartie",
//     tags: ["good","game","external"]
//   }, 
//   {
//     "name": "Start Page",
//     "url": "https://www.notmario.net/StartPage/",
//     "img": "startpage.png",
//     "desc": "A feature-rich start page.",
//     tags: ["good","app","nonexternal"]
//   },
//   {
//     "name": "Dam Builder Simulator",
//     "url": "https://www.notmario.net/dambuildersimulator/",
//     "img": "dambuildersimulator.png",
//     "desc": "Build dams. Profit.",
//     tags: ["funny","short","game","nonexternal"],
//   },
//   {
//     "name": "kindachess",
//     "url": "https://www.notmario.net/kindachess/",
//     "img": "kindachess.png",
//     "desc": "A version of Chess with infinite possibilities.",
//     tags: ["good","game","nonexternal"],
//   },
//   {
//     "name": "Donut Clicker",
//     "url": "https://www.notmario.net/DonutClicker/",
//     "img": "donutclicker.png",
//     "desc": "A game about making as many donuts as possible.",
//     tags: ["game","nonexternal"],
//   },
//   {
//     "name": "breakformer",
//     "url": "https://www.notmario.net/breakformer/",
//     "img": "breakformer.png",
//     "desc": "A classic game, but with a new twist.",
//     tags: ["game","nonexternal"],
//   },
//   {
//     "name": "platformer",
//     "url": "https://www.notmario.net/platformer/",
//     "img": "platformer.png",
//     "desc": "A simple game about jumping around.",
//     tags: ["game","nonexternal"],
//   },
//   {
//     "name": "Falling",
//     "url": "https://www.notmario.net/falling/",
//     "img": "falling.png",
//     "desc": "Do you fall?",
//     tags: ["short","game","nonexternal"],
//   },
//   {
//     "name": "Walling",
//     "url": "https://www.notmario.net/walling/",
//     "img": "walling.png",
//     "desc": "Do you wall?",
//     tags: ["short","game","nonexternal"],
//   },
//   {
//     "name": "among clicker",
//     "url": "https://among-clicker.web.app/",
//     "img": "amongclicker.png",
//     "desc": "A clicker game based on Among Us. (external website)",
//     tags: ["funny","game","external"],
//   },
//   {
//     "name": "TVLSOCTT",
//     "url": "https://www.notmario.net/tvlsoctt/",
//     "img": "christmas.png",
//     "desc": "The Very Lazy Set of Christmas Themed Things.",
//     tags: ["nonexternal"],
//   },
//   {
//     "name": "twonote",
//     "url": "https://www.notmario.net/twonote/",
//     "img": "twonote.png",
//     "desc": "Take notes, and that's it.",
//     tags: ["app","nonexternal"],
//   },
//   {
//     "name": "btd6 randomiser",
//     "url": "https://www.notmario.net/btd6randomiser/",
//     "img": "bloonsrandomiser.png",
//     "desc": "A challenge randomiser for Bloons Tower Defense 6.",
//     tags: ["app","nonexternal"],
//   },
//   {
//     "name": "todo",
//     "url": "https://www.notmario.net/todo/",
//     "img": "todo.png",
//     "desc": "A todo application",
//     tags: ["app","nonexternal"],
//   },
// ]


// let misc = [
//   {
//     "name": "Back",
//     "url": "folder(mainthings)",
//     "img": "new/folder.png",
//     "desc": "Go back",
//     tags: [],
//   },
//   {
//     "name": "The Button",
//     "url": "thebutton",
//     "img": "new/calc.png",
//     "desc": "You've pressed this <b>"+(localStorage.getItem("homepagebuttonpresses")||0)+"</b> time"+(localStorage.getItem("homepagebuttonpresses") === "1" ? "" : "s")+".",
//     tags: [],
//   }
// ]
// if (localStorage.getItem("homepagebuttonpresses") >= 1) {
//   misc.push({
//     "name": "The Balance",
//     "url": "",
//     "img": "new/calc.png",
//     "desc": "You have <b>$"+(localStorage.getItem("homepagedollars")||0)+"</b> dollar"+(localStorage.getItem("homepagedollars") === "1" ? "" : "s")+".<br/>You get <b>$"+(localStorage.getItem("homepagedollarsperclick")||1)+"</b> dollar"+(localStorage.getItem("homepagedollarsperclick") === "1" ? "" : "s")+" per click.",
//     tags: [],
//   })
//   misc.push({
//     "name": "The Upgrader",
//     "url": "theupgrader",
//     "img": "new/calc.png",
//     "desc": "Costs <b>$50</b> dollars.<br/><b>+1</b> dollar per click.",
//     tags: [],
//   })
//   misc.push({
//     "name": "The Reward",
//     "url": "thereward",
//     "img": "new/calc.png",
//     "desc": "Costs <b>$1000000000000000000</b>.<br/>You get the reward.",
//     tags: [],
//   })
// }

// let tagsRequired = {
//   good: false,
//   funny: false,
//   game: false,
//   external: false,
//   nonexternal: false,
//   app: false,
//   short: false,
// }

// let clickTagButton = (tag) => {
//   tagsRequired[tag] = !tagsRequired[tag]
//   updateThings()
// }

// let click = (a)=>{
//   if (a === "") {} else
//   if (a.indexOf("folder(") !== -1) {
//     let folder = a.substring(7, a.length-1)
//     if (folder == "mainthings") {
//       updateThings(mainthings)
//     } else if (folder == "otherthings") {
//       updateThings(otherthings)
//     } else if (folder == "misc") {
//       updateThings(misc)
//     }
//   } else if (a === "thebutton") {
//     localStorage.setItem("homepagebuttonpresses", (parseInt(localStorage.getItem("homepagebuttonpresses"))||0)+1);
//     localStorage.setItem("homepagedollars", (parseInt(localStorage.getItem("homepagedollars"))||0)+parseInt(localStorage.getItem("homepagedollarsperclick"))||1);
//     if (localStorage.getItem("homepagebuttonpresses") === "1") {
//       localStorage.setItem("homepagedollarsperclick", 1);
//       misc.push({
//         "name": "The Balance",
//         "url": "",
//         "img": "new/calc.png",
//         "desc": "You have <b>$"+(localStorage.getItem("homepagedollars")||0)+"</b> dollar"+(localStorage.getItem("homepagedollars") === "1" ? "" : "s")+".<br/>You get <b>$"+(localStorage.getItem("homepagedollarsperclick")||1)+"</b> dollar"+(localStorage.getItem("homepagedollarsperclick") === "1" ? "" : "s")+" per click.",
//         tags: [],
//       })
//       misc.push({
//         "name": "The Upgrader",
//         "url": "theupgrader",
//         "img": "new/calc.png",
//         "desc": "Cost <b>$50</b> dollars. <b>+1</b> dollar per click.",
//         tags: [],
//       })
//       misc.push({
//         "name": "The Reward",
//         "url": "thereward",
//         "img": "new/calc.png",
//         "desc": "Costs <b>$1000000000000000000</b>.<br/>You get the reward.",
//         tags: [],
//       })
//     }
//     misc[1].desc = "You've pressed this <b>"+(localStorage.getItem("homepagebuttonpresses")||0)+"</b> time"+(localStorage.getItem("homepagebuttonpresses") === "1" ? "" : "s")+"."
//     misc[2].desc = "You have <b>$"+(localStorage.getItem("homepagedollars")||0)+"</b> dollar"+(localStorage.getItem("homepagedollars") === "1" ? "" : "s")+".<br/>You get <b>$"+(localStorage.getItem("homepagedollarsperclick")||1)+"</b> dollar"+(localStorage.getItem("homepagedollarsperclick") === "1" ? "" : "s")+" per click.";
//     updateThings(misc)
//   } else if (a === "theupgrader") {
//     if (localStorage.getItem("homepagedollars") >= 50) {
//       localStorage.setItem("homepagedollars", (parseInt(localStorage.getItem("homepagedollars"))||0)-50);
//       localStorage.setItem("homepagedollarsperclick", (parseInt(localStorage.getItem("homepagedollarsperclick"))||1)+1);
//       misc[1].desc = "You've pressed this <b>"+(localStorage.getItem("homepagebuttonpresses")||0)+"</b> time"+(localStorage.getItem("homepagebuttonpresses") === "1" ? "" : "s")+"."
//       misc[2].desc = "You have <b>$"+(localStorage.getItem("homepagedollars")||0)+"</b> dollar"+(localStorage.getItem("homepagedollars") === "1" ? "" : "s")+".<br/>You get <b>$"+(localStorage.getItem("homepagedollarsperclick")||1)+"</b> dollar"+(localStorage.getItem("homepagedollarsperclick") === "1" ? "" : "s")+" per click.";
//       updateThings(misc)
//     }
//   } else if (a === "thereward") {
//     if (localStorage.getItem("homepagedollars") >= 1000000000000000000n)
//       window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ") // heheheha
//     else
//       alert("You are too poor.")
//   } else {
//     window.open(a)
//   }
// }

// let updateThings = (things) => {
//   // first clear "games" div
//   document.querySelector(".games").innerHTML = ""
//   // then add all the games that match the tags
//   for (let i = 0; i < things.length; i++) {
//     let thing = things[i]
//     let tags = thing.tags
//     let add = true;
//     Object.keys(tagsRequired).forEach(element => {
//       // disqualify if tag is required
//       if (tagsRequired[element] && !tags.includes(element)) {
//         add = false
//       }
//     });
//     if (add) {
//       document.querySelector(".games").innerHTML += `
//         <div class="game">
//           <a>
//             <img src="${thing.img}">
//             <h2>${thing.name}</h2> 
//             <h3>${thing.desc}</h3> 
//           </a>
//         </div>
//       `
//     }
//   }
//   // add event listeners
//   document.querySelectorAll(".game").forEach((element, index) => {
//     element.addEventListener("click", () => {
//       click(things[index].url)
//     })
//   })
// }

// updateThings(mainthings);

// Object.keys(tagsRequired).forEach(element => {
//   document.getElementById(element).addEventListener("change", () => {
//     clickTagButton(element)
//   } ) 
// })

// add games to the "games" div
// for (let i = 0; i < mainthings.length; i++) {
//   // add game
//   const game = document.createElement("div");
//   game.classList.add("game");
//   if (mainthings[i].url === "") {
//     game.classList.add("disabled");
//   }
//   if (mainthings[i].tags.includes("good")) {
//     game.classList.add("big");
//   }
//   game.innerHTML = `
//     <a>
//       <img src="${mainthings[i].img}">
//       <h2>${mainthings[i].name}</h2>
//       <h3>${mainthings[i].desc}</h3>
//     </a>
//   `;
//   document.querySelector(".games").appendChild(game);
// }
