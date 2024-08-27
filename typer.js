function rand() {
    const characters = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
    const charactersLength = characters.length;
    return characters.charAt(Math.floor(Math.random() * charactersLength));
}

function typeTextFunc(id, text, index) {
    const textElement = document.getElementById(id);

    if (index > 0) textElement.classList.remove("hidden");


    if (index < text.length) {
        textElement.textContent = text.slice(0, index);
        textElement.textContent = text.slice(0, index- 1) + rand();

        setTimeout(function() { typeTextFunc(id, text, index + 1) }, 20); // speed
    }
    else {
        textElement.textContent = text;
    }
}

function typeText(id, delay) {
    const textElement = document.getElementById(id);
    const text = textElement.textContent;
    textElement.textContent = "";

    setTimeout(function(){ typeTextFunc(id, text, 0) }, delay);
}

function replaceAt(str, index, replacement) {
    return str.substring(0, index) + replacement + str.substring(index + replacement.length);
  }

function flickerChar(element, charindex, numTimes, accum, original) {
    if (accum < numTimes) {
        element.textContent = replaceAt(element.textContent, charindex, rand());
        setTimeout(function(){ flickerChar(element, charindex, numTimes, accum + 1, original) }, 20);
    }
    else {
        element.textContent = original;
    }
}

function flicker() {
    const ps = document.getElementsByTagName("p");
    const toflicker = ps[Math.floor(Math.random() * ps.length)];
    const flickerindex = Math.floor(Math.random() * toflicker.textContent.length);
    const numTimes = Math.floor(Math.random() * 7 + 1);
    
    flickerChar(toflicker, flickerindex, numTimes, 0, toflicker.textContent);
}

function addRandom(element, numTimes, totalTarget, delay)
{
    if (numTimes < totalTarget) {
        element.textContent += rand()
        setTimeout(function(){ addRandom(element, numTimes + 1, totalTarget, delay) }, delay);
    }
}

function death() {
    const ps = document.getElementsByTagName("p");
    let contents = [];
    for (let element of ps)
    {
        element.textContent = "";
        addRandom(element, 0, 5000, 1);
    }

    setTimeout(()=>{
        document.body.innerHTML = "";
        
        setTimeout(()=>{
            window.location.reload();
        }, 1000);
    }, 3000);
}

window.addEventListener("load", () => {
    typeText("title", 0);
    typeText("nextmeeting", 200);
    typeText("about", 400);
    typeText("competitions", 600);
    typeText("practice", 800);
    typeText("other", 1000);

    setTimeout(() => {
        setInterval(() => {
            if (Math.random() > .5) {
                flicker();
            }
        }, 400);
    }, 2000);

    setTimeout(() => {
        setInterval(() => {
            if (Math.random() > .99) {
                death();
            }
        }, 400);
    }, 2000);

    setTimeout(() => {
        const next = document.getElementById("nextmeeting");
        setInterval(() => {
            if (next.textContent.charAt(14) == ":") {
                next.textContent = replaceAt(next.textContent, 14, " ");
            }
            else {
                next.textContent = replaceAt(next.textContent, 14, ":");
            }
        }, 500);
    }, 2000);
});