let baseurl = "https://www.notmario.world/";

let stuff = [
    {
        "name": "games",
        "icon": "folder.png",
        "contents": [
            {
                "name": "Wardle",
                "url": baseurl + "wardle/",
                "icon": "new/wardle.png",
                "description": "wordle at home"
            },
            {
                "name": "Choos",
                "url": baseurl + "choos/",
                "icon": "choos.png",
                "description": "chess with different armies"
            },
            {
                "name": "Donut Clicker Deluxe",
                "url": "https://donut-clicker-deluxe.web.app/",
                "icon": "new/donutclickerdeluxe.png",
                "description": "exploit the economy to get rich"
            }, 
            {
                "name": "Dam Builder Simulator",
                "url": baseurl + "dambuildersimulator/",
                "icon": "dambuildersimulator.png",
                "description": "build dams (this is a Very Good Game™)"
            },
            {
                "name": "shard game*",
                "url": baseurl + "shardgame/",
                "icon": "shardgame.png",
                "description": "customisable randomised printable card game"
            },
            {
                "name": "more coming soon hopefully"
            },
            {
                "name": "other",
                "icon": "folder.png",
                "contents": [
                    {
                        "name": "among dash",
                        "url": baseurl + "amongdash/",
                        "icon": "new/amongdash.png",
                        "description": "what do you think?"
                    },
                    {
                        "name": "Crame",
                        "url": baseurl + "crame/",
                        "icon": "new/crame.png",
                        "description": "realistic crab simulator"
                    },
                    {
                        "name": "kindachess",
                        "url": baseurl + "kindachess/",
                        "icon": "kindachess.png",
                        "description": "chess but randomised"
                    },
                    {
                        "name": "Donut Clicker",
                        "url": baseurl + "DonutClicker/",
                        "icon": "donutclicker.png",
                        "description": "click donuts"
                    },
                    {
                        "name": "breakformer",
                        "url": baseurl + "breakformer/",
                        "icon": "breakformer.png",
                    },
                    {
                        "name": "platformer",
                        "url": baseurl + "platformer/",
                        "icon": "platformer.png",
                    },
                    {
                        "name": "Falling",
                        "url": baseurl + "falling/",
                        "icon": "falling.png",
                    },
                        {
                        "name": "Walling",
                        "url": baseurl + "walling/",
                        "icon": "walling.png",
                        },
                    {
                        "name": "among clicker",
                        "url": "https://among-clicker.web.app/",
                        "icon": "amongclicker.png",
                    },
                    {
                        "name": "TVLSOCTT",
                        "url": baseurl + "tvlsoctt/",
                        "icon": "christmas.png",
                    },
                ]
            }
        ]
    },
    {
        "name": "other",
        "icon": "folder.png",
        "contents": [
            {
                "name": "twonote",
                "url": baseurl + "twonote/",
                "icon": "twonote.png",
                "description": "notes taking application"
            },
            {
                "name": "todo",
                "url": baseurl + "todo/",
                "icon": "todo.png",
                "description": "do some todos"
            },
            {
                "name": "Start Page",
                "url": baseurl + "StartPage/",
                "icon": "new/startpage.png",
                "description": "a browser start page"
            },
        ]
    }
]

let mainfolder = document.querySelector("#mainfolder");

function addContents(elem, contents) {
    let celem = document.createElement("div");
    celem.classList.add("contents");
    for (c of contents) {
        if (c.contents) {
            let folder = document.createElement("div");
            folder.classList.add("folder");
            folder.innerHTML = `
                ${c.name}
            `;
            celem.appendChild(folder);
            addContents(folder, c.contents);
        } else if (c.url) {
            let link = document.createElement("a");
            link.href = c.url;
            link.target = "_blank";
            link.innerHTML = `
                ${c.name}<br/>
            `;
            celem.appendChild(link);
            if (c.description) {
                let desc = document.createElement("span");
                desc.classList.add("description");
                desc.innerHTML = `
                &nbsp;&nbsp;${c.description}<br/>
                `;
                celem.appendChild(desc);
            }
        } else {
            let link = document.createElement("a");
            link.innerHTML = `
                ${c.name}<br/>
            `;
            celem.appendChild(link);
        
        }
    }
    elem.after(celem);
}

addContents(mainfolder, stuff);

document.querySelectorAll(".folder").forEach((folder) => {
    folder.addEventListener("click", () => {
        folder.classList.toggle("open");
    })
})