const switchBtn = document.querySelector(".btn");
const body = document.querySelector("body");
const audio = document.querySelector("#audio");
switchBtn.addEventListener("click", () => {
    body.classList.toggle("on");
    const color = randomColor();
    if (body.className === "on") {
        body.style.background = `radial-gradient(${color}, #111)`;
    } else body.style.background = "#222";
    audio.play();
});

const randomColor = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return "#" + n.slice(0, 6);
};
