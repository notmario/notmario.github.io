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


let things = [
  {
    "name": "among dash",
    "url": "https://www.notmario.net/amongdash/",
    "img": "amongdash.png",
    "desc": "A thrilling endless runner where you control an among us. <br> <br>Deluxe update out now!",
    tags: ["good","funny","game","nonexternal"]
  },
  {
    "name": "Crame",
    "url": "https://www.notmario.net/crame/",
    "img": "crame.png",
    "desc": "An engaging game where you kill the waves of <s>among us</s> dragons.",
    tags: ["good","game","nonexternal"]
  },
  {
    "name": "Wardle",
    "url": "https://www.notmario.net/wardle/",
    "img": "wardle.png",
    "desc": "A totally original word game yes.",
    tags: ["good","game","nonexternal"]
  },
  {
    "name": "Donut Clicker Deluxe",
    "url": "https://donut-clicker-deluxe.web.app/",
    "img": "donutclickerdeluxe.png",
    "desc": "A game about making donuts, probably.<br>Collab with StilltheSmartie",
    tags: ["good","game","external"]
  },
  {
    "name": "Start Page",
    "url": "https://www.notmario.net/StartPage/",
    "img": "startpage.png",
    "desc": "A feature-rich start page.",
    tags: ["good","app","nonexternal"]
  },
  {
    "name": "Donut Clicker",
    "url": "https://www.notmario.net/DonutClicker/",
    "img": "donutclicker.png",
    "desc": "A game about making as many donuts as possible.",
    tags: ["game","nonexternal"],
  },
  {
    "name": "breakformer",
    "url": "https://www.notmario.net/breakformer/",
    "img": "breakformer.png",
    "desc": "A classic game, but with a new twist.",
    tags: ["game","nonexternal"],
  },
  {
    "name": "platformer",
    "url": "https://www.notmario.net/platformer/",
    "img": "platformer.png",
    "desc": "A simple game about jumping around.",
    tags: ["game","nonexternal"],
  },
  {
    "name": "Dam Builder Simulator",
    "url": "https://www.notmario.net/dambuildersimulator/",
    "img": "dambuildersimulator.png",
    "desc": "Build dams. Profit.",
    tags: ["funny","short","game","nonexternal"],
  },
  {
    "name": "Falling",
    "url": "https://www.notmario.net/falling/",
    "img": "falling.png",
    "desc": "Do you fall?",
    tags: ["short","game","nonexternal"],
  },
  {
    "name": "Walling",
    "url": "https://www.notmario.net/walling/",
    "img": "walling.png",
    "desc": "Do you wall?",
    tags: ["short","game","nonexternal"],
  },
  {
    "name": "kindachess",
    "url": "https://www.notmario.net/kindachess/",
    "img": "kindachess.png",
    "desc": "A version of Chess with infinite possibilities.",
    tags: ["good","game","nonexternal"],
  },
  {
    "name": "among clicker",
    "url": "https://among-clicker.web.app/",
    "img": "amongclicker.png",
    "desc": "A clicker game based on Among Us. (external website)",
    tags: ["funny","game","external"],
  },
  {
    "name": "twonote",
    "url": "https://www.notmario.net/twonote/",
    "img": "twonote.png",
    "desc": "Take notes, and that's it.",
    tags: ["app","nonexternal"],
  },
  {
    "name": "btd6 randomiser",
    "url": "https://www.notmario.net/btd6randomiser/",
    "img": "bloonsrandomiser.png",
    "desc": "A challenge randomiser for Bloons Tower Defense 6.",
    tags: ["app","nonexternal"],
  },
  {
    "name": "todo",
    "url": "https://www.notmario.net/todo/",
    "img": "todo.png",
    "desc": "A todo application",
    tags: ["app","nonexternal"],
  }
]

let tagsRequired = {
  good: false,
  funny: false,
  game: false,
  external: false,
  nonexternal: false,
  app: false,
  short: false,
}

let clickTagButton = (tag) => {
  tagsRequired[tag] = !tagsRequired[tag]
  updateThings()
}

let updateThings = () => {
  // first clear "games" div
  document.querySelector(".games").innerHTML = ""
  // then add all the games that match the tags
  for (let i = 0; i < things.length; i++) {
    let thing = things[i]
    let tags = thing.tags
    let add = true;
    Object.keys(tagsRequired).forEach(element => {
      // disqualify if tag is required
      if (tagsRequired[element] && !tags.includes(element)) {
        add = false
      }
    });
    if (add) {
      document.querySelector(".games").innerHTML += `
        <div class="game">
          <a href="${thing.url}">
            <img src="${thing.img}">
            <h2>${thing.name}</h2> 
            <p>${thing.desc}</p>
          </a>
        </div>
      `
    }
  }
}

updateThings();

Object.keys(tagsRequired).forEach(element => {
  document.getElementById(element).addEventListener("change", () => {
    clickTagButton(element)
  } ) 
})