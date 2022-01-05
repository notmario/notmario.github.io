// get random item from list
function getRandomItem(list) {
    return list[Math.floor(Math.random() * list.length)];
}

// list of possible images

const fourohfourimages = [
    {
        src: './cooldog.jpg',
        alt: 'A cool dog',
        name: 'a cool dog',
    },
    {
        src: './thumbsup.jpg',
        alt: 'A thumbs up',
        name: 'a smiley face',
    },
    {
        src: './among3d.png',
        alt: 'Someone very sus',
        name: 'someone that is very sus',
    },
    {
        src: './banana.png',
        alt: 'Some bananas',
        name: 'some bananas',
    }
];

const chosenimage = getRandomItem(fourohfourimages);

document.getElementById("fourohfourimage").src = chosenimage.src;
document.getElementById("fourohfourimage").alt = chosenimage.alt;
document.getElementById("fourohfourimage").title = chosenimage.alt;

document.getElementById("fourohfourtext").innerHTML = document.getElementById("fourohfourtext").innerHTML.replace("{PICTURE SUBJECT}", chosenimage.name);